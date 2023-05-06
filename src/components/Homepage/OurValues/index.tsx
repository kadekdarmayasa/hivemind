import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { IconContext } from "react-icons";
import { LegacyRef } from 'react';
import type { OurValuesProps } from 'types/OurValues';
import parse from 'html-react-parser';
import Fade from 'react-reveal/Fade';

export default function OurValues({ refOurValues, ourValues }: { refOurValues: LegacyRef<HTMLElement>, ourValues: OurValuesProps[] }): JSX.Element {
  const checkmarkIcon = (
    <IconContext.Provider value={{ size: '2em', color: '#5BFBD8', className: '-mt-1' }}>
      <IoCheckmarkCircleOutline />
    </IconContext.Provider>
  )

  return (
    <section className="mt-44" ref={refOurValues}>
      <div className="flex flex-col items-center text-center">
        <Fade bottom>
          <small className='label-text'>Our Values</small>
        </Fade>
        <Fade bottom delay={300}>
          <h2 className="heading-2">What Sets Us Apart</h2>
        </Fade>
      </div>

      <div className="flex justify-center mt-14 flex-wrap gap-10">
        {ourValues.map((ourValue: OurValuesProps, index: number) => (
          <Fade key={ourValue._id} bottom delay={300 * index}>
            <div className='our-values-item'>
              <div className="flex items-center">
                <h3 className="heading">{ourValue.value}</h3>
                {checkmarkIcon}
              </div>

              <p className="description">{parse(ourValue.description)}</p>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  )
}