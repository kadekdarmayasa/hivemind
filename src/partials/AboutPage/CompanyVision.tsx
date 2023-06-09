import { useMemo } from 'react';
import { MotionProps, motion } from 'framer-motion';
import { fadeVariants, transformVariants } from '@utils/motion/variants';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';

export default function CompanyVision({
  visions,
}: {
  visions: string[];
}): JSX.Element {
  const checkmarkIconProps = useMemo(
    () => ({ size: '30px', color: '#5BFBD8' }),
    [],
  );

  const commonMotionProps: MotionProps = {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true },
  };

  return (
    <motion.div
      {...commonMotionProps}
      variants={fadeVariants('linear')}
      className="flex-1"
    >
      <motion.h2
        {...commonMotionProps}
        variants={transformVariants('linear')}
        className="heading-2"
      >
        Our Visions
      </motion.h2>

      <motion.ul {...commonMotionProps} variants={fadeVariants('linear')}>
        {visions.map((vision, index) => (
          <motion.li
            key={index}
            {...commonMotionProps}
            variants={transformVariants('linear')}
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
            <span>{vision}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
