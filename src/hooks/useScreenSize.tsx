import { useLayoutEffect, useState } from 'react';
import { useIsSsr } from './useIsSsr';

export const useScreenSize = () => {
  const [isSsr] = useIsSsr();

  const [screenSize, setScreenSize] = useState({ width: isSsr && window.innerWidth });

  useLayoutEffect(() => {
    const handleResize = () => setScreenSize({ width: window.innerWidth });

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  });

  return [screenSize];
};
