import { render, screen } from '@testing-library/react';
import Button from './index';

test('Button Should has background of palatinate blue when it is primary', () => {
  render(<Button isPrimary></Button>);

  expect(screen.getByRole('button')).toHaveClass('bg-palatinate-blue');
});

test('Link Should has background of palatinate blue when it is primary', () => {
  render(<Button isPrimary type='link' href='/'></Button>);

  expect(screen.getByRole('link')).toHaveClass('bg-palatinate-blue');
});

test('Button should has type submit', () => {
  render(<Button isPrimary type='submit'></Button>);

  expect(screen.getByRole('button')).toHaveProperty('type', 'submit');
});

test('Button should has type button', () => {
  render(<Button isPrimary></Button>);

  expect(screen.getByRole('button')).toHaveProperty('type', 'button');
});