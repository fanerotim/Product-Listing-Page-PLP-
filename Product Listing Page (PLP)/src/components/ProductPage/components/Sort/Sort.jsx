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

            <p
                className={styles.sort__element__container__label}
            >
                Sort by
            </p>
            <article
                onClick={dropdownHandler}
                className={styles.sort__option__container}
            >
                <p
                    className={styles.sort__option__container__selected__option}
                >
                    {sortObject.label}
                </p>
                {
                    isDropdownOpen
                        ? (<span className={styles.sort__option__container__down__arrow}></span>)
                        : (<span className={styles.sort__option__container__up__arrow}></span>)
                }
            </article>

            <div
                className={
                    `${styles.sort__dropdown__wrapper} 
                     ${isDropdownOpen ? styles.sort__dropdown__wrapper__open : ''}`
                }
            >
                {sortCriteria.map((c) => (
                    <p
                        key={c.id}
                        className={`
                            ${styles.sort__dropdown__wrapper__option} 
                            ${sortValue === c.value ? styles.sort__dropdown__wrapper__option__selected : ''}`}
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