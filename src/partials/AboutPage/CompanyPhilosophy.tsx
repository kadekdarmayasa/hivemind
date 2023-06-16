import { motion } from 'framer-motion';
import { fadeVariants, transformVariants, commonMotionProps } from '@utils/motion';
import type { PhilosophyProps } from 'types/Philosophy';
import Image from 'next/image';

type CompanyPhilosophyProps = {
  philosophy: PhilosophyProps;
};

export default function CompanyPhilosophy({ philosophy }: CompanyPhilosophyProps) {
  return (
    <>
      <motion.h1
        {...commonMotionProps}
        variants={transformVariants('linear')}
        className="heading-1 text-center"
      >
        How We Are
      </motion.h1>

      <div className="flex flex-col lg:flex-row gap-5 mt-14 sm:mt-20 items-center justify-center">
        <motion.div {...commonMotionProps} variants={fadeVariants('linear')} className="flex-1">
          <motion.h2
            {...commonMotionProps}
            variants={transformVariants('linear')}
            className="heading-2"
          >
            Hivemind&apos;s Philosophy
          </motion.h2>
          <motion.p
            {...commonMotionProps}
            variants={transformVariants('linear')}
            custom={1}
            className="text-brave-purple font-normal text-lg leading-9 mt-6"
          >
            {philosophy.text}
          </motion.p>
        </motion.div>
        <motion.div
          {...commonMotionProps}
          variants={transformVariants('linear')}
          className="flex-1 w-full flex justify-end"
        >
          <Image
            width={500}
            height={400}
            src={philosophy.imageId}
            alt="Company Philosophy"
            className="shadow-black-lg xl:w-[98%] w-[100%]"
            priority
          />
        </motion.div>
      </div>
    </>
  );
}
