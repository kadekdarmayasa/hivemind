import { render, fireEvent, getByRole, screen } from '@testing-library/react';
import Accordion from './index';

window.scrollTo = jest.fn();

test('Accordion Item should has class .shadow-black-sm when the condition is open, none otherwise.', () => {
  const faqs = [
    {
      id: 1235,
      question: "What is your name?",
      answer: "I Kadek Darmayasa Adi Putra"
    },
    {
      id: 1236,
      question: "What is your job?",
      answer: "Web Developer"
    },
  ];

  render(<Accordion faqs={faqs} />);

  const accordionItems = screen.getAllByTestId('accordion-item');

  for (const accordionItem of accordionItems) {
    getByRole(accordionItem, 'button');
  }

  fireEvent.click(getByRole(accordionItems[1], 'button'));

  for (const accordionItem of accordionItems) {
    expect(accordionItem).toHaveClass('shadow-black-sm');
  }

  fireEvent.click(getByRole(accordionItems[1], 'button'));
  expect(accordionItems[1]).not.toHaveClass('shadow-black-sm');
})