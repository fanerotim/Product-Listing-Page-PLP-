import styles from './ItemAddedModal.module.scss';

export const ItemAddedModal = () => {
    return (
        <article
            className={styles.modal__container}
        >  
            <p>Item sucessfully added to cart</p>
        </article>   
    )
}