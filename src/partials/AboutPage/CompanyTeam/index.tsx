import React from 'react';
import Slider from 'react-slick';
import type { TeamProps } from 'types/Team';
import TeamItem from './TeamItem.tsx';
import useSlider from '@hooks/useSlider.tsx';
import SliderArrow from '@components/SliderArrow.tsx';

export default function CompanyTeam({ teams }: { teams: TeamProps[] }) {
  const { handlePrevSlide, handleNextSlide, sliderRef } = useSlider();

  const settings = {
    className: 'slider variable-width',
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    pauseOnHover: true,
    slidesPerRow: 1,
    rows: 1,
  };

  // TODO: Using framer motion for animation
  return (
    <section className="mt-32">
      <div className="flex flex-col justify-center text-center">
        <small className="label-text">Our Teams</small>
        <h2 className="heading-2">Meet Our Professional Teams</h2>
      </div>

      <SliderArrow
        prevSlideHandler={handlePrevSlide}
        nextSlideHandler={handleNextSlide}
      />

      <div className="h-auto my-4">
        <Slider ref={sliderRef} {...settings} className="h-auto">
          {teams.map((team, index) => (
            <TeamItem team={team} key={index} />
          ))}
        </Slider>
      </div>
    </section>
  );
}
