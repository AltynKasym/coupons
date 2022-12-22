import { FC, useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom';

interface ScrollToTopProps {
}

const ScrollToTop: FC<ScrollToTopProps> = ({}) => {
    const location = useLocation();

    useLayoutEffect(() => {
        document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location.pathname]);

    return null
}

export default ScrollToTop