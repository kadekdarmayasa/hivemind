import React, { useMemo } from 'react';
import { IconContext } from 'react-icons';
import { IoArrowBackOutline } from 'react-icons/io5';
import Button from './Button.tsx';

export default function SliderArrow({
  prevSlideHandler,
  nextSlideHandler,
}: {
  prevSlideHandler: () => void;
  nextSlideHandler: () => void;
}) {
  const iconProps = useMemo(() => ({ size: '1.2em' }), []);

  return (
    <div className="flex justify-end mb-8">
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
