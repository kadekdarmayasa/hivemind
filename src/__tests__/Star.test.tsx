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
  expect(starsContainer).toHaveStyle(`height: ${height}px`);

  starPlaceholders.forEach((starPlaceholder) => {
    expect(starPlaceholder).toBeInTheDocument();
    expect(starPlaceholder).toHaveStyle(`width: ${width}px`);
    expect(starPlaceholder).toHaveStyle(`height: ${height}px`);
  });

  yellowStars.forEach((yellowStar) => {
    expect(yellowStar).toBeInTheDocument();
    expect(yellowStar).toHaveStyle(`width: ${width}px`);
    expect(yellowStar).toHaveStyle(`height: ${height}px`);
  });
});
