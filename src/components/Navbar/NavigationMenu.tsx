import React, { useMemo } from 'react';
import type { NavigationMenuProps } from 'types/NavigationMenu';
import Button from '@components/Button.tsx';
import { IconContext } from 'react-icons';
import { motion, AnimatePresence } from 'framer-motion';
import { IoCloseCircleOutline } from 'react-icons/io5';
import NavigationMenuItem from './NavigationMenuItem.tsx';

export default function NavigationMenu({
  isOpen,
  setIsOpen,
  menus,
}: {
  isOpen: boolean;
  menus: NavigationMenuProps[];
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  let lastMenuTransitionValue = 0;
  const iconProps = useMemo(
    () => ({
      size: '3em',
      className: 'text-white group-hover:text-palatinate-blue transition-all',
    }),
    [],
  );

  return (
    <ul
      className={`flex justify-center items-center flex-col md:flex-row fixed md:static top-0 md:top-auto left-0 md:left-auto right-0 md:right-auto  ${
        isOpen
          ? 'bottom-0 md:bottom-auto opacity-100 md:opacity-100'
          : 'bottom-full md:bottom-auto opacity-0 md:opacity-100'
      } bg-coarse-wool/90 md:bg-transparent z-10 w-full md:w-auto px-12 md:px-0 overflow-hidden md:overflow-visible transition-all duration-300`}
    >
      {menus.map((menu, index) => {
        lastMenuTransitionValue = index * 0.3 + 1;

        return (
          <AnimatePresence key={index}>
            {isOpen && (
              <motion.div
                initial={{ translateY: 100, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{ duration: index * 0.3 + 1 }}
              >
                <NavigationMenuItem path={menu.path} name={menu.name} />
              </motion.div>
            )}
          </AnimatePresence>
        );
      })}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ translateY: 100, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ duration: lastMenuTransitionValue * 0.3 + 1 }}
          >
            <Button type="button" onClick={() => setIsOpen(false)} className="group md:hidden">
              <IconContext.Provider value={iconProps}>
                <IoCloseCircleOutline />
              </IconContext.Provider>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </ul>
  );
}
