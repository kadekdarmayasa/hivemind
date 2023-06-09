import { motion, MotionProps } from 'framer-motion';
import Image from 'next/image';
import { fadeVariants, transformVariants } from '@utils/motion/variants';

type BlogDetailHeroProps = {
  publishedDate: string;
  author: string;
  title: string;
  imageId: string;
  imageOriginSource?: string;
};

type SmallMotionProps = {
  innerText: string;
  custom: number;
  isLastElement?: boolean;
};

function SmallMotion({
  innerText,
  custom,
  isLastElement,
}: SmallMotionProps): JSX.Element {
  return (
    <motion.small
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={transformVariants('linear')}
      custom={custom}
      className={`label-text ${isLastElement ? '' : 'mr-2'}`}
    >
      {innerText}
    </motion.small>
  );
}

export default function Hero({
  publishedDate,
  author,
  title,
  imageId,
  imageOriginSource,
}: BlogDetailHeroProps): JSX.Element {
  const commonMotionProps: MotionProps = {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true },
  };

  return (
    <section>
      <div className="lg:px-20 relative">
        <div className="flex items-center">
          <SmallMotion innerText={author} custom={0} />
          <SmallMotion innerText="." custom={1} />
          <SmallMotion innerText={publishedDate} custom={2} isLastElement />
        </div>
        <motion.h1
          {...commonMotionProps}
          variants={transformVariants('linear')}
          custom={3}
          className="heading-1 !mt-2"
        >
          {title}
        </motion.h1>
      </div>

      <motion.figure
        {...commonMotionProps}
        variants={fadeVariants('anticipate')}
        className="mt-10 mb-10 relative"
      >
        <Image
          src={imageId}
          alt={title}
          width={500}
          height={400}
          className="!w-full !h-auto rounded-xl"
        />
        {imageOriginSource && (
          <motion.figcaption
            {...commonMotionProps}
            variants={transformVariants('linear')}
            className="text-center text-brave-purple font-light mt-2"
          >
            {imageOriginSource}
          </motion.figcaption>
        )}
      </motion.figure>
    </section>
  );
}
