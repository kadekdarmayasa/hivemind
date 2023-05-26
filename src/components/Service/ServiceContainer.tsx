import React from 'react';
import type { ServiceProps } from 'types/Service';
import ServiceItem from './ServiceItem.tsx';

export default function ServiceContainer({ services }: { services: ServiceProps[] }) {
  // TODO: Add framer motion for animation
  return (
    <div className="flex flex-wrap justify-center gap-8 mt-14">
      {services.map((service) => (
        <ServiceItem key={service.id} service={service} />
      ))}
    </div>
  );
}
