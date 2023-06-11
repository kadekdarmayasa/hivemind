import Link from 'next/link';

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
  const classNames = ['flex', 'justify-content-center', 'items-center'];

  if (isPrimary) {
    classNames.push('bg-palatinate-blue', 'shadow-purple-sm', 'text-white');
  } else {
    switch (type) {
      case 'button':
        classNames.push('text-coarse-wool');
        break;
      case 'link':
        classNames.push('bg-transparent', 'text-palatinate-blue');
        break;
    }
  }

  if (type === 'link') {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className={`${className} ${classNames.join(' ')}`}
        >
          {children}
        </a>
      );
    }

    return (
      <Link tabIndex={0} href={href} className={`${className} ${classNames.join(' ')}`}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={() => onClick?.()}
      className={`${className} ${classNames.join(' ')}`}
    >
      {children}
    </button>
  );
}
