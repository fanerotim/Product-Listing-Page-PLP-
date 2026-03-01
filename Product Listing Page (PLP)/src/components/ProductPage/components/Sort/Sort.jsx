import styles from './Sort.module.scss';
import { useSortDropdownBehavior } from './hooks/useSortDropdownBehavior';
import { sortCriteria } from './utils/sortCriteria';

export const Sort = ({ sortValue, sortValueHandler }) => {

    const { isDropdownOpen, dropdownHandler } = useSortDropdownBehavior();
    // I want to get sort label to display as selected option in dropdown
    const sortObject = sortCriteria.find((obj) => obj.value === sortValue);

    return (
        <div
            className={styles.sort__element__container}
        >

            <p>Sort by</p>
            <article
                onClick={dropdownHandler}
                className={styles.sort__option__container}
            >
                <p>
                    {sortObject.label}
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
                            ${sortValue === c.value ? styles.dropdown__option__selected : ''}`}
                        onClick={() => {
                            dropdownHandler();
                            sortValueHandler(c.value);
                        }}
                    >
                        {c.label}
                    </p>
                ))}
            </div>

        </div>
    )
}