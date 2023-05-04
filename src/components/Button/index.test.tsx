import { render } from '@testing-library/react';
import Button from './index';

test('Button Should has background of palatinate blue when it is primary', () => {
  const { container } = render(<Button isPrimary></Button>);

  expect(container.querySelector('button')).toHaveClass('bg-palatinate-blue');
});

test('Link Should has background of palatinate blue when it is primary', () => {
  const { container } = render(<Button isPrimary type='link' href='/'></Button>);

  expect(container.querySelector('a')).toHaveClass('bg-palatinate-blue');
})

test('Button should has type submit', () => {
  const { container } = render(<Button isPrimary type='submit'></Button>);

  expect(container.querySelector('button')).toHaveProperty('type', 'submit');
})

test('Button should has type button', () => {
  const { container } = render(<Button isPrimary></Button>);

  expect(container.querySelector('button')).toHaveProperty('type', 'button');
})