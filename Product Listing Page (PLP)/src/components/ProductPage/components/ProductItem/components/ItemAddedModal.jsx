import styles from './ItemAddedModal.module.scss';
import { FaCheck } from "react-icons/fa";

export const ItemAddedModal = () => {
    return (
        <article
            className={styles.modal__container}
        >
            <FaCheck className={styles.modal__container__success__icon} />
            <p
                className={styles.modal__container__text}
            >
                Product added to cart
            </p>


        </article>
    )
}