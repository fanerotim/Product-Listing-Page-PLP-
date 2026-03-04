import styles from './ProductCounter.module.scss';

export const ProductCounter = ({visibleItemsCount, totalItemsCount}) => {   
    return (
        <p
            className={styles.product__counter__text}
        >
            {visibleItemsCount} out of {totalItemsCount} products
        </p>
    )
}