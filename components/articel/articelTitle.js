import styles from '../../styles/ArticelTitle.module.css';

export default function ArticelTitle({title}) {
    return <>
        <h2 class="card-title">{title}</h2>
        <p className={styles.path}>Garten &gt; Elektrisch &gt; Rasenmäher</p>
    </>;
}