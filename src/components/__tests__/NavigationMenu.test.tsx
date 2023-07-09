import { fireEvent, getByRole, render, screen } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import NavigationMenu from '@components/common/Navbar/NavigationMenuItem';

// eslint-disable-next-line global-require
jest.mock('next/router', () => require('next-router-mock'));

test('first nav item should has classname "active" when the first render', () => {
  mockRouter.push('/');

  render(<NavigationMenu path="/" name="Home" />);
  render(<NavigationMenu path="/about" name="About" />);

  const navMenuItems = screen.getAllByRole('listitem');

  expect(navMenuItems[0]).toHaveClass('active');
  expect(mockRouter).toMatchObject({ asPath: '/' });
});

test('nav item should still has classname "active" if its child link is click twice or more', () => {
  mockRouter.push('/');

  render(<NavigationMenu path="/" name="Home" />);

  const navMenuItem = screen.getByRole('listitem');
  const navMenuLink = getByRole(navMenuItem, 'link');

  fireEvent.click(navMenuLink);
  fireEvent.click(navMenuLink);

  expect(navMenuItem).toHaveClass('active');
  expect(mockRouter).toMatchObject({ asPath: '/' });
});

test('should only one nav item that has classname "active"', () => {
  mockRouter.push('/');

  render(<NavigationMenu path="/" name="Home" />);
  render(<NavigationMenu path="/about" name="About" />);

  const navMenuItems = screen.getAllByRole('listitem');
  const navMenuLinks = screen.getAllByRole('link');

  fireEvent.click(navMenuLinks[1]);

  expect(navMenuItems[0]).not.toHaveClass('active');
  expect(navMenuItems[1]).toHaveClass('active');
  expect(mockRouter).toMatchObject({ asPath: '/about' });
});
