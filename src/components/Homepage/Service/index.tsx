import type { ServiceProps } from 'types/Service';
import { ServiceContainer } from 'components/Service';
import Fade from 'react-reveal/Fade';

export default function Service({ services }: { services: ServiceProps[] }): JSX.Element {
  return (
    <section className="mt-32 2xl:mt-44">
      <div className="flex flex-col items-center text-center">
        <Fade bottom>
          <small className='label-text'>Our Services</small>
        </Fade>
        <Fade bottom delay={300}>
          <h2 className="heading-2">Services Provide By Us</h2>
        </Fade>
      </div>

      <ServiceContainer services={services} />
    </section>
  )
}