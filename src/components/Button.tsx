import Link from 'next/link';
import classNames from 'classnames';

type ButtonProps = {
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'link';
  isExternal?: boolean;
  isPrimary?: boolean;
  disabled?: boolean;
  href?: string;
  children?: React.ReactNode;
};

export default function Button(props: ButtonProps) {
  const {
    className,
    onClick,
    type = 'button',
    isExternal,
    isPrimary,
    href,
    children,
    disabled,
  } = props;

  const buttonClassNames = classNames(className, {
    'flex justify-center items-center': true,
    'bg-palatinate-blue shadow-purple-sm text-white': isPrimary,
    'text-coarse-wool': !isPrimary && type === 'button' && !disabled,
    'bg-transparent text-palatinate-blue': !isPrimary && type === 'link',
    'bg-palatinate-blue text-white opacity-75 cursor-wait': !isPrimary && disabled,
  });

  if (type === 'link' && isExternal) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={`${buttonClassNames}`}>
        {children}
      </a>
    );
  }

  if (type === 'link' && !isExternal) {
    return (
      <Link tabIndex={0} href={href} className={`${buttonClassNames}`}>
        {children}
      </Link>
    );
  }

  return (
    <button
      disabled={disabled}
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={() => onClick?.()}
      className={`${buttonClassNames}`}
    >
      {children}
    </button>
  );
}
