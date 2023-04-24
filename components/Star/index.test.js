import { render } from '@testing-library/react';
import Star from './index.js';

test('Should have these values [width, height, value]', () => {
  const height = 40,
    width = 40;

  const { container } = render(<Star width={width} height={height} value={4} />);
  const yellowStar = '.star:not(.placeholder)';

  expect(container.querySelector('.stars')).toBeInTheDocument();
  expect(container.querySelector('.stars')).toHaveAttribute('style', expect.stringContaining(`height: ${height}px`));
  expect(container.querySelector(yellowStar)).toBeInTheDocument();
  expect(container.querySelector(yellowStar)).toHaveAttribute('style', expect.stringContaining(`width: ${width}px`));
  expect(container.querySelector(yellowStar)).toHaveAttribute('style', expect.stringContaining(`height: ${height}px`));
});
