import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody
} from '@material-tailwind/react';
import Icon from "./Icon";
import { FAQProps } from "types/FAQProps";

export default function Index({ faqs }: { faqs: FAQProps[] }): JSX.Element {
  const [open, setOpen] = useState<number>(1);
  const [multipleOpen, setMultipleOpen] = useState<number[]>([1])


  /**
   * 
   * TODO: make carousel can open up unlimited
   */
  const handleOpen = (value: number): void => {
    setOpen(open === value ? 0 : value);
    setMultipleOpen([...new Set([...multipleOpen, open])]);
  }

  return (
    <>
      {faqs.map((faq, index) => (
        <Accordion key={faq._id} open={open === ++index} icon={<Icon id={1} open={open} />} className={`bg-white px-6 py-2 mb-6 ${open === index && 'shadow-black-sm'}`}>
          <AccordionHeader onClick={() => handleOpen(index)} className={`heading-3 font-outfit !font-medium !border-none ${open === index ? '!text-palatinate-blue' : '!text-coarse-wool'}`}>
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

