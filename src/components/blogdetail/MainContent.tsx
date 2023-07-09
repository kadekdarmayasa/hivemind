import parse from 'html-react-parser';
import { motion } from 'framer-motion';
import { fadeVariants, commonMotionProps } from '@utils/motion';

type MainContentProps = {
  htmlString: string;
};

export default function MainContent({ htmlString }: MainContentProps) {
  return (
    <motion.section
      {...commonMotionProps}
      variants={fadeVariants('anticipate')}
      className="blog-detail__main-content lg:px-20"
    >
      {parse(htmlString)}
    </motion.section>
  );
}
