import Button from '@components/Button';
import { IoChatboxOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import React, { MutableRefObject, useMemo } from 'react';
import Image from 'next/image';

export default function Hero({
  refOurValues,
}: {
  refOurValues: MutableRefObject<HTMLElement>;
}) {
  const iconProps = useMemo(() => ({ size: '1.6em', className: 'mr-2' }), []);

  const showOurValues = () => {
    window.scrollTo({
      top: refOurValues.current.offsetTop - 50,
      behavior: 'smooth',
    });
  };

  return (
    // TODO: Add framer motion for animation
    <section className="flex relative mt-12 2xl:mt-24">
      <div className="flex-1 flex flex-col justify-center items-start">
        <h1 className="heading-1 mt-1">
          Transform Your Online Presence
          <br />
          with Our Innovate Digital
          <br />
          Solutions
        </h1>
        <p className="text-brave-purple font-normal text-xl leading-9 mt-4">
          We provide personalized strategies that are tailored to
          <br />
          your business goals, using cutting-edge technology
          <br />
          and industry best practices
        </p>
        <div className="flex mt-14">
          <Button
            type="link"
            href="/contact"
            isPrimary
            className="h-[60px] w-[210px] rounded-full hover:shadow-purple-md transition-all"
          >
            <IconContext.Provider value={iconProps}>
              <IoChatboxOutline className="h-10" />
            </IconContext.Provider>
            <span className="text-lg">Get in Touch</span>
          </Button>
          <Button
            className="h-[60px] w-[210px] ml-6 relative group"
            onClick={showOurValues}
          >
            <div className="rounded-xl h-8 w-5 border-palatinate-blue border-[2px] relative flex justify-center mr-4">
              <span className="animate-bounce block w-1 h-2 rounded-lg top-2 bg-palatinate-blue absolute" />
            </div>
            <span className="text-lg underline-offset-8 text-palatinate-blue">
              Scroll to read more
            </span>
            <div className="absolute h-[2px] w-0 opacity-0 left-0 group-hover:opacity-100 group-hover:w-full transition-all bg-palatinate-blue bottom-1" />
          </Button>
        </div>
      </div>

      <div className="flex-1 flex justify-end items-center">
        <Image
          src="/images/hero-image-1.png"
          alt="Our Team meeting With Client"
          width={600}
          height={500}
          className="w-[98%] shadow-black-md"
        />
      </div>
    </section>
  );
}
