import React, { useMemo } from 'react';
import { IconContext } from 'react-icons';
import { IoArrowBackOutline } from 'react-icons/io5';
import Button from './Button.tsx';

export default function SliderArrow({
  prevSlideHandler,
  nextSlideHandler,
  arrowPos = 'default',
}: {
  prevSlideHandler: () => void;
  nextSlideHandler: () => void;
  arrowPos?: 'default' | 'right';
}) {
  const iconProps = useMemo(() => ({ size: '1.2em' }), []);

  return (
    <div
      className={`flex  xl:justify-end mb-8 mt-10 xl:mt-0 ${
        arrowPos === 'right' ? 'justify-end' : 'justify-center'
      }`}
    >
      <Button
        type="button"
        className="bg-white h-11 w-11 rounded-full shadow-black-sm hover:shadow-black-md mr-4 trasition-all"
        onClick={prevSlideHandler}
      >
        <IconContext.Provider value={iconProps}>
          <IoArrowBackOutline />
        </IconContext.Provider>
      </Button>
      <Button
        type="button"
        className="bg-white h-11 w-11 rounded-full rotate-180 shadow-black-sm hover:shadow-black-md trasition-all"
        onClick={nextSlideHandler}
      >
        <IconContext.Provider value={iconProps}>
          <IoArrowBackOutline />
        </IconContext.Provider>
      </Button>
    </div>
  );
}
