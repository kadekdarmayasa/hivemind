import axios from 'axios';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import TeamProps from 'types/Team';
import { useSlider } from '@hooks/useSlider.tsx';
import { fadeVariants, transformVariants, commonMotionProps } from '@utils/motion';
import SliderArrow from '@components/common/SliderArrow';
import TeamItem from './TeamItem';

export default function CompanyTeam() {
  const { handleNextSlide, handlePrevSlide, sliderRef, sliderConfig } = useSlider();
  const [teams, setTeams] = useState<TeamProps[]>([]);

  useEffect(() => {
    axios.get('/api/teams').then((response) => setTeams(response.data.teams));
    return () => setTeams([]);
  }, []);

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

      <SliderArrow prevSlideHandler={handlePrevSlide} nextSlideHandler={handleNextSlide} />

      <motion.div {...commonMotionProps} variants={fadeVariants('linear')} className="h-auto my-4">
        <Slider ref={sliderRef} {...sliderConfig} className="h-auto">
          {teams.map((team, index) => (
            <TeamItem team={team} key={index} />
          ))}
        </Slider>
      </motion.div>
    </section>
  );
}
