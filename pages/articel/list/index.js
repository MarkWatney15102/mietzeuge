import { useEffect, useState } from 'react';

import ListElement from '../../../components/articel/list/listElement';

export default function ArticelList() {
    const [loaded, setLoaded] = useState(false);
    const [articelData, setArticelData] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:43921/articel/list').then(
            res => res.json()
        ).then((res) => {
            setArticelData(res.articels);
            setLoaded(true);
        });
    }, []);

    if (loaded) {

        let articels = [];
        for (let k in articelData) {
            articels.push(articelData[k]);
        }
        return <>
            <div class="col-sm-12 col-md-6 offset-md-3">
            {
                Object.keys(articels).map(
                    (key, index) => {
                        return <ListElement data={articels[key]} />
                    }
                )
            }
            </div>
        </>;
    }

    return <></>;
}