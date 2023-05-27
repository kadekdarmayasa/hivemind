import React from 'react';
import type { ServiceProps } from 'types/Service';
import ServiceItem from './ServiceItem.tsx';

export default function Service({ services }: { services: ServiceProps[] }) {
  return (
    // TODO: Add framer motion for animation
    <section className="mt-32 2xl:mt-44">
      <div className="flex flex-col items-center text-center">
        <small className="label-text">Our Services</small>
        <h2 className="heading-2">Services Provide By Us</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mt-14">
        {services.map((service) => (
          <ServiceItem key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}
