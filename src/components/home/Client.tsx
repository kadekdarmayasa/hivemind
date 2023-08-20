import { Ref } from 'react';
import { motion } from 'framer-motion';
import { fadeVariants, commonMotionProps } from '@utils/motion';
import type ClientType from 'types/Client';
import Image from 'next/image';

type ClientProps = {
  clients: ClientType[];
  refClients: Ref<HTMLElement>;
};

export default function Client({ clients, refClients }: ClientProps) {
  return (
    <motion.section
      ref={refClients}
      {...commonMotionProps}
      variants={fadeVariants('linear')}
      className="mt-32 2xl:mt-44"
    >
      <motion.small
        {...commonMotionProps}
        variants={fadeVariants('linear')}
        className="flex text-center justify-center text-sm font-medium text-brave-purple uppercase tracking-widest"
      >
        Trusted by top companies and leading brands
      </motion.small>

      <div className="flex relative flex-wrap justify-center gap-10 mt-14">
        {clients.map(({ id, name, logo }) => (
          <motion.div
            key={id}
            custom={0}
            {...commonMotionProps}
            variants={fadeVariants('linear')}
            className="w-[80px] h-[80px]"
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}/image/${logo}`}
              alt={name}
              width={80}
              height={80}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
