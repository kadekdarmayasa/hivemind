import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '@components/Button';

test('Button Should has background of palatinate blue when it is primary', () => {
  render(<Button isPrimary />);

  expect(screen.getByRole('button')).toHaveClass('bg-palatinate-blue');
});

test('Link Should has background of palatinate blue when it is primary', () => {
  render(<Button isPrimary type="link" href="/" />);

  expect(screen.getByRole('link')).toHaveClass('bg-palatinate-blue');
});

test('Button should has type submit', () => {
  render(<Button isPrimary type="submit" />);

  expect(screen.getByRole('button')).toHaveProperty('type', 'submit');
});

test('Button should has type button', () => {
  render(<Button isPrimary />);

  expect(screen.getByRole('button')).toHaveProperty('type', 'button');
});
