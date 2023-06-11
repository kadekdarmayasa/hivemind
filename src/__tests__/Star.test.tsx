import { render, screen } from '@testing-library/react';
import Star from '@components/Star';

test("Star's style should have the values of the given width and height", () => {
  const height = 40;
  const width = 40;

  render(<Star width={width} height={height} value={4} />);

  const starsContainer = screen.getByTestId('stars');
  const yellowStars = screen.getAllByTestId('yellowStar');
  const starPlaceholders = screen.getAllByTestId('starPlaceholder');

  expect(starsContainer).toBeInTheDocument();
  expect(starsContainer).toHaveAttribute('style', expect.stringContaining(`height: ${height}px`));

  starPlaceholders.forEach((starPlaceholder) => {
    expect(starPlaceholder).toBeInTheDocument();
    expect(starPlaceholder).toHaveAttribute('style', expect.stringContaining(`width: ${width}px`));
    expect(starPlaceholder).toHaveAttribute(
      'style',
      expect.stringContaining(`height: ${height}px`),
    );
  });

  yellowStars.forEach((yellowStar) => {
    expect(yellowStar).toBeInTheDocument();
    expect(yellowStar).toHaveAttribute('style', expect.stringContaining(`width: ${width}px`));
    expect(yellowStar).toHaveAttribute('style', expect.stringContaining(`height: ${height}px`));
  });
});
