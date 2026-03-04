import { useState } from "react";

export const useIsFiltersOpen = () => {
    const [isFiltersOpen, setIsFiltersOpen] = useState(false);

    const isFiltersOpenHandler = () => {
        setIsFiltersOpen((prev) => !prev);
    }

    return {
        isFiltersOpen,
        isFiltersOpenHandler
    }
}