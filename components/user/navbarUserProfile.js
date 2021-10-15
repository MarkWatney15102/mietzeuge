import styles from '../../styles/NavbarUserProfile.module.css';

export default function NavbarUserProfile() {
    return <>
        <form class="d-flex">
            <a href="/profile" className={styles.profilePicture}><i class="fas fa-user"></i></a>
        </form>
    </>;
}