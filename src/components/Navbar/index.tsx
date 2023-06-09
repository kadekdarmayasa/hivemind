import React, { useState, useEffect } from 'react';
import Brand from '@components/Brand';
import type { NavigationMenuProps } from 'types/NavigationMenu.ts';
import { motion } from 'framer-motion';
import NavigationMenu from './NavigationMenu.tsx';
import HamburgerMenu from './HamburgerMenu.tsx';

export default function Navbar({ menus }: { menus: NavigationMenuProps[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [screenSize, setScreenSize] = useState({ width: window.innerWidth });

  const handleResize = () => {
    setScreenSize((prevState) => ({ ...prevState, width: window.innerWidth }));
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    screenSize.width >= 720 ? setIsOpen(true) : setIsOpen(false);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [screenSize.width]);

  return (
    <motion.nav
      className="flex h-[80px] justify-between items-center relative overflow-hiddens"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Brand />
      <HamburgerMenu setIsOpen={setIsOpen} isOpen={isOpen} />
      <NavigationMenu isOpen={isOpen} setIsOpen={setIsOpen} menus={menus} />
    </motion.nav>
  );
}
