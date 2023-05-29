import React from 'react';
import { fireEvent, getByRole, screen } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import NavigationMenu from '@components/Navbar/NavigationMenu';
import { renderWithProviders } from '@utils/test-utils';

// eslint-disable-next-line global-require
jest.mock('next/router', () => require('next-router-mock'));

test("li element should has .active class when it's child link clicked", () => {
  mockRouter.push('/');

  renderWithProviders(<NavigationMenu path="/about" name="About" />);

  const navMenuContainer = screen.getByRole('listitem');
  const navMenuLink = getByRole(navMenuContainer, 'link');

  expect(navMenuContainer).toBeInTheDocument();
  expect(navMenuLink).toHaveTextContent('About');

  fireEvent.click(navMenuLink);

  expect(navMenuContainer).toHaveClass('active');
  expect(mockRouter).toMatchObject({ asPath: '/about' });
});
