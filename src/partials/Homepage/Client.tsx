import React from 'react';
import type { ClientProps } from 'types/Client';
import Image from 'next/image';

export default function Client({ clients }: { clients: ClientProps[] }) {
  return (
    <section className="mt-32 2xl:mt-44">
      <div className="flex relative flex-wrap justify-center gap-10">
        {clients.map((client) => (
          <Image
            key={client.id}
            src={client.imagePath}
            alt={client.name}
            width={80}
            height={80}
          />
        ))}
      </div>
    </section>
  );
}
