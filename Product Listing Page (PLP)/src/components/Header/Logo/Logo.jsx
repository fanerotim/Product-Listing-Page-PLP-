import styles from './Logo.module.scss';

export const Logo = () => {
    return (
        <h1
            className={styles.logo}
        >
            chapter
            <span
                className={styles.logo__decoration}
            >.
            </span>
        </h1>
    )
}