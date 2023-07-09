import { motion } from 'framer-motion';
import { fadeVariants, transformVariants, commonMotionProps } from '@utils/motion';
import type { BlogItemProps } from 'types/BlogItem';
import BlogCarousel from '../common/Blog';

export default function Blog({ blogs }: { blogs: BlogItemProps[] }) {
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

      <BlogCarousel blogs={blogs} />
    </section>
  );
}
