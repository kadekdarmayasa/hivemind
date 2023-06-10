import { useState, useEffect, useLayoutEffect } from 'react';
import Brand from '@components/Brand';
import type { NavItemProps } from 'types/NavItem';
import { motion } from 'framer-motion';
import NavigationMenu from './NavigationMenu';
import HamburgerMenuButton from './HamburgerMenuButton';

export default function Navbar({ menus }: { menus: NavItemProps[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [screenSize, setScreenSize] = useState({ width: window.innerWidth });

  useLayoutEffect(() => {
    const handleResize = () => {
      setScreenSize({ width: window.innerWidth });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setIsOpen(screenSize.width >= 720);
  }, [screenSize.width]);

  return (
    <motion.nav
      className="flex h-[80px] justify-between items-center relative overflow-hiddens"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Brand />
      <HamburgerMenuButton setIsOpen={setIsOpen} isOpen={isOpen} />
      <NavigationMenu isOpen={isOpen} setIsOpen={setIsOpen} menus={menus} />
    </motion.nav>
  );
}
