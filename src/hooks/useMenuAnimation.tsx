import { useEffect, useState } from 'react';
import { useAnimate, stagger } from 'framer-motion';

export const useMenuAnimation = (isOpen: boolean) => {
  const staggerMenuItems = stagger(0.1, { startDelay: 0.2 });
  const [scope, animate] = useAnimate();
  const [isLastMenuItemInView, setIsLastMenuItemInView] = useState(false);

  useEffect(() => {
    animate(
      '.close-menu-btn',
      isLastMenuItemInView ? { y: 0, opacity: 1 } : { y: 150, opacity: 0 },
      {
        duration: 0.3,
        delay: isOpen ? staggerMenuItems : 0,
      },
    );

    animate('li', isOpen ? { y: 0, opacity: 1 } : { y: 150, opacity: 0 }, {
      duration: 0.3,
      delay: isOpen ? staggerMenuItems : 0,
    });
  });

  return { scope, setIsLastMenuItemInView };
};
