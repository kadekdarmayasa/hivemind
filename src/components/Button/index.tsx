import Link from 'next/link';

type ButtonProps = {
  classNames?: string[],
  onClick?: () => void,
  type?: "button" | "submit" | "link",
  isExternal?: boolean,
  isPrimary?: boolean,
  href?: string,
  children?: React.ReactNode
}

export default function Button(props: ButtonProps): JSX.Element {
  const classNames = props.classNames ? [...props.classNames] : [];

  classNames.push('flex', 'justify-center', 'items-center');

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
