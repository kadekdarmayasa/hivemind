import Link from 'next/link';
import classNames from 'classnames';

type ButtonProps = {
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'link';
  isExternal?: boolean;
  isPrimary?: boolean;
  href?: string;
  children?: React.ReactNode;
};

export default function Button({
  className = '',
  onClick,
  type = 'button',
  isExternal,
  isPrimary,
  href,
  children,
}: ButtonProps): JSX.Element {
  const buttonClassNames = classNames(className, {
    'flex justify-center items-center': true,
    'bg-palatinate-blue shadow-purple-sm text-white': isPrimary,
    'text-coarse-wool': !isPrimary && type === 'button',
    'bg-transparent text-palatinate-blue': !isPrimary && type === 'link',
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
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={() => onClick?.()}
      className={`${buttonClassNames}`}
    >
      {children}
    </button>
  );
}
