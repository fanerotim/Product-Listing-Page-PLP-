import styles from './Navigation.module.scss';

export const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    Category 1
                </li>
                <li>
                    Category 2
                </li>
            </ul>
        </nav>
    )
}