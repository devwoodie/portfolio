import { useEffect, ReactNode } from "react";
import { useLocation } from "react-router-dom";

interface ScrollToTopProps {
    children: ReactNode;
}

export const ScrollToTop: React.FC<ScrollToTopProps> = (props) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return <>{props.children}</>;
}