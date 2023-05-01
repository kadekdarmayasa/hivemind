import { ServiceProps } from "types/Service";
import ServiceItem from "../ServiceItem";

export default function ServiceContainer({ services }: { services: ServiceProps[] }): JSX.Element {
  return (
    <div className='flex flex-wrap justify-center gap-8 mt-14'>
      {services.map(service => <ServiceItem key={service._id} service={service} />)}
    </div>
  )
}