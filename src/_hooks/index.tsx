import { useEffect, useState } from 'react';

const useViewPort = () => {
  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    function handleResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowSize <= 768;

  return { windowSize, isMobile };
};

export { useViewPort };
