import React, { useMemo, useState } from 'react';
import Brand from '@components/Brand';
import type { NavigationMenuProps } from 'types/NavigationMenu.ts';
import { IconContext } from 'react-icons';
import { IoMenuOutline, IoCloseCircleOutline } from 'react-icons/io5';
import Button from '@components/Button.tsx';
import NavigationMenu from './NavigationMenu.tsx';

export default function Navbar({ menus }: { menus: NavigationMenuProps[] }) {
  const iconProps = useMemo(() => ({ size: '1.5em' }), []);
  const closeIconProps = useMemo(
    () => ({ size: '3em', className: 'text-brave-purple' }),
    [],
  );
  const [isNavMenuShown, setIsNavMenuShown] = useState(false);

  const showNavMenu = () => {
    setIsNavMenuShown(true);
  };

  const hideNavMenu = () => {
    setIsNavMenuShown(false);
  };

  // TODO: using framer motion for animation
  return (
    <nav className="flex h-[80px] justify-between items-center relative overflow-hiddens">
      <Brand />
      <Button
        type="button"
        className="border w-11 h-11 md:hidden"
        onClick={showNavMenu}
      >
        <IconContext.Provider value={iconProps}>
          <IoMenuOutline />
        </IconContext.Provider>
      </Button>
      <ul
        className={`flex justify-center items-center flex-col md:flex-row max-sm:fixed max-sm:top-0 max-sm:left-0 max-sm:right-0  ${
          isNavMenuShown
            ? 'max-sm:bottom-0 max-sm:opacity-100'
            : 'max-sm:bottom-full max-sm:opacity-0'
        } max-sm:bg-coarse-wool/90 z-10 max-sm:w-full max-sm:px-12 max-sm:overflow-hidden transition-all duration-300`}
      >
        {menus.map((menu, index) => (
          <NavigationMenu key={index} path={menu.path} name={menu.name} />
        ))}
        <Button type="button" className="sm:hidden" onClick={hideNavMenu}>
          <IconContext.Provider value={closeIconProps}>
            <IoCloseCircleOutline />
          </IconContext.Provider>
        </Button>
      </ul>
    </nav>
  );
}
