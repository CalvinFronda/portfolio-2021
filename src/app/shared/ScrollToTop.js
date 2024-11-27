import React, { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollToTop = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 400) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {showScrollToTop && (
        <button
          className="scroll-to-top-btn"
          type="button"
          onClick={() => scroll.scrollTo(100)}
        >
          <KeyboardArrowUpIcon />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
