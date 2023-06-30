import { motion } from 'framer-motion';
import { fadeVariants, transformVariants, commonMotionProps } from '@utils/motion';
import CONFIG from '@globals/config';
import { useScreenSize } from '@hooks/useScreenSize';
import type { ServiceItemProps } from 'types/ServiceItem';
import { ServiceItem } from './ServiceItem';

export default function Service({ services }: { services: ServiceItemProps[] }) {
  const [screenSize] = useScreenSize();
  const getScreenWidth = () => screenSize.width || window.innerWidth;
  const customIndexs = [2, 0, 1];

  return (
    <section className="mt-32 2xl:mt-44">
      <motion.div
        {...commonMotionProps}
        variants={fadeVariants('linear')}
        className="flex flex-col items-center text-center"
      >
        <motion.small
          custom={0}
          {...commonMotionProps}
          variants={transformVariants('linear')}
          className="label-text"
        >
          Our Services
        </motion.small>
        <motion.h2
          custom={1}
          {...commonMotionProps}
          variants={transformVariants('linear')}
          className="heading-2"
        >
          Services Provide By Us
        </motion.h2>
      </motion.div>

      <motion.div
        {...commonMotionProps}
        variants={fadeVariants('linear')}
        className="flex flex-wrap justify-center gap-8 mt-14"
      >
        {services.map((service, index) => (
          <ServiceItem
            key={index}
            index={
              !index || getScreenWidth() > CONFIG.MOBILE_VIEWPORT_SIZE
                ? index
                : customIndexs[index % 3]
            }
            service={service}
          />
        ))}
      </motion.div>
    </section>
  );
}
