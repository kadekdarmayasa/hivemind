import { MutableRefObject, useMemo } from 'react';
import { motion } from 'framer-motion';
import { IconContext } from 'react-icons';
import { IoChatboxOutline } from 'react-icons/io5';
import { fadeVariants, transformVariants } from '@utils/motion/variants';
import Image from 'next/image';
import Button from '@components/Button';

export default function Hero({
  refClients,
}: {
  refClients: MutableRefObject<HTMLElement>;
}): JSX.Element {
  const chatboxIconProps: IconContext = useMemo(
    () => ({ size: '1.6em', className: 'mr-2' }),
    [],
  );

  const commonMotionProps = {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true },
  };

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
      <div className="flex-1 order-2 lg:order-1 flex flex-col justify-center items-start">
        <motion.h1
          custom={0}
          {...commonMotionProps}
          variants={transformVariants('linear')}
          className="heading-1 mt-1 lg:w-[400px] xl:w-[570px]"
        >
          Transform Your Online Presence with Our Innovate Digital Solutions
        </motion.h1>

        <motion.p
          custom={1}
          {...commonMotionProps}
          variants={transformVariants('linear')}
          className="text-brave-purple font-normal text-xl leading-9 mt-4 lg:w-[400px] xl:w-[470px]"
        >
          We provide personalized strategies that are tailored to your business
          goals, using cutting-edge technology and industry best practices
        </motion.p>

        <motion.div className="flex flex-col md:flex-row w-full mt-14">
          <motion.div
            custom={2}
            {...commonMotionProps}
            variants={transformVariants('linear')}
          >
            <Button
              type="link"
              href="/contact"
              isPrimary
              className="h-[60px] md:w-[210px] w-full rounded-full hover:shadow-purple-md transition-all"
            >
              <IconContext.Provider value={chatboxIconProps}>
                <IoChatboxOutline className="h-10" />
              </IconContext.Provider>
              <span className="text-lg">Get in Touch</span>
            </Button>
          </motion.div>

          <motion.div
            custom={3}
            {...commonMotionProps}
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
              <div className="absolute h-[2px] w-0 opacity-0 md:left-0 group-hover:opacity-100 md:group-hover:w-full group-hover:w-[210px] transition-all bg-palatinate-blue bottom-1" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        {...commonMotionProps}
        variants={fadeVariants('anticipate')}
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
