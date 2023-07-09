import { motion } from 'framer-motion';
import Slider from 'react-slick';
import type BlogItemType from 'types/BlogItem';
import { useSlider } from '@hooks/useSlider.tsx';
import { commonMotionProps, fadeVariants } from '@utils/motion/';
import SliderArrow from '../SliderArrow';
import BlogItem from './BlogItem';

type BlogProps = {
  blogs: BlogItemType[];
  arrowPos?: 'default' | 'right';
};

export default function Blog({ blogs, arrowPos = 'default' }: BlogProps) {
  const { handleNextSlide, handlePrevSlide, sliderRef, sliderConfig } = useSlider();

  return (
    <>
      <SliderArrow
        prevSlideHandler={handlePrevSlide}
        nextSlideHandler={handleNextSlide}
        arrowPos={arrowPos}
      />

      <motion.div {...commonMotionProps} variants={fadeVariants('linear')} className="h-auto mb-20">
        <Slider ref={sliderRef} {...sliderConfig} className="bg-ghost-white h-auto">
          {blogs.map((blog) => (
            <BlogItem key={blog.id} blog={blog} />
          ))}
        </Slider>
      </motion.div>
    </>
  );
}
