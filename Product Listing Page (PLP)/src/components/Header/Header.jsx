import styles from './Header.module.scss';
import { Navigation } from "./Navigation/Navigation"

export const Header = ({ handleChangeCategory, activeCategory }) => {
    return (
        <header className={styles.header__element__wrapper}>
            <div
                className={styles.header__element__wrapper__nav__and__logo__container}
            >
                <h1>Logo</h1>
                <Navigation
                    handleChangeCategory={handleChangeCategory}
                    activeCategory={activeCategory}
                />
            </div>
        </header>
    )
}