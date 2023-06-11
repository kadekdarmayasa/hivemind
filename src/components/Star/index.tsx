import type { StarProps } from 'types/Star';
import StarItem from './StarItem';

export default function Star({ value, height, width }: StarProps): JSX.Element {
  const DEFAULT_STAR_LENGTH = 5;
  const decimals = Number(value) % 1;
  const starCount = Math.floor(value);

  const star = Array.from({ length: starCount }, (_, index) => (
    <StarItem
      key={`yellowStar-${index}`}
      width={width}
      height={height}
      leftPosition={index * width}
      type="yellow"
    />
  ));

  if (decimals > 0 && value <= 5) {
    star.push(
      <StarItem
        width={decimals * width}
        height={height}
        leftPosition={starCount * width}
        type="yellow"
      />,
    );
  }

  const starPlaceholder = Array.from({ length: DEFAULT_STAR_LENGTH }, (_, index) => (
    <StarItem
      key={`star-placeholder-${index}`}
      height={height}
      width={width}
      leftPosition={index * width}
      type="placeholder"
    />
  ));

  return (
    <div className="stars" data-testid="stars" style={{ height }}>
      {starPlaceholder}
      {star}
    </div>
  );
}
