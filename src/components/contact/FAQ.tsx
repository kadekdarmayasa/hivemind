import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { transformVariants, fadeVariants, commonMotionProps } from '@utils/motion';
import axios from 'axios';
import { useAccordion } from '@hooks/useAccordion';
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react';
import FAQItem from 'types/FAQItem';
import { IconContext } from 'react-icons';
import { IoChevronDown } from 'react-icons/io5';
import Skeleton from '@components/common/Skeleton';

const iconChevronDownProps: IconContext = { size: '0.8em' };

export default function FAQ() {
  const FAQContainerRef = useRef<HTMLElement>(null);
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const { openStates, setOpenStates, handleOpenStates } = useAccordion();

  useEffect(() => {
    axios.get('/api/faqs').then((response) => {
      setFaqs(response.data.faqs);
      setOpenStates(() => response.data.faqs.map((_: unknown, index: number) => index === 0));
    });
    return () => setFaqs([]);
  }, [setOpenStates]);

  return (
    <section className="mt-32" ref={FAQContainerRef}>
      <motion.h2
        {...commonMotionProps}
        variants={transformVariants('linear')}
        className="heading-2 text-center mb-14"
      >
        Frequently Asked Questions
      </motion.h2>

      <motion.div
        {...commonMotionProps}
        variants={fadeVariants('linear')}
        className="max-w-[1080px] mx-auto"
      >
        {faqs.length === 0 ? (
          <Skeleton.FAQItem />
        ) : (
          faqs.map((faq, index) => (
            <motion.div key={faq.id} {...commonMotionProps} variants={transformVariants('linear')}>
              <Accordion
                key={faq.id}
                open={openStates[index]}
                icon={
                  <IconContext.Provider value={iconChevronDownProps}>
                    <IoChevronDown className={`${openStates[index] ? 'rotate-180' : ''}`} />
                  </IconContext.Provider>
                }
                className={`bg-white px-6 py-2 mb-6 
            ${openStates[index] ? 'shadow-black-sm' : ''}`}
              >
                <AccordionHeader
                  onClick={() => handleOpenStates(index)}
                  className={`heading-3 font-outfit text-left !font-medium !border-none 
              ${openStates[index] ? '!text-palatinate-blue' : '!text-coarse-wool'}`}
                >
                  {faq.question}
                </AccordionHeader>

                <AccordionBody className="text-brave-purple !pt-2 pb-6 font-outfit font-light text-lg leading-9">
                  {faq.answer}
                </AccordionBody>
              </Accordion>
            </motion.div>
          ))
        )}
      </motion.div>
    </section>
  );
}
