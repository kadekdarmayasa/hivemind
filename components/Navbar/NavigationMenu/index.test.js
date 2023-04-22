import { render, fireEvent } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import NavigationMenu from "./index.js";

jest.mock('next/router', () => require('next-router-mock'));

test('li Element should has .active class when it clicked', () => {
  mockRouter.push('/');

  const { container } = render(<NavigationMenu href="/about" name="About" />);

  fireEvent.click(container.querySelector('li a'));

  expect(container.querySelector('li')).toHaveClass('active');
  expect(mockRouter).toMatchObject({
    asPath: '/about',
  })
});
