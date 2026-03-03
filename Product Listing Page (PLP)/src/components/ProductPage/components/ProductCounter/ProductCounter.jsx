import styles from './ProductCounter.module.scss';

export const ProductCounter = ({visibleItemsCount, totalItemsCount}) => {   
    return (
        <h4>{visibleItemsCount} out of {totalItemsCount}</h4>
    )
}