import { render, fireEvent, getByRole, screen } from '@testing-library/react';
import type { FAQProps } from 'types/FAQProps';
import Accordion from '@components/Accordion';

window.scrollTo = jest.fn();

window.IntersectionObserver = jest.fn((callback, options) => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
  takeRecords: jest.fn(),
  root: null,
  rootMargin: '',
  thresholds: [],
  callback,
  options,
}));

function AccordionComponent() {
  const faqs: FAQProps[] = [
    {
      id: 1235,
      question: 'What is your name?',
      answer: 'I Kadek Darmayasa Adi Putra',
    },
    {
      id: 1236,
      question: 'What is your job?',
      answer: 'Web Developer',
    },
  ];

  return <Accordion faqs={faqs} />;
}

it('the first accordion item should has classname "shadow-black-sm" when the first render', () => {
  render(<AccordionComponent />);

  const accordionItems = screen.getAllByTestId('accordion-item');
  expect(accordionItems[0]).toHaveClass('shadow-black-sm');
});

it('accordion item should has classname "shadow-black-sm" when the state is open', () => {
  render(<AccordionComponent />);

  const accordionItems = screen.getAllByTestId('accordion-item');
  fireEvent.click(getByRole(accordionItems[1], 'button'));
  expect(accordionItems[1]).toHaveClass('shadow-black-sm');
});

it('accordion item should not has classname "shadow-black-sm" when the state is closed', () => {
  render(<AccordionComponent />);

  const accordionItems = screen.getAllByTestId('accordion-item');
  fireEvent.click(getByRole(accordionItems[0], 'button'));
  expect(accordionItems[0]).not.toHaveClass('shadow-black-sm');
});
