import { render, screen } from '@testing-library/react';
import Button from '@components/Button';

test('should have a classname of "bg-palatinate-blue" when it is primary', () => {
  render(<Button isPrimary />);

  expect(screen.getByRole('button')).toHaveClass('bg-palatinate-blue');
});

test('should have type submit', () => {
  render(<Button type="submit" />);

  expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
});

test('should have type button by default', () => {
  render(<Button />);

  expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
});
