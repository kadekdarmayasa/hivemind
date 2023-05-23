import type { ServiceProps } from 'types/Service';
import { ServiceContainer } from '@components/Service';

export default function Service({ services }: { services: ServiceProps[] }) {
  return (
    // TODO: Add framer motion for animation
    <section className='mt-32 2xl:mt-44'>
      <div className='flex flex-col items-center text-center'>
        <small className='label-text'>Our Services</small>
        <h2 className='heading-2'>Services Provide By Us</h2>
      </div>

      <ServiceContainer services={services} />
    </section>
  );
}