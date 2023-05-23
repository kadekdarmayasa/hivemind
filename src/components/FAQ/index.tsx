import Accordion from '@components/Accordion';
import type { FAQProps } from 'types/FAQProps';
import Fade from 'react-reveal/Fade';

export default function FAQ({ faqs }: { faqs: FAQProps[] }) {
  return (
    <section className='mt-32'>
      <Fade up>
        <h2 className='heading-2 text-center mb-14'>Frequently Asked Questions</h2>
      </Fade>

      <div className='max-w-[1080px] mx-auto'>
        <Accordion faqs={faqs} />
      </div>
    </section>
  )
}