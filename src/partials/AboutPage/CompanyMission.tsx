import { motion } from 'framer-motion';
import { IconContext } from 'react-icons';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { fadeVariants, transformVariants, commonMotionProps } from '@utils/motion';

type CompanyMissionProps = {
  missions: string[];
};

const checkmarkIconProps = { size: '30px', color: '#5BFBD8' };

export default function CompanyMission({ missions }: CompanyMissionProps) {
  return (
    <motion.div {...commonMotionProps} variants={fadeVariants('linear')} className="flex-1">
      <motion.h2
        {...commonMotionProps}
        variants={transformVariants('linear')}
        className="heading-2"
      >
        Our Missions
      </motion.h2>

      <motion.ul {...commonMotionProps} variants={fadeVariants('linear')}>
        {missions.map((mission, index) => (
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
            <span>{mission}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
