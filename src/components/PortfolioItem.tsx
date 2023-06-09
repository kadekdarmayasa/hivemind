import React from 'react';
import { motion, Variants } from 'framer-motion';
import type { PortfolioProps } from 'types/Portfolio';
import Image from 'next/image';

export default function PortfolioItem({
  portfolio,
  index,
}: {
  portfolio: PortfolioProps;
  index?: number;
}) {
  const portfolioItemVariants: Variants = {
    hidden: { y: 120, opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.3,
        ease: 'linear',
      },
    }),
  };

  return portfolio.orientation === 'potrait' ? (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={portfolioItemVariants}
      viewport={{ once: true }}
      custom={index}
      key={portfolio.id}
      className="rounded-lg relative md:col-span-6 col-span-12 xl:col-span-4 row-span-4 overflow-hidden group"
    >
      <Image
        src={portfolio.imageId}
        alt={portfolio.projectName}
        width={400}
        height={600}
        className="h-full w-full object-cover group-hover:scale-105 transition-all"
      />

      <div
        className="absolute h-auto w-auto top-0 bottom-0 right-0 left-0 bg-gradient-to-tfrom-black
      to-blue-gray-800 opacity-40 backdrop-blur-md"
      />

      <div className="absolute bottom-6 group-hover:bottom-8 px-6 transition-all delay-100">
        <h3
          className="text-2xl text-white font-medium leading-snug mb-2"
          style={{ textShadow: '0 5px 10px rgba(0, 0, 0, .2)' }}
        >
          {portfolio.projectName}
        </h3>
        <p
          className="text-white font-normal text-lg"
          style={{ textShadow: '0 5px 10px rgba(0, 0, 0, .2)' }}
        >
          {portfolio.service.category}
        </p>
      </div>
    </motion.div>
  ) : (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={portfolioItemVariants}
      viewport={{ once: true }}
      custom={index}
      key={portfolio.id}
      className="rounded-lg md:col-span-6 col-span-12 xl:col-span-4 relative row-span-2 overflow-hidden group"
    >
      <Image
        src={portfolio.imageId}
        alt={portfolio.projectName}
        width={400}
        height={200}
        className="h-full w-full object-cover group-hover:scale-105 transition-all"
      />

      <div
        className="absolute h-auto w-auto top-0 bottom-0 right-0 left-0 bg-gradient-to-t from-black
    to-blue-gray-800 opacity-40 backdrop-blur-md"
      />

      <div className="absolute bottom-6 group-hover:bottom-8 px-6 transition-all delay-100">
        <h3
          className="text-xl text-white font-medium leading-snug mb-2"
          style={{ textShadow: '0 5px 10px rgba(0, 0, 0, .2)' }}
        >
          {portfolio.projectName}
        </h3>
        <p
          className="text-white font-normal text-base delay-100"
          style={{ textShadow: '0 5px 10px rgba(0, 0, 0, .2)' }}
        >
          {portfolio.service.category}
        </p>
      </div>
    </motion.div>
  );
}
