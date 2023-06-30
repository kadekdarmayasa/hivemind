import { motion } from 'framer-motion';
import { fadeVariants, transformVariants, commonMotionProps } from '@utils/motion';
import Image from 'next/image';

type WorkCultureProps = {
  id: string;
  imageId: string;
  headline: string;
  description: string;
};

const companyWorkCultures: WorkCultureProps[] = [
  {
    id: '2332',
    imageId: '/images/work-culture-1.png',
    headline: 'Teamwork and Collaboration',
    description:
      'We value teamwork and believe that every team member brings unique strengths and skills to the table. By working together, we can achieve more and create better results for our clients.',
  },
  {
    id: '2333',
    imageId: '/images/work-culture-2.png',
    headline: 'Continous Learning and Development',
    description:
      "We're passionate about  staying up-to-date with the latest industry trends and technologies.  To support this, we offer opportunities for continuous learning and development, including training programs and attending conferences.",
  },
  {
    id: '2334',
    imageId: '/images/work-culture-3.png',
    headline: 'Work-Life Balance',
    description:
      "We understand that maintaining a healthy work-life balance is important for our team members' wellbeing. We encourage and support our employees to take breaks, recharge, and prioritize their personal lives outside of work.",
  },
  {
    id: '2335',
    imageId: '/images/work-culture-4.png',
    headline: 'Open Communication',
    description:
      'We value open communication and believe in creating a safe space for our team members to express their ideas, opinions and concerns. We encourage feedback and strive to create an environment where everyone feels heard and respected.',
  },
  {
    id: '2336',
    imageId: '/images/work-culture-5.png',
    headline: 'Fun and Positive Environment',
    description:
      'We believe that having fun and enjoying your work is important. We promote a positive and fun work environment by organizing team-building activities and social events.',
  },
];

export default function CompanyWorkCulture() {
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
          custom={1}
          {...commonMotionProps}
          variants={transformVariants('linear')}
          className="heading-2 md:mb-10"
        >
          Our Work Culture
        </motion.h2>
      </motion.div>

      {companyWorkCultures.map((companyWorkCulture, index) => {
        const isEvenIndex = index % 2 === 0;
        const imageOrder = isEvenIndex ? 1 : 2;
        const contentOrder = isEvenIndex ? 2 : 1;

        return (
          <motion.div
            key={companyWorkCulture.id}
            {...commonMotionProps}
            variants={fadeVariants('linear')}
            className={`flex flex-col lg:flex-row gap-12 items-center ${
              isEvenIndex ? 'my-16' : ''
            }`}
          >
            <motion.div
              {...commonMotionProps}
              variants={fadeVariants('linear')}
              className={`flex-1 lg:order-${contentOrder} order-${2}`}
            >
              <motion.h3
                {...commonMotionProps}
                variants={transformVariants('linear')}
                className="heading-3"
              >
                {companyWorkCulture.headline}
              </motion.h3>
              <motion.p
                {...commonMotionProps}
                variants={transformVariants('linear')}
                custom={1}
                className="mt-6 text-brave-purple font-normal text-lg leading-9"
              >
                {companyWorkCulture.description}
              </motion.p>
            </motion.div>

            <motion.div
              {...commonMotionProps}
              variants={transformVariants('linear')}
              className={`flex-1 w-full lg:order-${imageOrder} order-${1} flex justify-end shadow-black-md`}
            >
              <Image
                width={400}
                height={300}
                src={companyWorkCulture.imageId}
                alt={companyWorkCulture.headline}
                className="w-full"
                priority
              />
            </motion.div>
          </motion.div>
        );
      })}
    </section>
  );
}
