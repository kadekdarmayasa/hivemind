import { useState } from 'react';
import { motion } from 'framer-motion';
import { transformVariants, commonMotionProps } from '@utils/motion';
import { Accordion as RCAccordion, AccordionHeader, AccordionBody } from '@material-tailwind/react';
import { IconContext } from 'react-icons';
import { IoChevronDown } from 'react-icons/io5';
import type { FAQProps } from 'types/FAQProps';

const iconChevronDownProps: IconContext = { size: '0.8em' };

export default function Accordion({ faqs }: { faqs: FAQProps[] }): JSX.Element {
  const [openStates, setOpenStates] = useState<boolean[]>(faqs.map(() => false));

  const handleToggleOpen = (index: number): void => {
    const updatedOpenStates = [...openStates];
    updatedOpenStates[index] = !updatedOpenStates[index];
    setOpenStates(updatedOpenStates);
  };

  return (
    <>
      {faqs.map((faq, index) => (
        <motion.div key={faq.id} {...commonMotionProps} variants={transformVariants('linear')}>
          <RCAccordion
            key={faq.id}
            open={openStates[index]}
            data-testid="accordion-item"
            icon={
              <IconContext.Provider value={iconChevronDownProps}>
                <IoChevronDown className={`${openStates[index] ? 'rotate-180' : ''}`} />
              </IconContext.Provider>
            }
            className={`bg-white px-6 py-2 mb-6 
            ${openStates[index] ? 'shadow-black-sm' : ''}`}
          >
            <AccordionHeader
              onClick={() => handleToggleOpen(index)}
              className={`heading-3 font-outfit text-left !font-medium !border-none 
              ${openStates[index] ? '!text-palatinate-blue' : '!text-coarse-wool'}`}
            >
              {faq.question}
            </AccordionHeader>

            <AccordionBody className="text-brave-purple !pt-2 pb-6 font-outfit font-light text-lg leading-9">
              {faq.answer}
            </AccordionBody>
          </RCAccordion>
        </motion.div>
      ))}
    </>
  );
}
