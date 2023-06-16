import { motion } from 'framer-motion';
import { transformVariants, commonMotionProps } from '@utils/motion';
import type { BlogItemProps } from 'types/BlogItem';
import Blog from '@components/Blog';

type RelatedArticleProps = {
  relatedArticles: BlogItemProps[];
};

export default function RelatedArticle({ relatedArticles }: RelatedArticleProps) {
  return (
    <section className="mt-16">
      <motion.h3
        {...commonMotionProps}
        variants={transformVariants('linear')}
        className="heading-3 lg:-mb-10 -mb-20"
      >
        Related Articles
      </motion.h3>
      <Blog blogs={relatedArticles} arrowPos="right" />
    </section>
  );
}
