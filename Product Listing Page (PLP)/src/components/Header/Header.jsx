import styles from './Header.module.scss';
import { Navigation } from "./Navigation/Navigation"

export const Header = ({handleChangeCategory, activeCategory}) => {
    return (
        <header className={styles.header}>
            <h1>Logo</h1>
            <Navigation 
                handleChangeCategory={handleChangeCategory}
                activeCategory={activeCategory}
            />
        </header>
    )
}