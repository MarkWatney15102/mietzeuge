import styles from '../../styles/Information.module.css';

import ImageSlide from '../../components/articel/imageSlide';
import BookBar from '../../components/articel/bookBar';
import ArticelDescription from '../../components/articel/articelDescription';
import ArticelTitle from '../../components/articel/articelTitle';
import ProfileBlock from '../../components/articel/profileBlock';
import ArticelRating from '../../components/articel/articelRatings';

export default function Information() {
  return <>
    <div className={styles.articelContent}>
        <div class="row">
            <div class="col-xs-12">
                <ArticelTitle />
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8">
                <ImageSlide />
                <ArticelDescription />
            </div>
            <div class="col-xs-12 col-sm-4">
                <BookBar />
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
