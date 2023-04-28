import TestimonyCarousel from './TestimonyCarousel';
import { TestimonyItem } from 'interfaces/TestimonyItem';

export default function Testimony({ testimonies }: { testimonies: Array<TestimonyItem> }): JSX.Element {
  return (
    <section className='mt-32'>
      <div className="flex flex-col items-center text-center">
        <h2 className="heading-2">What Client Says</h2>
      </div>

      <TestimonyCarousel testimonies={testimonies} />
    </section>
  )
}
