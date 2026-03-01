import { useState } from "react";

export const useSortCriteria = () => {
    const [sortOption, setSortOption] = useState('Alphabetical (A-Z)');

    const sortOptionHandler = (value) => {
        setSortOption(value);
    }

    return {
        sortOption,
        sortOptionHandler
    }
}