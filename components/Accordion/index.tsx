import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody
} from '@material-tailwind/react';
import Icon from "./Icon";
import { FAQProps } from "types/FAQProps";

export default function Index({ faqs }: { faqs: FAQProps[] }): JSX.Element {
  const [multipleOpen, setMultipleOpen] = useState<number[]>([1])

  const handleMultipleOpen = (value: number): void => {
    if (multipleOpen.includes(value)) {
      let opens = multipleOpen.filter(open => open != value);
      setMultipleOpen([...new Set([...opens])]);
    } else {
      setMultipleOpen([...new Set([...multipleOpen, value])]);
    }
  }

  return (
    <>
      {faqs.map((faq, index) => (
        <Accordion key={faq._id} open={multipleOpen.includes(++index)} icon={<Icon id={index} multipleOpen={multipleOpen} />} className={`bg-white px-6 py-2 mb-6 accordion-item ${multipleOpen.includes(index) ? 'shadow-black-sm' : ''}`}>
          <AccordionHeader onClick={() => handleMultipleOpen(index)} className={`heading-3 font-outfit !font-medium !border-none ${multipleOpen.includes(index) ? '!text-palatinate-blue' : '!text-coarse-wool'}`}>
            {faq.question}
          </AccordionHeader>
          <AccordionBody className="text-brave-purple !pt-2 pb-6 font-outfit font-light text-lg leading-9">
            {faq.answer}
          </AccordionBody>
        </Accordion >
      ))}
    </>
  )
}

