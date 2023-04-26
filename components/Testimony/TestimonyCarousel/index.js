import Slider from "react-slick";
import PropTypes from 'prop-types';
import TestimonyItem from "../TestimonyItem";

export default function TestimonyCarousel({ testimonies }) {
  const settings = {
    className: "slider variable-width",
    dots: false,
    lazyLoad: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    pauseOnHover: true,
  };

  return (
    <div className="h-auto my-4 mb-20">
      <Slider {...settings} className="bg-ghost-white h-auto">
        {testimonies.map(testimony => (
          <div key={testimony._id} className="mt-10" style={{ width: 430 }}>
            <TestimonyItem testimony={testimony} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

TestimonyCarousel.propTyopes = {
  testimonies: PropTypes.array
}