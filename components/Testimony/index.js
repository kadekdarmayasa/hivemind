import PropTypes from 'prop-types';
import TestimonyCarousel from './TestimonyCarousel';

export default function Testimony({ testimonies }) {
  return (
    <section className='mt-32'>
      <div className="flex flex-col items-center text-center">
        <small className="label-text">Testimony</small>
        <h2 className="heading-2">What Client Says</h2>
      </div>

      <TestimonyCarousel testimonies={testimonies} />
    </section>
  )
}

Testimony.propTyopes = {
  testimonies: PropTypes.array
}