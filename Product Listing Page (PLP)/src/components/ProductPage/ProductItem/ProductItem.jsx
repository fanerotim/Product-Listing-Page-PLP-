import styles from './ProductItem.module.scss';
import { CiStar} from 'react-icons/ci';

export const ProductItem = ({ product }) => {

    const { imageUrl, description, name, price, rating } = product;

    return (
        <article className={styles.product__card}>
            <img
                className={styles.product__card__image}
                src={imageUrl}
                alt={description} />
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
            <p
                className={styles.product__card__price}
            >
                {price}
            </p>
            <p
                className={styles.product__card__rating}
            >
                {rating.map((i) => {
                    return <CiStar/>
                })}
            </p>

            <button>
                Add to cart
            </button>
        </article>
    )
}