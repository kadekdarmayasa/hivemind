import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { fadeVariants, transformVariants, commonMotionProps } from '@utils/motion';
import { useSlider } from '@hooks/useSlider';
import type { TestimonyItemProps } from 'types/TestimonyItem';
import SliderArrow from '../../common/SliderArrow';
import TestimonyItem from './TestimonyItem';

export default function Testimony({ testimonies }: { testimonies: TestimonyItemProps[] }) {
  const { handleNextSlide, handlePrevSlide, sliderRef, sliderConfig } = useSlider();

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
          Testimony
        </motion.small>
        <motion.h2
          {...commonMotionProps}
          variants={transformVariants('linear')}
          custom={1}
          className="heading-2"
        >
          What Clients Says
        </motion.h2>
      </motion.div>

      <SliderArrow prevSlideHandler={handlePrevSlide} nextSlideHandler={handleNextSlide} />

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
