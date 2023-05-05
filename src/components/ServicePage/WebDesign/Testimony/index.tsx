import TestimonyCarousel from 'components/Testimony/TestimonyCarousel';

export default function Testimony({ clients }): JSX.Element {
  return (<section className='mt-32'>
    <div className="flex flex-col items-center text-center">
      <h2 className="heading-2">{clients.title}</h2>
    </div>

    <TestimonyCarousel testimonies={clients.testimonies} />
  </section>)
}