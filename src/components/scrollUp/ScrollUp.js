import { useEffect } from "react";
import { useScrollButton } from '../../store'

import "./scrollUp.scss";

const ScrollButton = () => {
    const { isVisible, toggleVisibility, scrollToTop } = useScrollButton()

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, [toggleVisibility]);

    return (
        <div 
            className="scrollUp"
            style={{ visibility: isVisible ? "visible" : "hidden", opacity: isVisible ? "1" : "0" }}
            onClick={scrollToTop}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM377 271c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-87-87-87 87c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L239 167c9.4-9.4 24.6-9.4 33.9 0L377 271z" />
            </svg>
        </div>
    );
};

export default ScrollButton;