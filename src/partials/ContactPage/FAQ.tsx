import { motion } from 'framer-motion';
import { transformVariants } from '@utils/motion/variants';
import Accordion from '@components/Accordion';
import type { FAQProps } from 'types/FAQProps';

export default function FAQ({ faqs }: { faqs: FAQProps[] }): JSX.Element {
  return (
    <section className="mt-32">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        variants={transformVariants('linear')}
        viewport={{ once: true }}
        className="heading-2 text-center mb-14"
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="max-w-[1080px] mx-auto">
        <Accordion faqs={faqs} />
      </div>
    </section>
  );
}
