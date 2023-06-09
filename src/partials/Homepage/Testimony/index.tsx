import { MotionProps, motion } from 'framer-motion';
import { fadeVariants, transformVariants } from '@utils/motion/variants';
import type { TestimonyItemProps } from 'types/TestimonyItem';
import Slider from 'react-slick';
import useSlider from '@hooks/useSlider';
import SliderArrow from '@components/SliderArrow';
import TestimonyItem from './TestimonyItem';

type TestimonyProps = {
  title: string;
  testimonies: TestimonyItemProps[];
  labelText?: string;
};

export default function Testimony({
  testimonies,
  labelText,
  title,
}: TestimonyProps): JSX.Element {
  const { handleNextSlide, handlePrevSlide, sliderRef } = useSlider();

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

  const commonMotionProps: MotionProps = {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true },
  };

  return (
    <section className="mt-32 2xl:mt-44">
      <motion.div
        {...commonMotionProps}
        variants={fadeVariants('linear')}
        className="flex flex-col items-center text-center"
      >
        <motion.small
          {...commonMotionProps}
          variants={transformVariants('linear')}
          custom={0}
          className="label-text"
        >
          {labelText}
        </motion.small>
        <motion.h2
          {...commonMotionProps}
          variants={transformVariants('linear')}
          custom={1}
          className="heading-2"
        >
          {title}
        </motion.h2>
      </motion.div>

      <SliderArrow
        prevSlideHandler={handlePrevSlide}
        nextSlideHandler={handleNextSlide}
      />

      <motion.div variants={fadeVariants('linear')} {...commonMotionProps}>
        <Slider ref={sliderRef} {...sliderConfig} className="bg-transparent">
          {testimonies.map((testimony) => (
            <TestimonyItem key={testimony.id} testimony={testimony} />
          ))}
        </Slider>
      </motion.div>
    </section>
  );
}
