import { Ref } from 'react';
import { motion } from 'framer-motion';
import { fadeVariants, transformVariants, commonMotionProps } from '@utils/motion';
import type { ClientProps as Clprops } from 'types/Client';
import Image from 'next/image';

type ClientProps = {
  clients: Clprops[];
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
        variants={transformVariants('linear')}
        className="flex text-center justify-center text-sm font-medium text-brave-purple uppercase tracking-widest"
      >
        Trusted by top companies and organizations
      </motion.small>

      <div className="flex relative flex-wrap justify-center gap-10 mt-14">
        {clients.map((client, i) => (
          <motion.div
            key={client.id}
            custom={i}
            {...commonMotionProps}
            variants={transformVariants('easeInOut')}
            className="w-[80px] h-[80px]"
          >
            <Image src={client.imagePath} alt={client.name} width={80} height={80} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
