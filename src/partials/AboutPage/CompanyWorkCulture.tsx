import { MotionProps, motion } from 'framer-motion';
import { fadeVariants, transformVariants } from '@utils/motion/variants';
import type { WorkCultureProps } from 'types/WorkCulture';
import Image from 'next/image';

export default function CompanyWorkCulture({
  workCultures,
}: {
  workCultures: WorkCultureProps[];
}): JSX.Element {
  const commonMotionProps: MotionProps = {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true },
  };

  return (
    <section className="mt-32">
      <motion.div
        {...commonMotionProps}
        variants={fadeVariants('linear')}
        className="flex justify-center items-center flex-col text-center"
      >
        <motion.small
          {...commonMotionProps}
          variants={transformVariants('linear')}
          className="label-text"
        >
          Work Culture
        </motion.small>
        <motion.h2
          {...commonMotionProps}
          variants={transformVariants('linear')}
          custom={1}
          className="heading-2 mb-24"
        >
          Our Work Culture
        </motion.h2>
      </motion.div>

      {workCultures.map((workCulture, index) => {
        const isEvenIndex = index % 2 === 0;
        const imageOrder = isEvenIndex ? 1 : 2;
        const contentOrder = isEvenIndex ? 2 : 1;

        return (
          <motion.div
            {...commonMotionProps}
            variants={fadeVariants('linear')}
            key={index}
            className={`flex flex-col lg:flex-row gap-12 items-center ${
              isEvenIndex ? 'my-14' : ''
            }`}
          >
            <motion.div
              {...commonMotionProps}
              variants={fadeVariants('linear')}
              className={`flex-1 lg:order-${contentOrder} order-${imageOrder}`}
            >
              <motion.h3
                {...commonMotionProps}
                variants={transformVariants('linear')}
                className="heading-3"
              >
                {workCulture.headline}
              </motion.h3>
              <motion.p
                {...commonMotionProps}
                variants={transformVariants('linear')}
                custom={1}
                className="mt-6 text-brave-purple font-normal text-lg leading-9"
              >
                {workCulture.description}
              </motion.p>
            </motion.div>

            <motion.div
              {...commonMotionProps}
              variants={fadeVariants('linear')}
              className={`flex-1 w-full lg:order-${imageOrder} order-${contentOrder} flex justify-end shadow-black-md`}
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
