import React from 'react';
import { motion, Variants } from 'framer-motion';
import Button from '@components/Button';
import { IconContext } from 'react-icons';
import { IoArrowForwardSharp } from 'react-icons/io5';
import type { BlogItemProps } from 'types/BlogItem';
import Image from 'next/image';

const arrowForwardIconProps = {
  size: '1.3em',
  className: 'mt-[2px] ml-1 group-hover:ml-2 transition-all',
  color: '#2B3BE5',
};

export default function BlogItem({
  blog,
  contentWidth = 'default',
  isGridItem = false,
  index,
}: {
  blog: BlogItemProps;
  contentWidth?: 'large' | 'default';
  isGridItem?: boolean;
  index?: number;
}) {
  const fadeVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        ease: 'anticipate',
        staggerChildren: 1,
      },
    },
  };

  const transformVariants: Variants = {
    hidden: { y: 120, opacity: 0 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.3,
        ease: 'linear',
      },
    }),
  };

  if (isGridItem) {
    if (contentWidth === 'large') {
      return (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeVariants}
          custom={index}
          className="flex flex-col lg:flex-row gap-10 w-full col-span-12"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeVariants}
            className="flex flex-1"
          >
            <Image
              width={500}
              height={350}
              src={blog.imageId}
              alt={blog.title}
              className="w-full h-full rounded-lg"
            />
          </motion.div>

          <div className="flex flex-1 flex-col items-start justify-center">
            <div className="flex">
              <motion.small
                initial="hidden"
                whileInView="visible"
                variants={transformVariants}
                viewport={{ once: true }}
                className="text-palatinate-blue text-sm mr-4 rounded-full"
              >
                {blog.publishedDate}
              </motion.small>
              <motion.small
                initial="hidden"
                whileInView="visible"
                variants={transformVariants}
                viewport={{ once: true }}
                custom={1}
                className="text-palatinate-blue text-sm rounded-full"
              >
                {blog.author}
              </motion.small>
            </div>

            <motion.h1
              initial="hidden"
              whileInView="visible"
              variants={transformVariants}
              viewport={{ once: true }}
              className="heading-1"
            >
              {blog.title}
            </motion.h1>
            <motion.p
              initial="hidden"
              whileInView="visible"
              variants={transformVariants}
              viewport={{ once: true }}
              custom={1}
              className="text-brave-purple font-normal text-xl leading-9 mt-3"
            >
              {blog.briefDescription}
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={transformVariants}
              viewport={{ once: true }}
            >
              <Button
                type="link"
                href={`/blog/${blog.id}`}
                className="relative group mt-6"
              >
                <span className="text-lg">Read more</span>
                <IconContext.Provider value={arrowForwardIconProps}>
                  <IoArrowForwardSharp />
                </IconContext.Provider>
                <div className="absolute h-[2px] rounded-lg w-0 left-0 group-hover:w-full -bottom-1 opacity-0 group-hover:opacity-100 transition-all bg-palatinate-blue" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      );
    }

    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={transformVariants}
        custom={index}
        className="h-[auto] rounded-xl relative blog-item md:col-span-6 lg:col-span-4 col-span-12"
      >
        <div className="h-[170px] w-full overflow-hidden rounded-t-xl">
          <Image
            src={blog.imageId}
            alt={blog.title}
            width={300}
            height={200}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="px-2 py-6">
          <div className="flex">
            <small className="text-palatinate-blue text-sm text-center mr-4 rounded-full">
              {blog.publishedDate}
            </small>
            <small className="text-palatinate-blue text-sm text-center rounded-full">
              {blog.author}
            </small>
          </div>

          <h3 className="heading-3 mt-6">{blog.title}</h3>

          <p className="text-brave-purple max-w-full font-light text-lg leading-8 mt-3 mb-16 overview-text">
            {blog.briefDescription}
          </p>

          <Button
            type="link"
            href={`/blog/${blog.id}`}
            className="absolute bottom-10 group"
          >
            <span className="text-lg">Read more</span>
            <IconContext.Provider value={arrowForwardIconProps}>
              <IoArrowForwardSharp />
            </IconContext.Provider>
            <div
              className="absolute h-[2px] rounded-lg w-0 left-0 group-hover:w-full -bottom-1
            opacity-0 group-hover:opacity-100 transition-all bg-palatinate-blue"
            />
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="h-[auto] bg-white rounded-xl relative blog-item w-[360px]">
      <div className="h-[170px] w-full overflow-hidden rounded-t-xl">
        <Image
          src={blog.imageId}
          alt={blog.title}
          width={300}
          height={200}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="px-6 py-10">
        <div className="flex">
          <small className="text-palatinate-blue text-sm text-center mr-4 rounded-full">
            {blog.publishedDate}
          </small>
          <small className="text-palatinate-blue text-sm text-center rounded-full">
            {blog.author}
          </small>
        </div>

        <h3 className="heading-3 mt-6">{blog.title}</h3>

        <p className="text-brave-purple max-w-full font-light text-lg leading-8 mt-3 mb-16 overview-text">
          {blog.briefDescription}
        </p>

        <Button
          type="link"
          href={`/blog/${blog.id}`}
          className="absolute bottom-10 group"
        >
          <span className="text-lg">Read more</span>
          <IconContext.Provider value={arrowForwardIconProps}>
            <IoArrowForwardSharp />
          </IconContext.Provider>
          <div
            className="absolute h-[2px] rounded-lg w-0 left-0 group-hover:w-full -bottom-1
              opacity-0 group-hover:opacity-100 transition-all bg-palatinate-blue"
          />
        </Button>
      </div>
    </div>
  );
}
