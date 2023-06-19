import { useRef, MutableRefObject } from 'react';
import Slider from 'react-slick';

type sliderConfigProps = {
  className: string;
  infinite: boolean;
  speed: number;
  autoplay: boolean;
  autoplaySpeed: number;
  slidesToShow: number;
  slidesToScroll: number;
  variableWidth: boolean;
  pauseOnHover: boolean;
  slidesPerRow: number;
  rows: number;
};

type SliderReturnType = [
  () => void,
  () => void,
  MutableRefObject<Slider | null>,
  sliderConfigProps,
];

export const useSlider = (): SliderReturnType => {
  const sliderRef = useRef<Slider | null>(null);

  const sliderConfig: sliderConfigProps = {
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

  return [handleNextSlide, handlePrevSlide, sliderRef, sliderConfig];
};
