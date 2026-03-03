import styles from './Navigation.module.scss';
import { database } from '../../../../database/database';

export const Navigation = ({ handleChangeCategory, activeCategory }) => {

    return (
        <nav className={styles.nav}>
            <ul>
                {database.map((d => {
                    return (
                        <li
                            key={d.id}
                            onClick={() => handleChangeCategory(d.category)}
                            className={activeCategory === d.category ? styles.active : ''}
                        >{d.category}
                        </li>
                    )
                }))}
            </ul>
        </nav>
    )
}