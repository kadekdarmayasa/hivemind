import { useEffect, useState } from 'react';

export function useScreenSize() {
  const [screenSize, setScreenSize] = useState({ width: 0 });

  useEffect(() => {
    const handleResize = () => setScreenSize({ width: window.innerWidth });

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return [screenSize];
}
