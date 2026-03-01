export const useSortItems = (sortValue, items) => {

    const itemsToSort = items.slice(0);
    let sortedItems = [];

    // TODO: current there is no logic to sort discounted items properly and also cyrillic items are not sorted / add logic to handle that

    switch(sortValue) {
        case 'price-ascending':
            sortedItems = itemsToSort.sort((a, b) => a.price - b.price);
            break;
        case 'price-descending':
            sortedItems = itemsToSort.sort((a, b) => b.price - a.price)
            break;
        case 'alphabetical-ascending':
            sortedItems = itemsToSort.sort((a, b) => a.name.localeCompare(b.name))
            break;
        case 'alphabetical-descending':
            sortedItems = itemsToSort.sort((a, b) => b.name.localeCompare(a.name))
            break;
        default:
            return sortedItems;
    }

    return itemsToSort;
}