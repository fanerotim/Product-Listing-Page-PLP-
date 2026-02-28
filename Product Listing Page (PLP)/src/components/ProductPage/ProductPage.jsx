import styles from './ProductPage.module.scss';
import { database } from "../../../database/database";

import { ProductItem } from "./components/ProductItem/ProductItem";
import { Filter } from './components/Filter/Filter';
import { Sort } from './components/Sort/Sort';
import { ProductCounter } from './components/ProductCounter/ProductCounter';

export const ProductPage = ({ activeCategory }) => {

    const products = database.filter((p) => p.category === activeCategory);

    return (

        <div className={styles.product__page__wrapper}>

            <article
                className={styles.product__page__filter__container}>
                <Filter />
            </article>

            <article
                className={styles.product__page__product__counter__container}
            >
                <ProductCounter />
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
                <Sort />
            </article>

            <div className={styles.product__page__product__container}>
                {products[0].items.map((p) => {
                    return (
                        <ProductItem key={p.id} product={p} />
                    )
                })}
            </div>

            <div
                className={styles.product__page__load__more__btn}
            >
                <button>Load more</button>
            </div>

        </div>
    )
}