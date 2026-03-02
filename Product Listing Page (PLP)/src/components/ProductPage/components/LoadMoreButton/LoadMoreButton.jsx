import styles from './LoadMoreButton.module.scss';

export const LoadMoreButton = ({ loadMoreItemsHandler }) => {

    return (
        <button
            onClick={loadMoreItemsHandler}
        >
            Load more
        </button>
    )
}