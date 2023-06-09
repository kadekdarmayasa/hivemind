import { motion, MotionProps } from 'framer-motion';
import { fadeVariants, transformVariants } from '@utils/motion/variants';
import Slider from 'react-slick';
import type { TeamProps } from 'types/Team';
import useSlider from '@hooks/useSlider.tsx';
import SliderArrow from '@components/SliderArrow.tsx';
import TeamItem from './TeamItem';

export default function CompanyTeam({
  teams,
}: {
  teams: TeamProps[];
}): JSX.Element {
  const { handlePrevSlide, handleNextSlide, sliderRef } = useSlider();

  const commonMotionProps: MotionProps = {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true },
  };

  const settings = {
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

  return (
    <section className="mt-32">
      <motion.div
        {...commonMotionProps}
        variants={fadeVariants('linear')}
        className="flex flex-col justify-center text-center"
      >
        <motion.small
          {...commonMotionProps}
          variants={transformVariants('linear')}
          className="label-text"
        >
          Our Teams
        </motion.small>
        <motion.h2
          {...commonMotionProps}
          variants={transformVariants('linear')}
          custom={1}
          className="heading-2"
        >
          Meet Our Professional Teams
        </motion.h2>
      </motion.div>

      <SliderArrow
        prevSlideHandler={handlePrevSlide}
        nextSlideHandler={handleNextSlide}
      />

      <motion.div
        {...commonMotionProps}
        variants={fadeVariants('linear')}
        className="h-auto my-4"
      >
        <Slider ref={sliderRef} {...settings} className="h-auto">
          {teams.map((team, index) => (
            <TeamItem team={team} key={index} />
          ))}
        </Slider>
      </motion.div>
    </section>
  );
}
