import PropTypes from 'prop-types';

export default function Star({ className, value, height, width }) {
  const decimals = Number(value) % 1;
  const star = [];
  let leftPosition = 0;
  const starPlaceholder = [];

  for (let index = 0; index < value - decimals; index++) {
    leftPosition += width;
    star.push(<div className="star" key={`star-${index}`} style={{ left: index * width, height: height, width: width }}></div>)
  }

  if (decimals > 0 && value <= 5) star.push(<div className="star" key={`starWithDecimal`} style={{ left: leftPosition, height: height, width: decimals * width }}></div>)

  for (let index = 0; index < 5; index++) {
    starPlaceholder.push(<div className="star placeholder" key={`star-placeholder-${index}`} style={{ left: index * width, height: height, width: width }}></div>)
  }

  return (
    <>
      <div className={['stars', className].join(' ')} style={{ height: height }}>
        {starPlaceholder}
        {star}
      </div>
    </>
  )
}

Star.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
}