import { useState } from "react";

export const useAddToCartState = () => {

    const [isVisible, setIsVisible] = useState(false);

    const addToCartHandler = () => {
        setIsVisible(true);

        setTimeout(() => {
            setIsVisible(false);
        }, 3000)
    }

    return {
        isVisible,
        addToCartHandler
    }
}