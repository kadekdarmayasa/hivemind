import TestimonyCarousel from './TestimonyCarousel';
import type { TestimonyItemProps } from 'types/TestimonyItem';
import Fade from 'react-reveal/Fade';

export default function Testimony({
  testimonies,
  isContainLabel,
  title
}: {
  testimonies: TestimonyItemProps[],
  isContainLabel?: boolean,
  title: string
}): JSX.Element {
  return (
    <section className='mt-32 2xl:mt-44'>
      <div className="flex flex-col items-center text-center">
        {isContainLabel && (
          <Fade bottom>
            <small className='label-text'>Testimony</small>
          </Fade>
        )}
        <Fade bottom delay={300}>
          <h2 className="heading-2">{title}</h2>
        </Fade>
      </div>

      <TestimonyCarousel testimonies={testimonies} />
    </section>
  )
}
