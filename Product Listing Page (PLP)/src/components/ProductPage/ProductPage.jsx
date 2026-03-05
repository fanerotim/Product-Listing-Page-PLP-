import styles from './ProductPage.module.scss';
import { database } from "../../../database/database";
import { FaFilter } from "react-icons/fa";

import { ProductItem } from "./components/ProductItem/ProductItem";
import { Filter } from './components/Filter/Filter';
import { Sort } from './components/Sort/Sort';
import { ProductCounter } from './components/ProductCounter/ProductCounter';
import { LoadMoreButton } from './components/LoadMoreButton/LoadMoreButton';
import { useFilterState } from './components/hooks/useFilterState';
import { useFilterItems } from './components/hooks/useFilterItems';
import { useSortState } from './components/hooks/useSortState';
import { useSortItems } from './components/hooks/useSortItems';
import { usePaginate } from './components/hooks/usePaginate';
import { useIsFiltersOpen } from './components/hooks/is-filters-open-state/useIsFiltersOpen';

export const ProductPage = ({ activeCategory }) => {

    const products = database.filter((p) => p.category === activeCategory);

    const { filterState, filterStateHandler, clearFiltersHandler } = useFilterState();
    const filteredItems = useFilterItems(filterState, products[0].items);

    const { sortValue, sortValueHandler } = useSortState();
    const sortedItems = useSortItems(sortValue, filteredItems);

    const { itemsCount, loadMoreItemsHandler } = usePaginate(sortedItems, activeCategory);
    const visibleItems = sortedItems.slice(0, itemsCount);
    const hasNoMoreItems = visibleItems.length >= sortedItems.length;

    const { isFiltersOpen, isFiltersOpenHandler } = useIsFiltersOpen();

    return (

        <div className={styles.product__page__wrapper}>

            <div
                className={styles.mobile__filter__element__container}
                onClick={isFiltersOpenHandler}
            >
                <button
                    className={styles.mobile__filter__element__container__button}
                >
                    Filters
                </button>
                <FaFilter
                    className={styles.mobile__filter__element__container__icon}
                />
            </div>

            <article
                className={`
                    ${styles.product__page__filter__container}
                    ${styles.product__page__filter__container__small}
                    ${isFiltersOpen
                        ? styles.product__page__filter__container__small__open
                        : styles.product__page__filter__container__small__closed}    
                    `
                }
            >
                <Filter
                    filterState={filterState}
                    filterStateHandler={filterStateHandler}
                    clearFiltersHandler={clearFiltersHandler}
                    isFiltersOpen={isFiltersOpen}
                    isFiltersOpenHandler={isFiltersOpenHandler}
                />
            </article>

            <article
                className={styles.product__page__product__counter__container}
            >
                <ProductCounter
                    visibleItemsCount={visibleItems.length}
                    totalItemsCount={sortedItems.length}
                />
            </article>

            <article
                className={styles.product__page__category__description__container}
            >
                <h1
                    className={styles.product__page__category__description__container__heading}
                >
                    {activeCategory}
                </h1>
                <p
                    className={styles.product__page__category__description__container__description}
                >
                    {products[0].description}
                </p>
            </article>

            <article
                className={styles.product__page__sort__container}
            >
                <Sort sortValue={sortValue} sortValueHandler={sortValueHandler} />
            </article>

            <div className={styles.product__page__product__container}>
                {
                    visibleItems.length > 0
                        ?
                        visibleItems.map((p) => {
                            return (
                                <ProductItem key={p.id} product={p} />
                            )
                        })
                        :
                        <div
                            className={styles.product__page__product__container__no__match__container}
                        >
                            <p
                                className={styles.product__page__product__container__no__match__container__text}
                            >
                                No products match your filters. Try adjusting them to see more results.
                            </p>
                        </div>
                }
            </div>

            <div
                className={styles.product__page__load__more__btn__container}
            >
                <LoadMoreButton
                    loadMoreItemsHandler={loadMoreItemsHandler}
                    hasNoMoreItems={hasNoMoreItems}
                />
            </div>

        </div>
    )
}