import styles from './ProductPage.module.scss';
import { database } from "../../../database/database";
import { ProductItem } from "./components/ProductItem/ProductItem";
import {Filter} from './components/Filter/Filter';
import {Sort} from './components/Sort/Sort';

export const ProductPage = ({ activeCategory }) => {

    const products = database.filter((p) => p.category === activeCategory);

    return (
        <div className={styles.page__wrapper}>
            <ul>
                {products[0].items.map((p) => {
                    return (
                        <ProductItem key={p.id} product={p} />
                    )
                })}
            </ul>
        </div>
    )
}