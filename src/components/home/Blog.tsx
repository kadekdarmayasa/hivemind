import { motion } from 'framer-motion';
import { fadeVariants, transformVariants, commonMotionProps } from '@utils/motion';
import type BlogItemType from 'types/BlogItem';
import { useSlider } from '@hooks/useSlider';
import BlogItem from '@components/common/BlogItem';
import SliderArrow from '@components/common/SliderArrow';
import Slider from 'react-slick';

export default function Blog({ blogs }: { blogs: BlogItemType[] }) {
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
          Our Blogs
        </motion.small>
        <motion.h2
          {...commonMotionProps}
          variants={transformVariants('linear')}
          custom={1}
          className="heading-2"
        >
          Latest Posts
        </motion.h2>
      </motion.div>

      <SliderArrow
        prevSlideHandler={handlePrevSlide}
        nextSlideHandler={handleNextSlide}
        arrowPos="default"
      />

      <motion.div {...commonMotionProps} variants={fadeVariants('linear')} className="h-auto mb-20">
        <Slider ref={sliderRef} {...sliderConfig} className="bg-ghost-white h-auto">
          {blogs.map((blog) => (
            <BlogItem key={blog.id} blog={blog} />
          ))}
        </Slider>
      </motion.div>
    </section>
  );
}
