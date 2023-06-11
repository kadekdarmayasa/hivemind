import type { StarProps } from 'types/Star';

export default function StarItem({ leftPosition, width, height, type }: StarProps) {
  return (
    <div
      className={`star ${type === 'placeholder' && 'placeholder'}`}
      data-testid={`${type === 'yellow' ? 'yellowStar' : 'starPlaceholder'} `}
      style={{ left: leftPosition, height, width }}
    />
  );
}
