import styles from '../../../styles/Articel.module.css';

import Images from './articel/images';

export default function Articel({data, username}) {
    const uri = '/items/' + data['ID'];
    return <>
        <br/>
        <div className={styles.articelBox}>
            <div className={styles.articelHeader}>
                <h3 className={styles.articelTitle}><a href={uri}>{data['title']}</a></h3>
            </div>
            <div className={styles.articelBody}>
                <p className={styles.articelCreateTime}>
                    {username} - {data['timestamp']}
                </p>
                <div class="row">
                    <div class="col-lg-3">
                        <Images />
                    </div>
                    <div class="col-lg-9">
                        <p className={styles.articelText}>
                            {data['description']}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>;
}