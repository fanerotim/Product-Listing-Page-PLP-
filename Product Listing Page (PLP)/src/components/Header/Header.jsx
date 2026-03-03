import styles from './Header.module.scss';
import { Navigation } from "./Navigation/Navigation";
import { Logo } from './Logo/Logo';

export const Header = ({ handleChangeCategory, activeCategory }) => {
    return (
        <header className={styles.header__element__wrapper}>
            <div
                className={styles.header__element__wrapper__nav__and__logo__container}
            >
                <Logo/>
                <Navigation
                    handleChangeCategory={handleChangeCategory}
                    activeCategory={activeCategory}
                />
            </div>
        </header>
    )
}