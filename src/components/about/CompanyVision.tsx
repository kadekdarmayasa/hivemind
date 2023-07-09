import { motion } from 'framer-motion';
import { IconContext } from 'react-icons';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { fadeVariants, transformVariants, commonMotionProps } from '@utils/motion';

const companyVisions: string[] = [
  'To become the leading provider of innovative and cutting-edge digital solutions for businesses of all sizes and industries.',
  'To establish long-lasting relationships with our clients, partners, and stakeholders by consistently exceeding their expectations.',
];

const checkMarkIconProps = { size: '30px', color: '#5BFBD8' };

export default function CompanyVision() {
  return (
    <motion.div {...commonMotionProps} variants={fadeVariants('linear')} className="flex-1">
      <motion.h2
        {...commonMotionProps}
        variants={transformVariants('linear')}
        className="heading-2"
      >
        Our Visions
      </motion.h2>

      <motion.ul {...commonMotionProps} variants={fadeVariants('linear')}>
        {companyVisions.map((companyVision, index) => (
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
              <IconContext.Provider value={checkMarkIconProps}>
                <IoCheckmarkCircleOutline />
              </IconContext.Provider>
            </div>
            <span>{companyVision}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
