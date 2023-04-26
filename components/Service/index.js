import PropTypes from 'prop-types';
import Image from 'next/image';
import Button from '../Button';
import { IoChevronForwardOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';

export default function Service({ services }) {
  return (
    <section className="mt-32">
      <div className="flex flex-col items-center text-center">
        <small className="label-text">Our Services</small>
        <h2 className="heading-2">Services Provide By Us</h2>
      </div>

      <div className='flex flex-wrap justify-center gap-8 mt-14'>
        {services.map(service => (
          <div key={service._id} className='bg-white shadow-black-sm hover:shadow-black-md hover:scale-[1.02] transition-all w-[360px] h-[500px] px-10 py-14 flex flex-col items-start rounded-xl'>
            <div className='bg-palatinate-blue w-20 h-20 flex items-center justify-center rounded-lg mb-8'>
              <Image src={service.imagePath} height={30} width={30} alt={service.name} style={{ width: '40px' }} />
            </div>
            <h3 className='heading-3 mb-3'>{service.name}</h3>
            <p className='text-brave-purple font-normal text-lg leading-9 mb-5'>{service.briefDescription}</p>
            <Button type='link' href={`/services/${service._id}`} classNames='place-self-start mt-auto relative group'>
              <span className='text-lg'>Learn more</span>
              <IconContext.Provider value={{ size: '1.3em', className: 'mt-[2px] ml-1 group-hover:ml-2 transition-all', color: '#2B3BE5' }}>
                <IoChevronForwardOutline />
              </IconContext.Provider>
              <div className='absolute h-[2px] rounded-lg w-0 left-0 group-hover:w-full -bottom-1 opacity-0 group-hover:opacity-100 transition-all bg-palatinate-blue'></div>
            </Button>
          </div>
        )
        )}
      </div>
      <Button type='link' href='/services' classNames='mt-8 w-[150px] mx-auto relative group'>
        <span className='text-lg'>See all services</span>
        <IconContext.Provider value={{ size: '1.3em', className: 'mt-[2px] ml-1 group-hover:ml-2 transition-all', color: '#2B3BE5' }}>
          <IoChevronForwardOutline />
        </IconContext.Provider>
        <div className='absolute h-[2px] rounded-lg w-0 left-0 group-hover:w-full -bottom-1 opacity-0 group-hover:opacity-100 transition-all bg-palatinate-blue'></div>
      </Button>
    </section>
  )
}

Service.propTypes = {
  services: PropTypes.array
}