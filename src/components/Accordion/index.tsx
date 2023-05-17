import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody
} from '@material-tailwind/react';
import Icon from "./Icon";
import type { FAQProps } from "types/FAQProps";
import Fade from 'react-reveal/Fade';

export default function Index({ faqs }: { faqs: FAQProps[] }): JSX.Element {
  const [multipleOpen, setMultipleOpen] = useState<number[]>([1])

  const handleMultipleOpen = (value: number): void => {
    if (multipleOpen.includes(value)) {
      let opens = multipleOpen.filter(open => open !== value);
      setMultipleOpen([...new Set([...opens])]);
    } else {
      setMultipleOpen([...new Set([...multipleOpen, value])]);
    }
  }

  return (
    <>
      {faqs.map((faq, index) => (
        <Fade delay={300 * index} key={faq._id}>
          <Accordion open={multipleOpen.includes(++index)} icon={<Icon id={index} multipleOpen={multipleOpen} />} className={`bg-white px-6 py-2 mb-6 ${multipleOpen.includes(index) ? 'shadow-black-sm' : ''}`} data-testid="accordion-item">
            <AccordionHeader onClick={() => handleMultipleOpen(index)} className={`heading-3 font-outfit !font-medium !border-none ${multipleOpen.includes(index) ? '!text-palatinate-blue' : '!text-coarse-wool'}`}>
              {faq.question}
            </AccordionHeader>
            <AccordionBody className="text-brave-purple !pt-2 pb-6 font-outfit font-light text-lg leading-9">
              {faq.answer}
            </AccordionBody>
          </Accordion>
        </Fade>
      ))}
    </>
  )
}

