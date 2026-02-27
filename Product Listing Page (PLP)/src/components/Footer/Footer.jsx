import styles from './Footer.module.scss';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <ul>
                <li><a href="#">About us</a></li>
                <li><a href="#">Terms And Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
            </ul>
        </footer>
    )
}