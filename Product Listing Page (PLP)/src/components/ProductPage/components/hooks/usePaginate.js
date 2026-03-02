import { useState, useEffect } from "react";
const initialItemsCount = 5;

export const usePaginate = (sortedItems, activeCategory) => {

    const [itemsCount, setItemsCount] = useState(initialItemsCount);

    useEffect(() => {
        setItemsCount((_) => initialItemsCount);
    }, [sortedItems.length, activeCategory]) // not perfect dependency list, ubt it works for now; will think if it's worth it to memoize sortedItems and filterState;

    const loadMoreItemsHandler = () => {
        setItemsCount((prev) => prev + initialItemsCount);
    }

    return {
        loadMoreItemsHandler,
        itemsCount
    }
}