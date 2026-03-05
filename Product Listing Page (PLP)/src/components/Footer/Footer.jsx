import styles from './Footer.module.scss';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <ul
                className={styles.footer__list}
            >
                <li className={styles.footer__list__item}>
                    <a
                        className={styles.footer__list__item__link}
                        href="javascript:void(0)">About us
                    </a>
                </li>
                <li className={styles.footer__list__item}>
                    <a
                        className={styles.footer__list__item__link}
                        href="javascript:void(0)">Terms And Conditions
                    </a>
                </li>
                <li className={styles.footer__list__item}>
                    <a
                        className={styles.footer__list__item__link}
                        href="javascript:void(0)">Privacy Policy
                    </a>
                </li>
            </ul>
        </footer>
    )
}