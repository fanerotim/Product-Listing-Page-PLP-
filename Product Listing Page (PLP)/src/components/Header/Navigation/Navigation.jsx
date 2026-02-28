import styles from './Navigation.module.scss';
import { database } from '../../../../database/database';

export const Navigation = ({ handleChangeCategory }) => {

    return (
        <nav className={styles.nav}>
            <ul>
                {database.map((d => {
                    return (
                        <li key={d.id} onClick={() => handleChangeCategory(d.category)}>{d.category}</li>
                    )
                }))}
            </ul>
        </nav>
    )
}