import PropTypes from 'prop-types';
import Image from 'next/image';
import Button from '../Button';
import Star from '../Star';

export default function Testimony({ portfolios }) {
  return (
    <section className='mt-32'>
      <div className="flex flex-col items-center text-center">
        <small className="label-text">Testimony</small>
        <h2 className="heading-2">What Client Says</h2>
      </div>

      {/* <Star value={4.2} width={35} height={35} /> */}
    </section>
  )
}