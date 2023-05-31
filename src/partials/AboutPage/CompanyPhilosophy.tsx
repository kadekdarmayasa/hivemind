import React from 'react';
import type { PhilosophyProps } from 'types/Philosophy';
import Image from 'next/image';

export default function CompanyPhilosophy({
  philosophy,
}: {
  philosophy: PhilosophyProps;
}) {
  // TODO: Using framer motion for animation
  return (
    <>
      <h1 className="heading-1 text-center">How We Are</h1>

      <div className="flex flex-col lg:flex-row gap-5 mt-20 items-center justify-center">
        <div className="flex-1">
          <h2 className="heading-2">Hivemind&apos;s Philosophy</h2>
          <p className="text-brave-purple font-normal text-lg leading-9 mt-6">
            {philosophy.text}
          </p>
        </div>
        <div className="flex-1 w-full flex justify-end">
          <Image
            width={500}
            height={400}
            src={philosophy.imageId}
            alt="Company Philosophy"
            className="shadow-black-lg xl:w-[98%] w-[100%]"
          />
        </div>
      </div>
    </>
  );
}
