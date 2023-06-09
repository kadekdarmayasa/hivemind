import { MotionProps, motion } from 'framer-motion';
import { transformVariants, fadeVariants } from '@utils/motion/variants';
import type { OurValuesProps } from 'types/OurValues';
import { OurValueItem } from './OurValueItem';

export default function OurValues({
  ourValues,
}: {
  ourValues: OurValuesProps[];
}): JSX.Element {
  const commonMotionProps: MotionProps = {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true },
  };

  return (
    <section className="mt-32 2xl:mt-44">
      <motion.div
        {...commonMotionProps}
        variants={fadeVariants('linear')}
        className="flex flex-col items-center text-center"
      >
        <motion.small
          custom={0}
          {...commonMotionProps}
          variants={transformVariants('linear')}
          className="label-text"
        >
          Our Values
        </motion.small>
        <motion.div
          custom={1}
          {...commonMotionProps}
          variants={transformVariants('linear')}
          className="heading-2"
        >
          What Sets Us Apart
        </motion.div>
      </motion.div>

      <motion.div
        {...commonMotionProps}
        variants={fadeVariants('linear')}
        className="flex justify-center mt-14 flex-wrap gap-10 w-full"
      >
        {ourValues.map((ourValue, index) => (
          <OurValueItem key={index} index={index} ourValue={ourValue} />
        ))}
      </motion.div>
    </section>
  );
}
