export const useSortItems = (sortValue, items) => {

    const itemsToSorted = items.slice(0);
    let sortedItems = [];

    // TODO: current there is no logic to sort discounted items properly and also cyrillic items are not sorted / add logic to handle that

    switch(sortValue) {
        case 'price-ascending':
            sortedItems = items.sort((a, b) => a.price - b.price);
            break;
        case 'price-descending':
            sortedItems = items.sort((a, b) => b.price - a.price)
            break;
        case 'alphabetical-ascending':
            sortedItems = items.sort((a, b) => a.name.localeCompare(b.name))
            break;
        case 'alphabetical-descending':
            sortedItems = items.sort((a, b) => b.name.localeCompare(a.name))
            break;
        default:
            return items;
    }

    return sortedItems;
}