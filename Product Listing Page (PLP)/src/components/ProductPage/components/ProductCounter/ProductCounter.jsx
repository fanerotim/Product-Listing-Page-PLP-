import styles from './ProductCounter.module.scss';

export const ProductCounter = ({visibleItems, totalItems}) => {   
    return (
        <h4>{visibleItems} out of {totalItems}</h4>
    )
}