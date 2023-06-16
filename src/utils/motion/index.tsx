import { MotionProps } from 'framer-motion';

export const commonMotionProps: MotionProps = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true },
};

export { transformVariants, fadeVariants, hoverVariants } from './variants';
