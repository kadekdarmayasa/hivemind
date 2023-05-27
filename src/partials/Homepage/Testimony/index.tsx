import React from 'react';
import type { TestimonyItemProps } from 'types/TestimonyItem.ts';
import Slider from 'react-slick';
import TestimonyItem from './TestimonyItem.tsx';

export default function Testimony({
  testimonies,
  isContainLabel,
  labelText,
  title,
}: {
  testimonies: TestimonyItemProps[],
  labelText?: string,
  isContainLabel?: boolean,
  title: string
}) {
  const settings = {
    className: 'slider variable-width',
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    pauseOnHover: true,
    slidesPerRow: 1,
    rows: 1,
  };

  // TODO : Using framer motion for animation
  return (
    <section className="mt-32 2xl:mt-44">
      <div className="flex flex-col items-center text-center">
        {isContainLabel && (
          <small className="label-text">{labelText}</small>
        )}
        <h2 className="heading-2">{title}</h2>
      </div>

      <div className="h-auto my-4 mb-20">
        <Slider {...settings} className="bg-ghost-white h-auto">
          {testimonies.map((testimony) => (
            <TestimonyItem key={testimony.id} testimony={testimony} />
          ))}
        </Slider>
      </div>
    </section>
  );
}
