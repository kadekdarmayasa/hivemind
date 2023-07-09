import { useRef } from 'react';
import { motion } from 'framer-motion';
import { transformVariants, fadeVariants, commonMotionProps } from '@utils/motion';
import type { FAQProps } from 'types/FAQProps';
import Accordion from '../common/Accordion';

export default function FAQ({ faqs }: { faqs: FAQProps[] }) {
  const FAQContainerRef = useRef<HTMLElement>(null);

  return (
    <section className="mt-32" ref={FAQContainerRef}>
      <motion.h2
        {...commonMotionProps}
        variants={transformVariants('linear')}
        className="heading-2 text-center mb-14"
      >
        Frequently Asked Questions
      </motion.h2>

      <motion.div
        {...commonMotionProps}
        variants={fadeVariants('linear')}
        className="max-w-[1080px] mx-auto"
      >
        <Accordion faqs={faqs} />
      </motion.div>
    </section>
  );
}
