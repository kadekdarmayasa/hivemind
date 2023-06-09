import React from 'react';
import { motion, Variants } from 'framer-motion';
import type { BlogItemProps } from 'types/BlogItem';
import Slider from 'react-slick';
import useSlider from '@hooks/useSlider.tsx';
import SliderArrow from '@components/SliderArrow.tsx';
import BlogItem from './BlogItem.tsx';

export default function Blog({
  blogs,
  arrowPos = 'default',
}: {
  blogs: BlogItemProps[];
  arrowPos?: 'default' | 'right';
}) {
  const { handleNextSlide, handlePrevSlide, sliderRef } = useSlider();

  const blogSliderVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { ease: 'linear' },
    },
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
    <>
      <SliderArrow
        prevSlideHandler={handlePrevSlide}
        nextSlideHandler={handleNextSlide}
        arrowPos={arrowPos}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={blogSliderVariants}
        viewport={{ once: true }}
        className="h-auto mb-20"
      >
        <Slider ref={sliderRef} {...settings} className="bg-ghost-white h-auto">
          {blogs.map((blog) => (
            <BlogItem key={blog.id} blog={blog} />
          ))}
        </Slider>
      </motion.div>
    </>
  );
}
