import { render, fireEvent, getByRole, screen } from '@testing-library/react';
import type { FAQProps } from 'types/FAQProps';
import Accordion from '@components/Accordion';

window.scrollTo = jest.fn();

class IntersectionObserverMock implements IntersectionObserver {
  callback: IntersectionObserverCallback;

  options?: IntersectionObserverInit;

  constructor(callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {
    this.callback = callback;
    this.options = options;
  }

  observe = jest.fn();

  unobserve = jest.fn();

  disconnect = jest.fn();

  takeRecords = jest.fn();

  root: Element | null = null;

  rootMargin: string;

  thresholds: number[] = [];
}

const intersectionObserverMock = IntersectionObserverMock as jest.Mock;

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  value: intersectionObserverMock,
});

function TestAccordion() {
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

test('Accordion Item should has class .shadow-black-sm when the condition is open', () => {
  render(<TestAccordion />);

  const accordionItems = screen.getAllByTestId('accordion-item');

  accordionItems.forEach((accordionItem) => {
    expect(getByRole(accordionItem, 'button')).toBeInTheDocument();
  });

  fireEvent.click(getByRole(accordionItems[1], 'button'));

  expect(accordionItems[1]).toHaveClass('shadow-black-sm');

  fireEvent.click(getByRole(accordionItems[1], 'button'));
  expect(accordionItems[1]).not.toHaveClass('shadow-black-sm');
});

test('All accordion items should not have class .shadow-black-sm when the first render', () => {
  render(<TestAccordion />);

  const accordionItems = screen.getAllByTestId('accordion-item');

  accordionItems.forEach((accordionItem) => {
    expect(accordionItem).not.toHaveClass('shadow-black-sm');
  });
});
