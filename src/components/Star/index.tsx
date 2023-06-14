import type { StarProps } from 'types/Star';
import StarItem from './StarItem';

const DEFAULT_STAR_LENGTH = 5;

export default function Star(props: StarProps) {
  const { value, height, width } = props;
  const decimals = Number(value) % 1;
  const starCount = Math.floor(value);

  const renderStars = () => {
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
          key={`yellowStar-${starCount + decimals}`}
          width={decimals * width}
          height={height}
          leftPosition={starCount * width}
          type="yellow"
        />,
      );
    }

    return star;
  };

  const renderStarPlaceholders = () => {
    const starPlaceholders = Array.from({ length: DEFAULT_STAR_LENGTH }, (_, index) => (
      <StarItem
        key={`star-placeholder-${index}`}
        height={height}
        width={width}
        leftPosition={index * width}
        type="placeholder"
      />
    ));

    return starPlaceholders;
  };

  return (
    <div className="stars" data-testid="stars" style={{ height }}>
      {renderStarPlaceholders()}
      {renderStars()}
    </div>
  );
}
