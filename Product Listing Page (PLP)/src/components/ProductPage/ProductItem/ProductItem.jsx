import styles from './ProductItem.module.scss';
import { CiStar } from 'react-icons/ci';

export const ProductItem = ({ product }) => {

    const { imageUrl, description, name, price, rating, discount } = product;

    return (
        <article className={styles.product__card}>
            <img
                className={styles.product__card__image}
                src={imageUrl}
                alt={name} />
            <p
                className={styles.product__card__name}
            >
                {name}
            </p>
            <p
                className={styles.product__card__description}
            >
                {description}
            </p>

            {discount
                ?
                <>
                    <p
                        className={`${styles.product__card__price} ${styles.product__card__discounted}`}
                    >
                        {price.toFixed(2)}€
                    </p>

                    <p
                        className={styles.product__card__price}
                    >
                        {(price * 0.8).toFixed(2)}€
                    </p>
                </>
                :
                <p
                    className={styles.product__card__price}
                >
                    {price.toFixed(2)}€
                </p>
            }

            <p
                className={styles.product__card__rating}
            >
                {rating.map((_, i) => (
                    <CiStar key={i} />
                ))}
            </p>

            <button className={styles.product__card__add__to__cart__btn}>
                Add to cart
            </button>
        </article>
    )
}