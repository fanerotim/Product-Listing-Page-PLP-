import styles from './LoadMoreButton.module.scss';

export const LoadMoreButton = ({ loadMoreItemsHandler, hasNoMoreItems }) => {

    return (
        <button
            disabled={hasNoMoreItems}
            className={styles.load__more__button}
            onClick={loadMoreItemsHandler}
        >
            Load more items
        </button>
    )
}