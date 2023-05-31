import React from 'react';
import type { WorkCultureProps } from 'types/WorkCulture';
import Image from 'next/image';

export default function CompanyWorkCulture({
  workCultures,
}: {
  workCultures: WorkCultureProps[];
}) {
  // TODO : using framer motion for animation
  return (
    <section className="mt-32">
      <div className="flex justify-center items-center flex-col text-center">
        <small className="label-text">Work Culture</small>
        <h2 className="heading-2 mb-24">Our Work Culture</h2>
      </div>

      {/* eslint-disable-next-line arrow-body-style */}
      {workCultures.map((workCulture, index) => {
        return index % 2 === 0 ? (
          <div
            key={index}
            className="flex flex-col lg:flex-row gap-12 items-center"
          >
            <div className="flex-1 w-full flex justify-end shadow-black-md">
              <Image
                width={400}
                height={300}
                src={workCulture.imageId}
                alt={workCulture.headline}
                className="w-full"
              />
            </div>

            <div className="flex-1">
              <h3 className="heading-3">{workCulture.headline}</h3>
              <p className="mt-6 text-brave-purple font-normal text-lg leading-9">
                {workCulture.description}
              </p>
            </div>
          </div>
        ) : (
          <div
            key={index}
            className="flex flex-col lg:flex-row gap-12 items-center my-14"
          >
            <div className="flex-1 lg:order-1 order-2">
              <h3 className="heading-3">{workCulture.headline}</h3>
              <p className="mt-6 text-brave-purple font-normal text-lg leading-9">
                {workCulture.description}
              </p>
            </div>

            <div className="flex-1 w-full lg:order-2 flex justify-end shadow-black-md">
              <Image
                width={400}
                height={300}
                src={workCulture.imageId}
                alt={workCulture.headline}
                className="w-full"
              />
            </div>
          </div>
        );
      })}
    </section>
  );
}
