import { MutableRefObject } from 'react';
import { motion } from 'framer-motion';
import { IconContext } from 'react-icons';
import { IoChatboxOutline } from 'react-icons/io5';
import { fadeVariants, transformVariants, commonMotionProps } from '@utils/motion';
import Image from 'next/image';
import Button from '@components/Button';
import Link from 'next/link';
import heroImage from '../../../public/images/hero-image-1.png';

type HeroProps = {
  refClients: MutableRefObject<HTMLElement>;
};

const chatboxIconProps: IconContext = {
  size: '1.6em',
  className: 'mr-2',
};

export default function Hero({ refClients }: HeroProps) {
  const scrollToClients = () => {
    window.scrollTo({
      top: refClients.current.offsetTop - 50,
      behavior: 'smooth',
    });
  };

  return (
    <motion.section
      {...commonMotionProps}
      variants={fadeVariants('linear')}
      className="flex lg:flex-row flex-col relative mt-8 2xl:mt-24"
    >
      <div className="flex-1 flex flex-col justify-center items-start">
        <motion.small
          custom={0}
          {...commonMotionProps}
          variants={transformVariants('linear')}
          className="label-text"
        >
          A innovate digital agency
        </motion.small>
        <motion.h1
          custom={1}
          {...commonMotionProps}
          variants={transformVariants('linear')}
          className="heading-2 sm:heading-1 lg:w-[400px] xl:w-[570px]"
        >
          Transform Your Online Presence with Us
        </motion.h1>

        <motion.p
          custom={1}
          {...commonMotionProps}
          variants={transformVariants('linear')}
          className="text-brave-purple font-normal text-xl leading-9 mt-4 lg:w-[400px] xl:w-[470px]"
        >
          We provide personalized strategies that are tailored to your business goals, using
          cutting-edge technology and industry best practices
        </motion.p>

        <motion.div className="flex flex-col md:flex-row w-full mt-14">
          <motion.div
            className="h-[60px] md:w-[210px] w-full rounded-full hover:shadow-purple-md transition-all overflow-hidden"
            custom={2}
            {...{
              ...commonMotionProps,
              viewport: { ...commonMotionProps.viewport, margin: '56px' },
            }}
            viewport={{ once: true, margin: '56px' }}
            variants={transformVariants('linear')}
          >
            <Link
              href="/contact"
              className="flex justify-center items-center w-full h-full bg-palatinate-blue shadow-purple-sm text-white"
            >
              <IconContext.Provider value={chatboxIconProps}>
                <IoChatboxOutline className="h-10" />
              </IconContext.Provider>
              <span className="text-lg">Get in Touch</span>
            </Link>
          </motion.div>

          <motion.div
            custom={3}
            {...{
              ...commonMotionProps,
              viewport: { ...commonMotionProps.viewport, margin: '56px' },
            }}
            variants={transformVariants('linear')}
          >
            <Button
              className="h-[60px] md:w-[210px] w-full md:ml-6 mt-5 md:mt-0 relative group"
              onClick={scrollToClients}
            >
              <div className="rounded-xl h-8 w-5 border-palatinate-blue border-[2px] relative flex justify-center mr-4">
                <span className="animate-bounce block w-1 h-2 rounded-lg top-2 bg-palatinate-blue absolute" />
              </div>
              <span className="text-lg underline-offset-8 text-palatinate-blue">
                Scroll to read more
              </span>
              <div className="absolute h-[2px] w-0 opacity-0 md:left-0 group-hover:opacity-100 md:group-hover:w-full group-hover:w-[210px] transition-all bg-palatinate-blue  bottom-1" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        {...commonMotionProps}
        variants={fadeVariants('anticipate')}
        className="mt-10 lg:mt-0 flex-1 flex justify-center lg:justify-end items-center"
      >
        <Image
          src={heroImage}
          alt="Our Team meeting With Client"
          className="w-[98%] shadow-black-md"
          priority
        />
      </motion.div>
    </motion.section>
  );
}
