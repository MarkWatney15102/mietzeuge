import Image from 'next/image'

import styles from '../../styles/Information.module.css';

import ImageSlide from '../../views/articel/imageSlide';
import BookBar from '../../views/articel/bookBar';
import ArticelDescription from '../../views/articel/articelDescription';
import ArticelTitle from '../../views/articel/articelTitle';

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
            </div>
        </div>
    </div>
  </>;
}
