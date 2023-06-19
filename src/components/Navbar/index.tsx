import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Brand from '@components/Brand';
import { useScreenSize } from '@hooks/useScreenSize';
import type { NavItemProps } from 'types/NavItem';
import NavigationMenu from './NavigationMenu';
import HamburgerMenuButton from './HamburgerMenuButton';

type NavbarProps = {
  menus: NavItemProps[];
};

const TABLET_VIEWPORT_SIZE = 720;

export default function Navbar({ menus }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [screenSize] = useScreenSize();

  useEffect(() => {
    setIsOpen(
      screenSize.width
        ? screenSize.width >= TABLET_VIEWPORT_SIZE
        : window.innerWidth >= TABLET_VIEWPORT_SIZE,
    );
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
