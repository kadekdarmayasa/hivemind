import { render, fireEvent } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import NavigationMenu from "./index";
import { renderWithProviders } from 'utils/test-utils';

jest.mock('next/router', () => require('next-router-mock'));

test('li Element should has .active class when it clicked', () => {
  mockRouter.push('/');

  const { container } = renderWithProviders(<NavigationMenu href="/about" name="About" containSubMenu={false} />)

  expect(container.querySelector('li')).toBeInTheDocument();
  expect(container.querySelector('li a')).toHaveTextContent('About');

  fireEvent.click(container.querySelector('li a'));

  expect(container.querySelector('li')).toHaveClass('active');
  expect(mockRouter).toMatchObject({
    asPath: '/about',
  })
});

test('Li with service path should has .active class when mouse over and vice versa', () => {
  mockRouter.push('/');

  const subMenu = [
    {
      "_id": "ass122jjjjoj033f",
      "name": "Web Design",
      "path": "/web-design"
    },
    {
      "_id": "ass122jjjjoj033g",
      "name": "Search Engine Optimization",
      "path": "/seo"
    },
    {
      "_id": "ass122jjjjoj033h",
      "name": "Social Media Marketing",
      "path": "/smm"
    }
  ];

  const { container } = renderWithProviders(<NavigationMenu href="/service" name="Service" containSubMenu subMenu={subMenu} />)

  expect(container.querySelector('li')).toBeInTheDocument();
  expect(container.querySelector('li span')).toHaveTextContent('Service');


  fireEvent.mouseEnter(container.querySelector('li'));
  expect(container.querySelector('li')).toHaveClass('active');
})
