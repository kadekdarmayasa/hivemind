import type StarType from 'types/Star';

export default function StarItem(props: StarType) {
  const { type, leftPosition, height, width } = props;

  return (
    <div
      className={`star ${type === 'placeholder' && 'placeholder'}`}
      data-testid={`${type === 'yellow' ? 'yellow-star' : 'star-placeholder'} `}
      style={{ left: leftPosition, height, width }}
    />
  );
}
