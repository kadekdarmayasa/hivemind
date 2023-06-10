import { motion } from 'framer-motion';
import { commonMotionProps, fadeVariants } from '@utils/motion/';
import type { BlogItemProps } from 'types/BlogItem';
import Slider from 'react-slick';
import useSlider from '@hooks/useSlider.tsx';
import SliderArrow from '@components/SliderArrow.tsx';
import BlogItem from './BlogItem';

type BlogProps = {
  blogs: BlogItemProps[];
  arrowPos?: 'default' | 'right';
};

export default function Blog({ blogs, arrowPos = 'default' }: BlogProps) {
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
