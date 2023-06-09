import { Ref } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeVariants, transformVariants } from '@utils/motion/variants';
import type { ClientProps } from 'types/Client';

export default function Client({
  clients,
  refClients,
}: {
  clients: ClientProps[];
  refClients: Ref<HTMLElement>;
}): JSX.Element {
  const commonMotionProps = {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true },
  };

  return (
    <motion.section
      ref={refClients}
      {...commonMotionProps}
      variants={fadeVariants('linear')}
      className="mt-32 2xl:mt-44"
    >
      <motion.h2
        {...commonMotionProps}
        variants={transformVariants('linear')}
        className="heading-2 text-center"
      >
        Trusted by&nbsp;
        <span className="text-palatinate-blue">4K+</span>
        &nbsp;Clients and Leading Brands
      </motion.h2>

      <div className="flex relative flex-wrap justify-center gap-10 mt-14">
        {clients.map((client, i) => (
          <motion.div
            key={client.id}
            custom={i}
            {...commonMotionProps}
            variants={transformVariants('easeInOut')}
            className="w-[80px] h-[80px]"
          >
            <Image
              src={client.imagePath}
              alt={client.name}
              width={80}
              height={80}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
