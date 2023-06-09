import React from 'react';
import { motion, Variants } from 'framer-motion';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';

const checkmarkIconProps = { size: '30px', color: '#5BFBD8' };

export default function CompanyMission({ missions }: { missions: string[] }) {
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
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={fadeVariants}
      viewport={{ once: true }}
      className="flex-1"
    >
      <motion.h2
        initial="hidden"
        whileInView="visible"
        variants={transformVariants}
        viewport={{ once: true }}
        className="heading-2"
      >
        Our Missions
      </motion.h2>

      <motion.ul
        initial="hidden"
        whileInView="visible"
        variants={fadeVariants}
        viewport={{ once: true }}
      >
        {missions.map((mission, index) => (
          <motion.li
            key={index}
            initial="hidden"
            whileInView="visible"
            variants={transformVariants}
            viewport={{ once: true }}
            custom={index}
            className={`text-brave-purple font-normal text-lg leading-9 flex items-start ${
              index !== 0 ? 'mt-4' : 'mt-6'
            }`}
          >
            <div className="mr-2 mt-2">
              <IconContext.Provider value={checkmarkIconProps}>
                <IoCheckmarkCircleOutline />
              </IconContext.Provider>
            </div>
            <span>{mission}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
