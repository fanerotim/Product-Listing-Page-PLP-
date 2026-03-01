import { useState } from "react"

export const useSortElementBehavior = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const dropdownHandler = () => {
        setIsDropdownOpen((prev) => !prev);
    }

    return {
        isDropdownOpen,
        dropdownHandler
    }
}