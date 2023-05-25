import React from 'react';
import {
  fireEvent,
  getByRole,
  getByTestId,
  screen,
} from '@testing-library/react';
import mockRouter from 'next-router-mock';
import NavigationMenu from '@components/Navbar/NavigationMenu';
import { renderWithProviders } from '@utils/test-utils';

// eslint-disable-next-line global-require
jest.mock('next/router', () => require('next-router-mock'));

test("li element should has .active class when it's child link clicked", () => {
  mockRouter.push('/');

  renderWithProviders(<NavigationMenu path="/about" name="About" containSubMenu={false} />);

  const navMenuContainer = screen.getByRole('listitem');
  const navMenuLink = getByRole(navMenuContainer, 'link');

  expect(navMenuContainer).toBeInTheDocument();
  expect(navMenuLink).toHaveTextContent('About');

  fireEvent.click(navMenuLink);

  expect(navMenuContainer).toHaveClass('active');
  expect(mockRouter).toMatchObject({ asPath: '/about' });
});

test('li with service path should has .active class when mouse over and vice versa', () => {
  mockRouter.push('/');

  const subMenus = [
    {
      id: 'ass122jjjjoj033f',
      name: 'Web Design',
      path: '/web-design',
    },
    {
      id: 'ass122jjjjoj033g',
      name: 'Search Engine Optimization',
      path: '/seo',
    },
    {
      id: 'ass122jjjjoj033h',
      name: 'Social Media Marketing',
      path: '/smm',
    },
  ];

  renderWithProviders(<NavigationMenu path="/service" name="Service" containSubMenu subMenus={subMenus} />);

  const navMenuContainer = screen.getAllByRole('listitem');
  const navMenuText = getByTestId(navMenuContainer[0], 'nav-menu-text');

  expect(navMenuContainer[0]).toBeInTheDocument();
  expect(navMenuText).toHaveTextContent('Service');

  fireEvent.mouseEnter(navMenuContainer[0]);
  expect(navMenuContainer[0]).toHaveClass('active');

  fireEvent.mouseLeave(navMenuContainer[0]);
  expect(navMenuContainer[0]).not.toHaveClass('active');
});
