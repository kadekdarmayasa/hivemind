import { render, fireEvent } from '@testing-library/react';
import Accordion from './index';

window.scrollTo = jest.fn();

test('Should open the specified accordion items when its first clicked and close on the second click', () => {
  const faqs = [
    {
      _id: 1235,
      question: "What is your name?",
      answer: "I Kadek Darmayasa Adi Putra"
    },
    {
      _id: 1236,
      question: "What is your job?",
      answer: "Web Developer"
    },
  ];

  const { container } = render(<Accordion faqs={faqs} />);

  const accordionItems = container.querySelectorAll('.accordion-item');

  expect(accordionItems[0]).toBeInTheDocument();
  expect(accordionItems[0]).toHaveClass("shadow-black-sm");
  expect(accordionItems[0].querySelector('button')).toBeInTheDocument();

  expect(accordionItems[1]).toBeInTheDocument();
  expect(accordionItems[1].querySelector("button")).toBeInTheDocument();

  fireEvent.click(accordionItems[1].querySelector("button"));

  accordionItems.forEach(accordionItem => {
    expect(accordionItem).toHaveClass('shadow-black-sm');
  })

  fireEvent.click(accordionItems[1].querySelector("button"));
  expect(accordionItems[1]).not.toHaveClass('shadow-black-sm');
})