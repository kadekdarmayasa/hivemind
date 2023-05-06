import TestimonyCarousel from 'components/Testimony/TestimonyCarousel';
import Fade from 'react-reveal/Fade';

export default function Testimony({ clients }): JSX.Element {
  return (<section className='mt-32'>
    <div className="flex flex-col items-center text-center">
      <Fade up>
        <h2 className="heading-2">{clients.title}</h2>
      </Fade>
    </div>

    <TestimonyCarousel testimonies={clients.testimonies} />
  </section>)
}