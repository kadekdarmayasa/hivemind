import type { ServiceProps } from "types/Service";
import ServiceItem from "../ServiceItem";
import Fade from 'react-reveal/Fade';

export default function ServiceContainer({ services }: { services: ServiceProps[] }): JSX.Element {
  return (
    <div className='flex flex-wrap justify-center gap-8 mt-14'>
      {services.map((service, index: number) => (
        <Fade key={service._id} bottom delay={300 * index}>
          <ServiceItem service={service} />
        </Fade>
      ))}
    </div>
  )
}