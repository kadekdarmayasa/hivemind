import { Variants, Easing } from 'framer-motion';

const fadeVariants = (ease: Easing): Variants => ({
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: {
      ease,
      delay: i * 0.3,
      staggerChildren: 1,
    },
  }),
});

const transformVariants = (ease: Easing): Variants => ({
  hidden: { y: 120, opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      ease,
      delay: i * 0.3,
      duration: 0.3,
    },
  }),
});

const hoverVariants = (scale: number, boxShadow: string): Variants => ({
  hover: {
    scale,
    boxShadow,
  },
});

export { transformVariants, fadeVariants, hoverVariants };
