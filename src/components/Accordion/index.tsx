/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import React, { useState, useMemo } from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';
import { IconContext } from 'react-icons';
import { IoChevronDown } from 'react-icons/io5';
import type { FAQProps } from 'types/FAQProps';

export default function Index({ faqs }: { faqs: FAQProps[] }) {
  const [multipleOpen, setMultipleOpen] = useState([1]);
  const iconProps = useMemo(() => ({ size: '0.8em' }), []);

  const handleMultipleOpen = (value: number): void => {
    if (multipleOpen.includes(value)) {
      const opens = multipleOpen.filter((open) => open !== value);
      setMultipleOpen([...new Set([...opens])]);
    } else {
      setMultipleOpen([...new Set([...multipleOpen, value])]);
    }
  };

  return (
    <>
      {faqs.map((faq, index) => (
        // TODO: Add Framer Motion for Animation
        <Accordion
          key={faq.id}
          open={multipleOpen.includes(++index)}
          data-testid="accordion-item"
          icon={(
            <IconContext.Provider value={iconProps}>
              <IoChevronDown
                className={`${multipleOpen.includes(index) ? 'rotate-180' : ''}`}
              />
            </IconContext.Provider>
          )}
          className={
            `bg-white px-6 py-2 mb-6 
            ${multipleOpen.includes(index) ? 'shadow-black-sm' : ''}`
          }
        >

          <AccordionHeader
            onClick={() => handleMultipleOpen(index)}
            className={
              `heading-3 font-outfit !font-medium !border-none 
              ${multipleOpen.includes(index) ? '!text-palatinate-blue' : '!text-coarse-wool'}`
            }
          >
            {faq.question}
          </AccordionHeader>

          <AccordionBody className="text-brave-purple !pt-2 pb-6 font-outfit font-light text-lg leading-9">
            {faq.answer}
          </AccordionBody>

        </Accordion>
      ))}
    </>
  );
}
