import Slider from "react-slick";
import TeamItem from "../TeamItem";
import type { TeamProps } from "types/Team";
import Fade from 'react-reveal/Fade';

export default function TeamCarousel({ teams }: { teams: TeamProps[] }): JSX.Element {
  const settings = {
    className: "slider variable-width",
    infinite: true,
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
    <Fade duration={3000}>
      <div className="h-auto my-4">
        <Slider {...settings} className="h-auto">
          {teams.map((team, index) => (
            <TeamItem team={team} key={index} />
          ))}
        </Slider>
      </div>
    </Fade>
  )
}
