import styles from './ProductPage.module.scss';
import { database } from "../../../database/database";

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


export const ProductPage = ({ activeCategory }) => {

    const products = database.filter((p) => p.category === activeCategory);

    const { filterState, filterStateHandler, clearFiltersHandler } = useFilterState();
    const filteredItems = useFilterItems(filterState, products[0].items);

    const { sortValue, sortValueHandler } = useSortState();
    const sortedItems = useSortItems(sortValue, filteredItems);

    const { itemsCount, loadMoreItemsHandler } = usePaginate(sortedItems, activeCategory);
    const visibleItems = sortedItems.slice(0, itemsCount);
    const hasNoMoreItems = visibleItems.length >= sortedItems.length;

    return (

        <div className={styles.product__page__wrapper}>

            <article
                className={styles.product__page__filter__container}>
                <Filter
                    filterState={filterState}
                    filterStateHandler={filterStateHandler}
                    clearFiltersHandler={clearFiltersHandler}
                />
            </article>

            <article
                className={styles.product__page__product__counter__container}
            >
                <ProductCounter 
                    visibleItems={visibleItems.length}
                    totalItems={sortedItems.length}
                />
            </article>

            <article
                className={styles.product__page__category__description__container}
            >
                <h1>{activeCategory}</h1>
                <p>{products[0].description}</p>
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
                            <h1>
                                No items found!
                            </h1>
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