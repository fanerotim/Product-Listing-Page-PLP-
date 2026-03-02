export const useFilterItems = (filterState, items) => {
    let filteredItems = [];

    const checkIfMatches = (item, key, value) => {
        
        let itemValue = item[key];
        
        if (key === 'rating') {
            itemValue = item[key].length;
        } 
        
        return itemValue === value;
    }

    filteredItems = items.filter((item) => {

        for (let key in filterState) {
            const value = filterState[key];
 
            if (value !== null) {
                const isMatching = checkIfMatches(item, key, value);

                if (isMatching) {
                    continue;
                }

                return false;
            }
        }
        return true;
    })
    return filteredItems;
}