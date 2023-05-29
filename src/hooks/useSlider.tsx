import { useRef } from 'react';
import Slider from 'react-slick';

export default function useSlider() {
  const sliderRef = useRef<Slider | null>(null);

  const handleNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return { handleNextSlide, handlePrevSlide, sliderRef };
}
