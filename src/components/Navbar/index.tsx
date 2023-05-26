import React from 'react';
import Brand from '@components/Brand';
import type { NavigationMenuProps } from 'types/NavigationMenu.ts';
import NavigationMenu from './NavigationMenu.tsx';

export default function Navbar({ menus }: { menus: NavigationMenuProps[] }) {
  // TODO: using framer motion for animation
  return (
    <nav className="flex h-[80px] justify-between items-center">
      <Brand />
      <ul className="flex items-center">
        {menus.map((menu, index) => (
          <NavigationMenu
            key={index}
            path={menu.path}
            name={menu.name}
            containSubMenu={menu.containSubMenu}
            subMenus={menu.subMenus}
          />
        ))}
      </ul>
    </nav>
  );
}
