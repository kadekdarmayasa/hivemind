import { useRef, useEffect, Dispatch, SetStateAction } from 'react';
import type { NavItemProps } from 'types/NavItem';
import Button from '@components/Button.tsx';
import { IconContext } from 'react-icons';
import { useMenuAnimation } from '@hooks/useMenuAnimation.tsx';
import { useInView } from 'framer-motion';
import { IoCloseCircleOutline } from 'react-icons/io5';
import NavigationMenuItem from './NavigationMenuItem';

type NavigationMenuProps = {
  isOpen: boolean;
  menus: NavItemProps[];
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const closeIconProps: IconContext = {
  size: '3em',
  className: 'text-white group-hover:text-palatinate-blue transition-all',
};

export default function NavigationMenu({
  isOpen,
  setIsOpen,
  menus,
}: NavigationMenuProps): JSX.Element {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { scope, setIsLastMenuItemInView } = useMenuAnimation(isOpen);

  useEffect(() => {
    setIsLastMenuItemInView(isInView);
  }, [isInView, setIsLastMenuItemInView]);

  return (
    <ul
      ref={scope}
      className={`flex justify-center items-center flex-col md:flex-row fixed md:static top-0 md:top-auto left-0 md:left-auto right-0 md:right-auto  ${
        isOpen
          ? 'bottom-0 md:bottom-auto opacity-100 md:opacity-100'
          : 'bottom-full md:bottom-auto opacity-0 md:opacity-100'
      } bg-coarse-wool/90 md:bg-transparent z-10 w-full md:w-auto px-12 md:px-0 overflow-hidden md:overflow-visible transition-all duration-300`}
    >
      {menus.map((menu, i) => (
        <NavigationMenuItem
          key={i}
          path={menu.path}
          name={menu.name}
          lastMenuItemRef={menus.length - 1 === i ? ref : null}
        />
      ))}

      <Button
        type="button"
        onClick={() => setIsOpen(false)}
        className="group md:hidden close-menu-btn"
      >
        <IconContext.Provider value={closeIconProps}>
          <IoCloseCircleOutline />
        </IconContext.Provider>
      </Button>
    </ul>
  );
}
