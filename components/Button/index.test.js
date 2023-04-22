import { render } from '@testing-library/react';
import Button from './index.js';

test('Button Should has background of palatinate blue when it is primary', () => {
  const { container } = render(<Button isPrimary></Button>);

  expect(container.querySelector('button')).toHaveClass('bg-palatinate-blue');
});

test('Link Should has background of palatinate blue when it is primary', () => {
  const { container } = render(<Button isPrimary type='link' href='/'></Button>);

  expect(container.querySelector('a')).toHaveClass('bg-palatinate-blue');
})