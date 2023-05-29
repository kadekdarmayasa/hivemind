import React, { LegacyRef, useMemo } from 'react';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import type { OurValuesProps } from 'types/OurValues';
import parse from 'html-react-parser';

export default function OurValues({
  refOurValues,
  ourValues,
}: {
  refOurValues: LegacyRef<HTMLElement>;
  ourValues: OurValuesProps[];
}) {
  const iconProps = useMemo(
    () => ({ size: '2em', color: '#5BFBD8', className: '-mt-1' }),
    [],
  );

  // TODO : Using framer motion for animation
  return (
    <section className="mt-44" ref={refOurValues}>
      <div className="flex flex-col items-center text-center">
        <small className="label-text">Our Values</small>
        <h2 className="heading-2">What Sets Us Apart</h2>
      </div>

      <div className="flex justify-center mt-14 flex-wrap gap-10">
        {ourValues.map((ourValue) => (
          <div key={ourValue.id} className="our-values-item">
            <div className="flex items-center">
              <h3 className="our-values-item__heading">{ourValue.value}</h3>
              <IconContext.Provider value={iconProps}>
                <IoCheckmarkCircleOutline />
              </IconContext.Provider>
            </div>
            <p className="our-values-item__description">
              {parse(ourValue.description)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
