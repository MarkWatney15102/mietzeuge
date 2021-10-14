import { useEffect, useState } from 'react';

import styles from '../../styles/Information.module.css';

import ImageSlide from '../../components/articel/imageSlide';
import BookBar from '../../components/articel/bookBar';
import ArticelDescription from '../../components/articel/articelDescription';
import ArticelTitle from '../../components/articel/articelTitle';
import ProfileBlock from '../../components/articel/profileBlock';
import ArticelRating from '../../components/articel/articelRatings';


const Information = ({query}) => {
    const [loaded, setLoaded] = useState(false);
    const [articelData, setArticelData] = useState([]);

    const articelId = query.articel;

    useEffect(() => {
        fetch('http://127.0.0.1:43921/articel/' + articelId).then(
            res => res.json()
        ).then((res) => {
            setArticelData(res.articel[0]);
            setLoaded(true);
        });
    }, []);

    if (loaded) {
        return <>
            <div className={styles.articelContent}>
                <div class="row">
                    <div class="col-xs-12">
                        <ArticelTitle title={articelData['title']} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-sm-8">
                        <ImageSlide />
                        <ArticelDescription 
                            description={articelData['description']} 
                            category={articelData['category']}
                        />
                    </div>
                    <div class="col-xs-12 col-sm-4">
                        <BookBar
                            articelId={articelData['ID']}
                            pricePerDay={articelData['cost_per_day']} 
                            deposit={articelData['deposit']}
                            additionalCost={articelData['additional_cost']}
                        />
                        <br />
                        <ProfileBlock />
                    </div>
                </div>
                <br />
                <div class="row">
                    <div class="col-xs-12 col-sm-8">
                        <ArticelRating />
                    </div>
                </div>
            </div>
        </>;
    }
    
    return <></>;
}

Information.getInitialProps = ({query}) => {
    return {query};
} 

export default Information;
