import styles from './LoadMoreButton.module.scss';

export const LoadMoreButton = ({ loadMoreItemsHandler, hasNoMoreItems }) => {

    return (
        <button
            onClick={loadMoreItemsHandler}
            disabled={hasNoMoreItems}
        >
            Load more
        </button>
    )
}