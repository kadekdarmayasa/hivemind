import { render, screen } from '@testing-library/react';
import Button from '@components/Button';

test('should have a background of palatinate blue when it is primary', () => {
  render(<Button isPrimary />);

  expect(screen.getByRole('button')).toHaveClass('bg-palatinate-blue');
});

test('should have a background of palatinate blue when it is primary link', () => {
  render(<Button isPrimary type="link" href="/" />);

  expect(screen.getByRole('link')).toHaveClass('bg-palatinate-blue');
});

test('should have type submit', () => {
  render(<Button isPrimary type="submit" />);

  expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
});

test('should have type button by default', () => {
  render(<Button />);

  expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
});
