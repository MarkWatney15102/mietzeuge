import styles from '../../../styles/ProfileInformation.module.css';

export default function ProfileInformation({userData}) {
    
    const imageClassname = styles.profileImage + " fas fa-user";
    return <>
        <div class="card">
            <div class="card-body">
                <div className={styles.profileImageContainer}>
                    <i className={imageClassname}></i>
                </div>
                <br />
                <p>Benutzername: {userData.username ?? ""}</p>
                <p>Email Adresse: {userData.email ?? ""}</p>
            </div>
        </div>
    </>;

}