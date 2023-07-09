import { motion } from 'framer-motion';
import { transformVariants, fadeVariants, commonMotionProps } from '@utils/motion';
import type OurValueType from 'types/OurValues';
import { OurValueItem } from './OurValueItem';

const ourValues: OurValueType[] = [
  {
    id: 122444,
    headline: 'Experience',
    description:
      'With years of experience in the digital marketing industry, we have the expertise and knowledge to develop and implement effective strategies that will help you reach your business goals.',
  },
  {
    id: 122445,
    headline: 'Result-driven',
    description:
      "Our focus is on delivering measurable results for our clients. We use data-driven insights to make informed decisions and constantly evaluate and adjust our strategies to ensure maximum <abbr title='Return On Investment'>ROI</abbr>.",
  },
  {
    id: 122446,
    headline: 'Custom Solutions',
    description:
      'We tailor our services to meet the specific needs and goals of each client. We work closely with our clients to develop custom digital solutions that are designed to deliver results',
  },
  {
    id: 122447,
    headline: 'Transparent communication',
    description:
      'We believe in open and honest communication with our clients every step of the way. We provide regular updates and detailed reports, so you always know how your campaigns are performing.',
  },
];

export default function OurValues() {
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
          Our Values
        </motion.small>
        <motion.div
          custom={1}
          {...commonMotionProps}
          variants={transformVariants('linear')}
          className="heading-2"
        >
          What Sets Us Apart
        </motion.div>
      </motion.div>

      <motion.div
        {...commonMotionProps}
        variants={fadeVariants('linear')}
        className="flex justify-center mt-14 flex-wrap gap-10 w-full"
      >
        {ourValues.map((ourValue, index) => (
          <OurValueItem key={index} index={[0, 1][index % 2]} ourValue={ourValue} />
        ))}
      </motion.div>
    </section>
  );
}
