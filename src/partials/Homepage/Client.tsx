import React, { Ref } from 'react';
import { motion, Variants } from 'framer-motion';
import type { ClientProps } from 'types/Client';
import Image from 'next/image';

export default function Client({
  clients,
  refClients,
}: {
  clients: ClientProps[];
  refClients: Ref<HTMLElement>;
}) {
  const clientVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        ease: 'linear',
        staggerChildren: 1,
      },
    },
  };

  const clientInnerVariants: Variants = {
    hidden: { y: 120, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.3,
        duration: 0.3,
        ease: 'easeInOut',
      },
    }),
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={clientVariants}
      viewport={{ once: true }}
      className="mt-32 2xl:mt-44"
      ref={refClients}
    >
      <h2 className="heading-2 text-center">
        Trusted by&nbsp;
        <span className="text-palatinate-blue">4K+</span>
        &nbsp;Clients and Leading Brands
      </h2>

      <div className="flex relative flex-wrap justify-center gap-10 mt-14">
        {clients.map((client, i) => (
          <motion.div
            custom={i}
            initial="hidden"
            whileInView="visible"
            variants={clientInnerVariants}
            viewport={{ once: true }}
            key={client.id}
            className="w-[80px] h-[80px]"
          >
            <Image src={client.imagePath} alt={client.name} width={80} height={80} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
