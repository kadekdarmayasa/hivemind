import Button from '@components/Button';
import { IoChatboxOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import React, { MutableRefObject, useMemo } from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const heroVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
    },
  },
};

const heroInnerVariants: Variants = {
  hidden: { y: 120, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

export default function Hero({ refOurValues }: { refOurValues: MutableRefObject<HTMLElement> }) {
  const iconProps = useMemo(() => ({ size: '1.6em', className: 'mr-2' }), []);

  const showOurValues = () => {
    window.scrollTo({
      top: refOurValues.current.offsetTop - 50,
      behavior: 'smooth',
    });
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={heroVariants}
      className="flex lg:flex-row flex-col relative mt-12 2xl:mt-24"
    >
      <div className="flex-1 order-2 lg:order-1 flex flex-col justify-center items-start">
        <motion.h1
          className="heading-2 sm:heading-1 mt-1 lg:w-[400px] xl:w-[570px]"
          variants={heroInnerVariants}
        >
          Transform Your Online Presence with Our Innovate Digital Solutions
        </motion.h1>

        <motion.p
          className="text-brave-purple font-normal text-xl leading-9 mt-4 lg:w-[400px] xl:w-[470px]"
          variants={heroInnerVariants}
        >
          We provide personalized strategies that are tailored to your business goals, using
          cutting-edge technology and industry best practices
        </motion.p>

        <div className="flex flex-col md:flex-row w-full mt-14">
          <motion.button variants={heroInnerVariants}>
            <Button
              type="link"
              href="/contact"
              isPrimary
              className="h-[60px] md:w-[210px] w-full rounded-full hover:shadow-purple-md transition-all"
            >
              <IconContext.Provider value={iconProps}>
                <IoChatboxOutline className="h-10" />
              </IconContext.Provider>
              <span className="text-lg">Get in Touch</span>
            </Button>
          </motion.button>

          <motion.button variants={heroInnerVariants}>
            <Button
              className="h-[60px] md:w-[210px] w-full md:ml-6 mt-5 md:mt-0 relative group"
              onClick={showOurValues}
            >
              <div className="rounded-xl h-8 w-5 border-palatinate-blue border-[2px] relative flex justify-center mr-4">
                <span className="animate-bounce block w-1 h-2 rounded-lg top-2 bg-palatinate-blue absolute" />
              </div>
              <span className="text-lg underline-offset-8 text-palatinate-blue">
                Scroll to read more
              </span>
              <div className="absolute h-[2px] w-0 opacity-0 md:left-0 group-hover:opacity-100 md:group-hover:w-full group-hover:w-[210px] transition-all bg-palatinate-blue bottom-1" />
            </Button>
          </motion.button>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex-1 lg:order-2 flex lg:justify-end items-center"
      >
        <Image
          src="/images/hero-image-1.png"
          alt="Our Team meeting With Client"
          width={600}
          height={500}
          className="w-[98%] shadow-black-md"
        />
      </motion.div>
    </motion.section>
  );
}
