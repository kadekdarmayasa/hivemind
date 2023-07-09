import classNames from 'classnames';

type ButtonProps = {
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  isPrimary?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
};

export default function Button(props: ButtonProps) {
  const { className, onClick, type = 'button', isPrimary, children, disabled } = props;

  const buttonClassNames = classNames(className, {
    'flex justify-center items-center': true,
    'bg-palatinate-blue shadow-purple-sm text-white': isPrimary,
    'text-coarse-wool': !isPrimary && type === 'button' && !disabled,
    'bg-palatinate-blue text-white opacity-75 cursor-wait': !isPrimary && disabled,
  });

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
