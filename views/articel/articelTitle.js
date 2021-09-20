import styles from '../../styles/ArticelTitle.module.css';

export default function ArticelTitle() {
    return <>
        <h2 class="card-title">Demo Artikel</h2>
        <p className={styles.path}>Garten &gt; Elektrisch &gt; Rasenmäher</p>
    </>;
}