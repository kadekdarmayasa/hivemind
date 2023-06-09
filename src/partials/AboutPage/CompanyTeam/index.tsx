import React from 'react';
import { motion, Variants } from 'framer-motion';
import Slider from 'react-slick';
import type { TeamProps } from 'types/Team';
import useSlider from '@hooks/useSlider.tsx';
import SliderArrow from '@components/SliderArrow.tsx';
import TeamItem from './TeamItem.tsx';

export default function CompanyTeam({ teams }: { teams: TeamProps[] }) {
  const { handlePrevSlide, handleNextSlide, sliderRef } = useSlider();

  const fadeVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        ease: 'linear',
        staggerChildren: 1,
      },
    },
  };

  const transformVariants: Variants = {
    hidden: { y: 120, opacity: 0 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.3,
        ease: 'linear',
      },
    }),
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
        initial="hidden"
        whileInView="visible"
        variants={fadeVariants}
        viewport={{ once: true }}
        className="flex flex-col justify-center text-center"
      >
        <motion.small
          initial="hidden"
          whileInView="visible"
          variants={transformVariants}
          viewport={{ once: true }}
          className="label-text"
        >
          Our Teams
        </motion.small>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={transformVariants}
          viewport={{ once: true }}
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
        initial="hidden"
        whileInView="visible"
        variants={fadeVariants}
        viewport={{ once: true }}
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
