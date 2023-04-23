import PropTypes from 'prop-types';
import Image from 'next/image';
import useSWR from 'swr';
import axios from 'axios';
import Button from '../Button';
import Link from 'next/link';

const fetcher = (url) => axios.get(url).then(response => response.data);

export default function Service({ limit }) {
  const { data: services, error, isLoading } = useSWR('/api/services/' + limit, fetcher);

  if (error) return false;
  if (isLoading) return false;

  return (
    <section className="mt-36">
      <div className="flex flex-col items-center text-center">
        <small className="label-text">Our Services</small>
        <h2 className="heading-2">Services Provide By Us</h2>
      </div>

      <div className='flex flex-wrap justify-center gap-8 mt-20 rounded-lg'>
        {services.map(service => (
          <Link href={`service/${service._id}`} className='h-auto block'>
            <div key={service._id} className='bg-white shadow-black-sm w-[350px] px-10 py-14 flex flex-col items-start'>
              <div className='bg-palatinate-blue w-20 h-20 flex items-center justify-center rounded-lg mb-6'>
                <Image src={service.imagePath} height={30} width={30} alt={service.name} style={{ width: '40px' }} />
              </div>
              <h3 className='heading-3 mb-3'>{service.name}</h3>
              <p className='text-brave-purple font-normal text-lg leading-9 mb-5'>{service.briefDescription}</p>
              <Button type='link' href={`/services/${service._id}`} classNames='place-self-start mt-auto'>
                <span className='text-lg'>Learn more</span>
                <Image src='/images/arrow-forward.svg' height={22} width={22} alt='Arrow Forward' className='mt-[2px] ml-1' />
              </Button>
            </div>
          </Link>
        )
        )}
      </div>
    </section>
  )
}

Service.propTypes = {
  limit: PropTypes.number
}