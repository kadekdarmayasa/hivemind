import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { VIEWPORT_SIZE } from '@constants/index';
import { useScreenSize } from '@hooks/useScreenSize';
import type NavItemType from 'types/NavItem';
import Brand from '../Brand';
import NavigationMenu from './NavigationMenu';
import HamburgerMenuButton from './HamburgerMenuButton';

type NavbarProps = {
  menus: NavItemType[];
};

export default function Navbar({ menus }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { screenSize } = useScreenSize();

  useEffect(() => {
    setIsOpen(
      screenSize.width
        ? screenSize.width >= VIEWPORT_SIZE.TABLET
        : window.innerWidth >= VIEWPORT_SIZE.TABLET,
    );
  }, [screenSize]);

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
