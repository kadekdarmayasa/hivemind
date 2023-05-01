import Button from 'components/Button';
import { IoChevronForwardOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import { ServiceProps } from 'types/Service';
import { ServiceContainer } from 'components/Service';

export default function Service({ services }: { services: ServiceProps[] }): JSX.Element {
  return (
    <section className="mt-32">
      <div className="flex flex-col items-center text-center">
        <h2 className="heading-2">Services Provide By Us</h2>
      </div>

      <ServiceContainer services={services} />

      <Button type='link' href='/services' classNames={['mt-8', 'w-[150px]', 'mx-auto', 'relative', 'group']}>
        <span className='text-lg'>See all services</span>
        <IconContext.Provider value={{ size: '1.3em', className: 'mt-[2px] ml-1 group-hover:ml-2 transition-all', color: '#2B3BE5' }}>
          <IoChevronForwardOutline />
        </IconContext.Provider>
        <div className='absolute h-[2px] rounded-lg w-0 left-0 group-hover:w-full -bottom-1 opacity-0 group-hover:opacity-100 transition-all bg-palatinate-blue'></div>
      </Button>
    </section>
  )
}