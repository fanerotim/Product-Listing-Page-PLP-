export const useFilterItems = (filterState, items) => {
    let filteredItems = [];

    const checkIfMatches = (item, key, value) => {
        // TODO: implement logic for rating as it's array in item and number as a value   
        return item[key] === value;
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
    console.log(filteredItems);
}