import Link from 'next/link';
import PropTypes from 'prop-types';

export default function Button(props) {
  const classNames = [props.classNames];

  classNames.push('flex justify-center items-center');

  if (props.isPrimary) {
    classNames.push('bg-palatinate-blue shadow-purple-sm text-white');
  } else {
    classNames.push('bg-transparent text-palatinate-blue');
  }

  const onClick = () => {
    if (props.onClick) props.onClick();
  }

  if (props.type === 'link') {
    if (props.isExternal) {
      return (
        <a href={props.href} target='_blank' className={classNames.join(' ')}>
          {props.children}
        </a>
      )
    } else {
      return (
        <Link href={props.href} className={classNames.join(' ')}>
          {props.children}
        </Link>
      )
    }
  }

  return (
    <button type={props.type ? props.type : 'button'} onClick={onClick} className={classNames.join(' ')}>
      {props.children}
    </button>
  )
}

Button.propTypes = {
  classNames: PropTypes.string,
  onClick: PropTypes.func,
  isExternal: PropTypes.bool,
  isPrimary: PropTypes.bool,
  type: PropTypes.string,
  href: PropTypes.string,
};