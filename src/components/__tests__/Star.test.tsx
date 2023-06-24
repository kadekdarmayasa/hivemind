import { render, screen } from '@testing-library/react';
import Star from '@components/Star';

const STAR_PROPS = {
  HEIGHT: 40,
  WIDTH: 40,
  VALUE: (value: number) => value,
};

test('Should not render yellow stars when the value prop is equal to zero', () => {
  render(<Star width={STAR_PROPS.WIDTH} height={STAR_PROPS.HEIGHT} value={0} />);

  const yellowStars = screen.queryAllByTestId('yellow-star');
  yellowStars.forEach((yellowStar) => {
    expect(yellowStar).not.toBeInTheDocument();
  });
});

test('Yellow star should has the same length with value prop', () => {
  render(<Star width={STAR_PROPS.WIDTH} height={STAR_PROPS.HEIGHT} value={4} />);

  const yellowStars = screen.getAllByTestId('yellow-star');
  expect(yellowStars.length).toBe(4);
});

test('When the value prop is in decimal format, width of the last yellow star should be a calculation of decimal and width', () => {
  const decimals = Number(STAR_PROPS.VALUE(4.5)) % 1;

  render(
    <Star width={STAR_PROPS.WIDTH} height={STAR_PROPS.HEIGHT} value={STAR_PROPS.VALUE(4.5)} />,
  );

  const yellowStars = screen.getAllByTestId('yellow-star');
  const lastYellowStar = yellowStars[yellowStars.length - 1];

  expect(lastYellowStar).toHaveStyle(`width: ${decimals * STAR_PROPS.WIDTH}px`);
});

test("Star's dimensions should have the values of the given width and height", () => {
  render(<Star width={STAR_PROPS.WIDTH} height={STAR_PROPS.HEIGHT} value={4} />);

  const starsContainer = screen.getByTestId('star-container');
  const yellowStars = screen.getAllByTestId('yellow-star');
  const starPlaceholders = screen.getAllByTestId('star-placeholder');

  expect(starsContainer).toBeInTheDocument();
  expect(starsContainer).toHaveStyle(`height: ${STAR_PROPS.HEIGHT}px`);

  starPlaceholders.forEach((starPlaceholder) => {
    expect(starPlaceholder).toBeInTheDocument();
    expect(starPlaceholder).toHaveStyle(`width: ${STAR_PROPS.WIDTH}px`);
    expect(starPlaceholder).toHaveStyle(`height: ${STAR_PROPS.HEIGHT}px`);
  });

  yellowStars.forEach((yellowStar) => {
    expect(yellowStar).toBeInTheDocument();
    expect(yellowStar).toHaveStyle(`width: ${STAR_PROPS.WIDTH}px`);
    expect(yellowStar).toHaveStyle(`height: ${STAR_PROPS.HEIGHT}px`);
  });
});
