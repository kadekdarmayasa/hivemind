import { useRef } from 'react';
import Slider from 'react-slick';

export const useSlider = () => {
  const sliderRef = useRef<Slider | null>(null);

  const sliderConfig = {
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

  const handleNextSlide = () => {
    sliderRef.current?.slickNext();
  };

  const handlePrevSlide = () => {
    sliderRef.current?.slickPrev();
  };

  return { handleNextSlide, handlePrevSlide, sliderRef, sliderConfig };
};
