import { useState } from "react";
import { initialState } from "../Filter/utils/filterOptions";

export const useFilterState = () => {
    const [filterState, setFilterState] = useState(initialState)

    const filterStateHandler = (group, option) => {

        setFilterState((prev) => {
            return {
                ...prev,
                [group]: option,
            }
        })
    }

    const clearFiltersHandler = () => {
        setFilterState(initialState);
    }

    return {
        filterState,
        filterStateHandler,
        clearFiltersHandler
    }
}