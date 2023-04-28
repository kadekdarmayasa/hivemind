import Slider from "react-slick";
import TeamItem from "../TeamItem";

export default function TeamCarousel({ teams }: { teams: TeamProps }): JSX.Element {
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
    <div className="h-auto my-4 mb-20">
      <Slider {...settings} className="h-auto">
        {teams.map((team, index) => (
          <TeamItem team={team} key={index} />
        ))}
      </Slider>
    </div>
  )
}

type TeamProps = {
  _id: number,
  imagePath: string,
  name: string,
  title: string,
  socials: {
    facebook: string,
    twitter: string,
    linkedin: string
  }
}[]