import styles from './Sort.module.scss';
import { useSortDropdownBehavior } from './hooks/useSortDropdownBehavior';
import { sortCriteria } from './utils/sortCriteria';

export const Sort = ({ sortOption, sortOptionHandler }) => {

    const { isDropdownOpen, dropdownHandler } = useSortDropdownBehavior();

    return (
        <div>
            <p>Sort by</p>
            <article
                onClick={dropdownHandler}
                className={styles.sort__option__container}
            >
                <p>
                    {sortOption}
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
                        className={`
                            ${styles.dropdown__option} 
                            ${sortOption === c.criteria ? styles.dropdown__option__selected : ''}`}
                        onClick={() => {
                            dropdownHandler();
                            sortOptionHandler(c.criteria);
                        }}
                    >
                        {c.criteria}
                    </p>
                ))}
            </div>

        </div>
    )
}