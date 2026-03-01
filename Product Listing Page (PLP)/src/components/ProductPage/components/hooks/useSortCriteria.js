import { useState } from "react";

export const useSortCriteria = () => {
    const [sortValue, setSortValue] = useState('alphabetical-ascending');

    const sortValueHandler = (value) => {
        setSortValue(value);
    }

    return {
        sortValue,
        sortValueHandler
    }
}