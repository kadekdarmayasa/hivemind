import type { ServiceProps } from 'types/Service';
import ServiceItem from '../ServiceItem';

export default function ServiceContainer({ services }: { services: ServiceProps[] }): JSX.Element {
  // TODO: Add framer motion for animation
  return (
    <div className={`flex flex-wrap justify-center gap-8 mt-14`}>
      {services.map((service) => (
        <ServiceItem key={service.id} service={service} />
      ))}
    </div>
  )
}