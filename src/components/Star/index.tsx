import React from 'react';
import type { StarProps } from 'types/Star';
import StarItem from './StarItem.tsx';

export default function Star({ value, height, width }: StarProps & {
  value: number
}) {
  const decimals = Number(value) % 1;
  const star = [];
  let leftPosition = 0;
  const starPlaceholder = [];

  for (let index = 0; index < value - decimals; index += 1) {
    leftPosition += width;
    star.push(
      <StarItem
        key={`yellowStar-${index}`}
        width={width}
        height={height}
        leftPosition={index * width}
        type="yellow"
      />,
    );
  }

  if (decimals > 0 && value <= 5) {
    star.push(
      <StarItem
        width={decimals * width}
        height={height}
        leftPosition={leftPosition}
        type="yellow"
      />,
    );
  }

  for (let index = 0; index < 5; index += 1) {
    starPlaceholder.push(
      <StarItem
        key={`star-placeholder-${index}`}
        height={height}
        width={width}
        leftPosition={index * width}
        type="placeholder"
      />,
    );
  }

  return (
    <div className="stars" data-testid="stars" style={{ height }}>
      {starPlaceholder}
      {star}
    </div>
  );
}
