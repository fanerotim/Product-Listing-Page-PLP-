import { useState, useEffect } from "react";

export const useIsFiltersOpen = () => {
    const [isFiltersOpen, setIsFiltersOpen] = useState(false);

    useEffect(() => {

        if (isFiltersOpen) {
            // make sure content does not shift right when we disable scroll
            const scrollbarWidth = window.innerWidth - document.body.clientWidth;
            document.body.style.paddingRight = scrollbarWidth + 'px';
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.paddingRight = '0px';
            document.body.style.overflow = 'auto';
        }

        // make sure filter state is set to close when browser window is greater than 700px to avoid seeing elements ftom mobile filter menu
        const handleResize = () => {

            if (window.innerWidth > 700 && isFiltersOpen) {
                isFiltersOpenHandler();
            }
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);

    }, [isFiltersOpen])

    const isFiltersOpenHandler = () => {
        setIsFiltersOpen((prev) => !prev);
    }

    return {
        isFiltersOpen,
        isFiltersOpenHandler
    }
}