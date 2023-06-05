import React from 'react';
import { motion, Variants } from 'framer-motion';
import { IconContext } from 'react-icons';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import type { OurValuesProps } from 'types/OurValues';
import parse from 'html-react-parser';

const checkmarkIconProps = { size: '2em', color: '#5BFBD8', className: '-mt-1' };

export default function OurValues({ ourValues }: { ourValues: OurValuesProps[] }) {
  const ourValuesOuterVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        ease: 'linear',
        staggerChildren: 1,
      },
    },
  };

  const ourValuesInnerVariants: Variants = {
    hidden: { y: 120, opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.3,
        ease: 'linear',
      },
    }),
    hover: {
      scale: 1.02,
      boxShadow: '0px 5px 25px rgba(0, 0, 0, 0.05)',
    },
  };

  return (
    <section className="mt-32 2xl:mt-44">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={ourValuesOuterVariants}
        viewport={{ once: true }}
        className="flex flex-col items-center text-center"
      >
        <motion.small
          custom={0}
          initial="hidden"
          whileInView="visible"
          variants={ourValuesInnerVariants}
          viewport={{ once: true }}
          className="label-text"
        >
          Our Values
        </motion.small>
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          variants={ourValuesInnerVariants}
          viewport={{ once: true }}
          className="heading-2"
        >
          What Sets Us Apart
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={ourValuesOuterVariants}
        viewport={{ once: true }}
        className="flex justify-center mt-14 flex-wrap gap-10 w-full"
      >
        {ourValues.map((ourValue, index) => (
          <motion.div
            custom={index}
            initial="hidden"
            whileHover="hover"
            whileInView="visible"
            variants={ourValuesInnerVariants}
            viewport={{ once: true }}
            key={ourValue.id}
            className="our-values-item"
          >
            <div className="flex items-center justify-start">
              <h3 className="our-values-item__heading">{ourValue.value}</h3>
              <IconContext.Provider value={checkmarkIconProps}>
                <IoCheckmarkCircleOutline />
              </IconContext.Provider>
            </div>
            <p className="our-values-item__description">{parse(ourValue.description)}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
