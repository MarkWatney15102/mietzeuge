import { useState, useEffect } from 'react';
import axios from 'axios';
import user from '../../lib/user/user';

import ProfileInformation from "../../components/user/profile/profileInformation";
import ArticelList from "../../components/user/profile/articelList";
import ArticelListHeader from "../../components/user/profile/articelListHeader";

export default function Profile() {
    const [loadedUserdata, setLoadedUserData] = useState(false);
    const [loadedArticelData, setLoadedArticelData] = useState(false);

    const [userData, setUserData] = useState([]);
    const [articelData, setArticelData] = useState([]);

    useEffect(() => {
        const userId = user.getUserUid();
        const token = user.getUserToken();

        axios.post(
            'http://127.0.0.1:43921/user/profile',
            {
                userId: userId,
                token: token
            }
        ).then((res) => {
            if (res.data.userData) {
                setUserData(res.data.userData);
                setLoadedUserData(true);
            }
        });

        axios.post(
            'http://127.0.0.1:43921/user/profile/articel',
            {
                userId: userId,
                token: token
            }
        ).then((res) => {
            if (res.data.articel) {
                setArticelData(res.data.articel);
                setLoadedArticelData(true);
            }
        });

    }, []);

    if (loadedUserdata && loadedArticelData) {
        return <>
            <br />
            <br />
            <br />
            <div class="row">
                <div class="col-lg-3">
                    <ProfileInformation userData={userData} />
                </div>
                <div class="col-lg-9">
                    <ArticelListHeader articelCount={articelData.length} />
                    <ArticelList articel={articelData} username={userData.username} />
                </div>
            </div>
        </>;
    } else {
        return <></>;
    }
}