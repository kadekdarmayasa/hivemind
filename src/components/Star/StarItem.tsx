import React from 'react';
import type { StarProps } from 'types/Star';

export default function StarItem({
  leftPosition, width, height, type,
}: StarProps & {
  leftPosition: number,
  type: 'placeholder' | 'yellow'
}) {
  if (type === 'yellow') {
    return (
      <div
        className="star"
        data-testid="yellowStar"
        style={{ left: leftPosition, height, width }}
      />
    );
  }

  if (type === 'placeholder') {
    return (
      <div
        className="star placeholder"
        data-testid="starPlaceholder"
        style={{ left: leftPosition, height, width }}
      />
    );
  }
}
