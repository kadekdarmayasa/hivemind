import React from 'react';
import { motion, Variants } from 'framer-motion';
import type { WorkCultureProps } from 'types/WorkCulture';
import Image from 'next/image';

export default function CompanyWorkCulture({
  workCultures,
}: {
  workCultures: WorkCultureProps[];
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
    <section className="mt-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeVariants}
        viewport={{ once: true }}
        className="flex justify-center items-center flex-col text-center"
      >
        <motion.small
          initial="hidden"
          whileInView="visible"
          variants={transformVariants}
          viewport={{ once: true }}
          className="label-text"
        >
          Work Culture
        </motion.small>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={transformVariants}
          viewport={{ once: true }}
          custom={1}
          className="heading-2 mb-24"
        >
          Our Work Culture
        </motion.h2>
      </motion.div>

      {workCultures.map((workCulture, index) => {
        if (index % 2 === 0) {
          return (
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeVariants}
              viewport={{ once: true }}
              key={index}
              className="flex flex-col lg:flex-row gap-12 items-center"
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeVariants}
                viewport={{ once: true }}
                className="flex-1 w-full flex justify-end shadow-black-md"
              >
                <Image
                  width={400}
                  height={300}
                  src={workCulture.imageId}
                  alt={workCulture.headline}
                  className="w-full"
                />
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeVariants}
                viewport={{ once: true }}
                className="flex-1"
              >
                <motion.h3
                  initial="hidden"
                  whileInView="visible"
                  variants={transformVariants}
                  viewport={{ once: true }}
                  className="heading-3"
                >
                  {workCulture.headline}
                </motion.h3>
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  variants={transformVariants}
                  viewport={{ once: true }}
                  custom={1}
                  className="mt-6 text-brave-purple font-normal text-lg leading-9"
                >
                  {workCulture.description}
                </motion.p>
              </motion.div>
            </motion.div>
          );
        }

        return (
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeVariants}
            viewport={{ once: true }}
            key={index}
            className="flex flex-col lg:flex-row gap-12 items-center my-14"
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeVariants}
              viewport={{ once: true }}
              className="flex-1 lg:order-1 order-2"
            >
              <motion.h3
                initial="hidden"
                whileInView="visible"
                variants={transformVariants}
                viewport={{ once: true }}
                className="heading-3"
              >
                {workCulture.headline}
              </motion.h3>
              <motion.p
                initial="hidden"
                whileInView="visible"
                variants={transformVariants}
                viewport={{ once: true }}
                custom={1}
                className="mt-6 text-brave-purple font-normal text-lg leading-9"
              >
                {workCulture.description}
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeVariants}
              viewport={{ once: true }}
              className="flex-1 w-full lg:order-2 flex justify-end shadow-black-md"
            >
              <Image
                width={400}
                height={300}
                src={workCulture.imageId}
                alt={workCulture.headline}
                className="w-full"
              />
            </motion.div>
          </motion.div>
        );
      })}
    </section>
  );
}
