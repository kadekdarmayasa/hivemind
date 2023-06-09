import React from 'react';
import { motion, Variants } from 'framer-motion';
import type { PhilosophyProps } from 'types/Philosophy';
import Image from 'next/image';

export default function CompanyPhilosophy({
  philosophy,
}: {
  philosophy: PhilosophyProps;
}) {
  const fadeVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        ease: 'linear',
        staggerChildren: 1,
      },
    },
  };

  const transformVariants: Variants = {
    hidden: { y: 120, opacity: 0 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.3,
        ease: 'linear',
      },
    }),
  };

  return (
    <>
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={transformVariants}
        className="heading-1 text-center"
      >
        How We Are
      </motion.h1>

      <div className="flex flex-col lg:flex-row gap-5 mt-14 sm:mt-20 items-center justify-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeVariants}
          className="flex-1"
        >
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={transformVariants}
            className="heading-2"
          >
            Hivemind&apos;s Philosophy
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={transformVariants}
            custom={1}
            className="text-brave-purple font-normal text-lg leading-9 mt-6"
          >
            {philosophy.text}
          </motion.p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeVariants}
          className="flex-1 w-full flex justify-end"
        >
          <Image
            width={500}
            height={400}
            src={philosophy.imageId}
            alt="Company Philosophy"
            className="shadow-black-lg xl:w-[98%] w-[100%]"
          />
        </motion.div>
      </div>
    </>
  );
}
