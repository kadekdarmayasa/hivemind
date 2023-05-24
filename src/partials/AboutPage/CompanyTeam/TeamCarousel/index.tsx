import React from 'react';
import Slider from 'react-slick';
import type { TeamProps } from 'types/Team';
import TeamCarouselItem from '../TeamCarouselItem/index.tsx';

export default function TeamCarousel({ teams }: { teams: TeamProps[] }) {
  const settings = {
    className: 'slider variable-width',
    infinite: false,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    pauseOnHover: true,
    slidesPerRow: 1,
    rows: 1,
  };

  return (
    // TODO: using framer motion for animation
    <div className="h-auto my-4">
      <Slider {...settings} className="h-auto">
        {teams.map((team, index) => (
          <TeamCarouselItem team={team} key={index} />
        ))}
      </Slider>
    </div>
  );
}
