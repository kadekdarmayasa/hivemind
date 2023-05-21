import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import { LegacyRef } from 'react';
import type { OurValuesProps } from 'types/OurValues';
import parse from 'html-react-parser';

export default function OurValues({
  refOurValues,
  ourValues
}: {
  refOurValues: LegacyRef<HTMLElement>,
  ourValues: OurValuesProps[]
}) {
  // TODO : Using framer motion for animation
  return (
    <section className='mt-44' ref={refOurValues}>
      <div className='flex flex-col items-center text-center'>
        <small className='label-text'>Our Values</small>
        <h2 className='heading-2'>What Sets Us Apart</h2>
      </div>

      <div className='flex justify-center mt-14 flex-wrap gap-10'>
        {ourValues.map((ourValue) => (
          <div key={ourValue._id} className='our-values-item'>
            <div className='flex items-center'>
              <h3 className='our-values-item__heading'>{ourValue.value}</h3>
              <IconContext.Provider value={{ size: '2em', color: '#5BFBD8', className: '-mt-1' }}>
                <IoCheckmarkCircleOutline />
              </IconContext.Provider>
            </div>
            <p className='our-values-item__description'>{parse(ourValue.description)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}