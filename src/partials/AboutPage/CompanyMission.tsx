import { motion } from 'framer-motion';
import { IconContext } from 'react-icons';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { fadeVariants, transformVariants, commonMotionProps } from '@utils/motion';

const companyMissions: string[] = [
  'To provide customized digital strategies and solutions that are tailored to meet the unique needs and objectives of each of our clients.',
  'To foster a culture of creativity, collaboration, and innovation that empowers our team members to develop and deliver the best possible results.',
  'To continuously invest in the latest technologies, tools, and methodologies to stay at the forefront of the digital industry and ensure that our clients are always ahead of their competition.',
];

const checkmarkIconProps = { size: '30px', color: '#5BFBD8' };

export default function CompanyMission() {
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
        {companyMissions.map((companyMission, index) => (
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
            <span>{companyMission}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
