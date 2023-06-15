import { motion } from 'framer-motion';
import { IconContext } from 'react-icons';
import { IoArrowBackOutline, IoArrowForwardOutline } from 'react-icons/io5';
import { fadeVariants, commonMotionProps } from '@utils/motion';
import Button from './Button';

type SliderArrowProps = {
  prevSlideHandler: () => void;
  nextSlideHandler: () => void;
  arrowPos?: 'default' | 'right';
};

const arrowIconProps = { size: '1.2em' };

export default function SliderArrow(props: SliderArrowProps) {
  const { prevSlideHandler, nextSlideHandler, arrowPos = 'default' } = props;
  const arrowAlignment = arrowPos === 'right' ? 'justify-end' : 'justify-center';

  return (
    <motion.div
      {...commonMotionProps}
      variants={fadeVariants('linear')}
      className={`flex xl:justify-end mb-8 mt-10 xl:mt-0 ${arrowAlignment}`}
    >
      <Button
        type="button"
        className="bg-white h-11 w-11 rounded-full shadow-black-sm hover:shadow-black-md mr-4 trasition-all"
        onClick={prevSlideHandler}
      >
        <IconContext.Provider value={arrowIconProps}>
          <IoArrowBackOutline />
        </IconContext.Provider>
      </Button>
      <Button
        type="button"
        className="bg-white h-11 w-11 rounded-full shadow-black-sm hover:shadow-black-md trasition-all"
        onClick={nextSlideHandler}
      >
        <IconContext.Provider value={arrowIconProps}>
          <IoArrowForwardOutline />
        </IconContext.Provider>
      </Button>
    </motion.div>
  );
}
