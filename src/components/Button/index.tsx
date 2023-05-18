import Link from 'next/link';

type ButtonProps = {
  className?: string,
  onClick?: () => void,
  type?: 'button' | 'submit' | 'link',
  isExternal?: boolean,
  isPrimary?: boolean,
  href?: string,
  children?: React.ReactNode
}

export default function Button(props: ButtonProps): JSX.Element {
  const className = props.className ? [...props.className.split(' ')] : [];

  className.push('flex', 'justify-center', 'items-center');

  props.isPrimary ?
    className.push('bg-palatinate-blue shadow-purple-sm text-white') :
    className.push('bg-transparent text-palatinate-blue');


  const onClick = () => {
    props.onClick && props.onClick();
  }

  if (props.type === 'link') {
    if (props.isExternal) {
      return (
        <a href={props.href} target='_blank' rel='noreferrer' className={className.join(' ')}>
          {props.children}
        </a>
      );
    } else {
      return (
        <Link tabIndex={0} href={props.href} className={className.join(' ')}>
          {props.children}
        </Link>
      );
    }
  }

  return (
    <button type={props.type ? props.type : 'button'} onClick={onClick} className={className.join(' ')}>
      {props.children}
    </button>
  )
}
