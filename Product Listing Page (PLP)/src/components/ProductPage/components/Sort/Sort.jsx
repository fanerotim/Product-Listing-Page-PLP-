import styles from './Sort.module.scss';
import { useSortElementBehavior } from './hooks/useSortElementBehavior';
import { sortCriteria } from './utils/sortCriteria';

export const Sort = () => {

    const { isDropdownOpen, dropdownHandler } = useSortElementBehavior();


    return (
        <div>
            <p>Sort by</p>
            <article
                onClick={dropdownHandler}
                className={styles.sort__option__container}
            >
                <p>
                    Select an option
                </p>
                {
                    isDropdownOpen
                        ? (<span className={styles.down__arrow}></span>)
                        : (<span className={styles.up__arrow}></span>)
                }
            </article>


            <div
                className={
                    `${styles.sort__dropdown__wrapper} 
                     ${isDropdownOpen ? styles.open : ''}`
                }
            >
                {sortCriteria.map((c) => (
                    <p
                        key={c.id}
                        className={styles.dropdown__option}
                        onClick={dropdownHandler}
                    >
                        {c.criteria}
                    </p>
                ))}
            </div>

        </div>
    )
}