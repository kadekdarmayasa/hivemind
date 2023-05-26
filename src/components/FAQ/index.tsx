import React from 'react';
import Accordion from '@components/Accordion';
import type { FAQProps } from 'types/FAQProps';

export default function FAQ({ faqs }: { faqs: FAQProps[] }) {
  // TODO: Using Framer Motion for Animation
  return (
    <section className="mt-32">
      <h2 className="heading-2 text-center mb-14">Frequently Asked Questions</h2>

      <div className="max-w-[1080px] mx-auto">
        <Accordion faqs={faqs} />
      </div>
    </section>
  );
}
