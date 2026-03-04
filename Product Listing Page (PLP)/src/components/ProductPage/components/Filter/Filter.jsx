import styles from './Filter.module.scss';
import { filterOptions } from './utils/filterOptions';
import { RiCloseLargeFill } from "react-icons/ri";

export const Filter = ({
    filterState,
    filterStateHandler,
    clearFiltersHandler,
    isFiltersOpen,
    isFiltersOpenHandler }) => {

    // TODO: consider adding aria-pressed attribute
    return (
        <section
            className={styles.filter__element__container}
        >

            <h3
                className={styles.filter__element__container__heading}
            >
                Filters
            </h3>

            {
                isFiltersOpen &&
                <button
                    onClick={isFiltersOpenHandler}
                    className={styles.filter__element__container__close__filters__button}
                >
                    <RiCloseLargeFill />
                </button>}

            {filterOptions.map((filter) => (
                <article
                    className={styles.filter__group__container}
                    key={filter.id}
                >
                    <h4
                        className={styles.filter__group__container__label}
                    >
                        {filter.label}
                    </h4>

                    <div
                        className={styles.filter__group__options__container}
                    >
                        {filter.options.map((option, i) => (
                            <button
                                key={option.value}
                                onClick={() => filterStateHandler(filter.value, option.value)}
                                className={`
                                        ${styles.filter__group__options__container__option}
                                        ${filterState[filter.value] === option.value ? styles.filter__group__options__container__option__selected : ''}
                                        `}
                            >
                                {option.label}
                            </button>
                        ))}

                    </div>

                </article>
            ))}

            <button
                onClick={clearFiltersHandler}
                className={styles.filter__element__container__clear__filters__btn}
            >
                Reset all filters
            </button>
        </section>
    )
}