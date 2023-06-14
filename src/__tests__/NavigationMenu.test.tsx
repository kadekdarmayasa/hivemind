import { fireEvent, getByRole, render, screen } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import NavigationMenu from '@components/Navbar/NavigationMenuItem';

// eslint-disable-next-line global-require
jest.mock('next/router', () => require('next-router-mock'));

test('li element should have class "active" when its child link is clicked', () => {
  mockRouter.push('/');

  render(<NavigationMenu path="/about" name="About" />);

  const navMenuContainer = screen.getByRole('listitem');
  const navMenuLink = getByRole(navMenuContainer, 'link');

  expect(navMenuContainer).toBeInTheDocument();
  expect(navMenuLink).toHaveTextContent('About');

  fireEvent.click(navMenuLink);

  expect(navMenuContainer).toHaveClass('active');
  expect(mockRouter).toMatchObject({ asPath: '/about' });
});
