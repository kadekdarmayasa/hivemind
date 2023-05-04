import Slider from "react-slick";
import TestimonyItem from "../TestimonyItem";
import type { TestimonyItemProps } from 'types/TestimonyItem';

export default function TestimonyCarousel({ testimonies }: { testimonies: TestimonyItemProps[] }): JSX.Element {
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
      <Slider {...settings} className="bg-ghost-white h-auto">
        {testimonies.map(testimony => (
          <TestimonyItem key={testimony._id} testimony={testimony} />
        ))}
      </Slider>
    </div>
  )
}
