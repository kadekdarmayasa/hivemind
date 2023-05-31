import React, { useMemo, useState } from 'react';
import Brand from '@components/Brand';
import type { NavigationMenuProps } from 'types/NavigationMenu.ts';
import { IconContext } from 'react-icons';
import { IoMenuOutline, IoCloseCircleOutline } from 'react-icons/io5';
import Button from '@components/Button.tsx';
import NavigationMenu from './NavigationMenu.tsx';

export default function Navbar({ menus }: { menus: NavigationMenuProps[] }) {
  const menuIconProps = useMemo(
    () => ({
      size: '2em',
      className:
        'text-brave-purple group-hover:text-palatinate-blue transition-all',
    }),
    [],
  );
  const closeIconProps = useMemo(
    () => ({
      size: '3em',
      className: 'text-white group-hover:text-palatinate-blue transition-all',
    }),
    [],
  );
  const [isNavMenuShown, setIsNavMenuShown] = useState(false);

  // TODO: using framer motion for animation
  return (
    <nav className="flex h-[80px] justify-between items-center relative overflow-hiddens">
      <Brand />
      <Button
        type="button"
        className="border w-11 h-11 md:hidden group hover:border-palatinate-blue transition-all rounded-md"
        onClick={() => setIsNavMenuShown(true)}
      >
        <IconContext.Provider value={menuIconProps}>
          <IoMenuOutline />
        </IconContext.Provider>
      </Button>
      <ul
        className={`flex justify-center items-center flex-col md:flex-row fixed md:static top-0 md:top-auto left-0 md:left-auto right-0 md:right-auto  ${
          isNavMenuShown
            ? 'bottom-0 md:bottom-auto opacity-100 md:opacity-100'
            : 'bottom-full md:bottom-auto opacity-0 md:opacity-100'
        } bg-coarse-wool/90 md:bg-transparent z-10 w-full md:w-auto px-12 md:px-0 overflow-hidden md:overflow-visible transition-all duration-300`}
      >
        {menus.map((menu, index) => (
          <NavigationMenu key={index} path={menu.path} name={menu.name} />
        ))}
        <Button
          type="button"
          onClick={() => setIsNavMenuShown(false)}
          className="group md:hidden"
        >
          <IconContext.Provider value={closeIconProps}>
            <IoCloseCircleOutline />
          </IconContext.Provider>
        </Button>
      </ul>
    </nav>
  );
}
