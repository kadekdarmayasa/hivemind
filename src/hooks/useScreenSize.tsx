import { useLayoutEffect, useState } from 'react';

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({ width: 0 });

  useLayoutEffect(() => {
    const handleResize = () => setScreenSize({ width: window.innerWidth });

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  });

  return [screenSize];
};
