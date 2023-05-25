export default function Star({ value, height, width }: StarProps): JSX.Element {
  const decimals = Number(value) % 1;
  const star = [];
  let leftPosition = 0;
  const starPlaceholder = [];

  for (let index = 0; index < value - decimals; index++) {
    leftPosition += width;
    star.push(<div className="star" data-testid="yellowStar" key={`star-${index}`} style={{ left: index * width, height: height, width: width }}></div>)
  }

  if (decimals > 0 && value <= 5) star.push(<div className="star" data-testid="yellowStar" key={`starWithDecimal`} style={{ left: leftPosition, height: height, width: decimals * width }}></div>)

  for (let index = 0; index < 5; index++) {
    starPlaceholder.push(<div className="star placeholder" data-testid="starPlaceholder" key={`star-placeholder-${index}`} style={{ left: index * width, height: height, width: width }}></div>)
  }

  return (
    <>
      <div className={'stars'} data-testid="stars" style={{ height: height }}>
        {starPlaceholder}
        {star}
      </div>
    </>
  )
}

type StarProps = {
  value: number,
  height: number,
  width: number
}