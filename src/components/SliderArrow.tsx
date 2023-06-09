import React from 'react';
import { motion, Variants } from 'framer-motion';
import { IconContext } from 'react-icons';
import { IoArrowBackOutline, IoArrowForwardOutline } from 'react-icons/io5';
import Button from './Button.tsx';

const arrowIconProps = { size: '1.2em' };

export default function SliderArrow({
  prevSlideHandler,
  nextSlideHandler,
  arrowPos = 'default',
}: {
  prevSlideHandler: () => void;
  nextSlideHandler: () => void;
  arrowPos?: 'default' | 'right';
}) {
  const sliderArrowVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { ease: 'linear' },
    },
  };

  return (
    <motion.div
      variants={sliderArrowVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`flex  xl:justify-end mb-8 mt-10 xl:mt-0 ${
        arrowPos === 'right' ? 'justify-end' : 'justify-center'
      }`}
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
