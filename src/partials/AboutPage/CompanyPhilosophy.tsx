import { motion } from 'framer-motion';
import { fadeVariants, transformVariants, commonMotionProps } from '@utils/motion';
import Image from 'next/image';
import philosophyImage from '../../../public/images/philosophy-image.png';

export default function CompanyPhilosophy() {
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
            Hivemind philosophy is a concept that emphasizes the collective intelligence and
            creativity of a group of individuals working towards a common goal. It involves
            collaboration, communication, and the exchange of ideas in an open and respectful
            environment. In a work culture that promotes the hivemind philosophy, every member of
            the team is valued for their unique perspective and contributions, and there is a sense
            of shared ownership and responsibility for the success of the company.
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
            src={philosophyImage}
            alt="Collective of intelligent people working together"
            className="shadow-black-lg xl:w-[98%] w-[100%]"
            priority
          />
        </motion.div>
      </div>
    </>
  );
}
