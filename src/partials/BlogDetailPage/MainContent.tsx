import parse from 'html-react-parser';
import { motion } from 'framer-motion';
import { fadeVariants } from '@utils/motion/variants';

type MainContentProps = {
  htmlString: string;
};

export default function MainContent({ htmlString }: MainContentProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={fadeVariants('anticipate')}
      viewport={{ once: true }}
      className="blog-detail__main-content lg:px-20"
    >
      {parse(htmlString)}
    </motion.section>
  );
}
