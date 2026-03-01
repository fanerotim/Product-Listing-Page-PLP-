import styles from './Filter.module.scss';
import { filterOptions } from './utils/filterOptions';

export const Filter = () => {


    // TODO: consider adding aria-pressed attribute
    return (
        <>
            <h3>Filter</h3>
            <div
                className={styles.filter__container}
            >
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
                                    className={styles.filter__group__options__container__option}
                                >
                                    {option.label}
                                </button>
                            ))}
                        </div>

                    </article>
                ))}

            </div>
        </>
    )
}