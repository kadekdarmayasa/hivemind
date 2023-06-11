import { ChangeEvent, FocusEvent, useState } from 'react';
import { InputHelper } from '@utils/input_helper';

type InputProps = {
  type: 'text' | 'email' | 'tel';
  labelText?: string;
  name: string;
  id: string;
  value: string;
  placeHolder?: string;
  className?: string;
  showErrorMessage?: boolean;
  parentClassName?: string;
  onChange?: (data: object) => void;
  onBlur?: () => void;
};

const validateInput = (inputType: string, inputValue: string): boolean => {
  if (inputType === 'email') return InputHelper.validator.email.test(inputValue);
  return inputValue !== '';
};

export default function Input(props: InputProps) {
  const {
    type,
    labelText,
    name,
    id,
    placeHolder,
    value,
    showErrorMessage,
    parentClassName,
    className,
    onChange,
    onBlur,
  } = props;

  const [hasError, setHasError] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const isValid = validateInput(type, event.target.value);

    setHasError(!isValid);
    onChange?.({
      target: {
        name,
        value: event.target.value,
      },
    });
  };

  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    const isValid = validateInput(type, event.target.value);

    showErrorMessage && setHasError(!isValid);
  };

  const getErrorMessage = () => {
    if (hasError && type === 'email' && labelText === 'Email') {
      return InputHelper.errorMessage.email;
    }

    if (hasError && type === 'text' && labelText === 'Name') {
      return InputHelper.errorMessage.text(labelText);
    }
  };

  const showError = showErrorMessage && hasError;
  const errorMessage = showError ? getErrorMessage() : undefined;

  const commonInputProps = {
    type,
    name,
    id,
    placeholder: placeHolder,
    value,
    className,
    onChange: handleChange,
    onFocus: handleFocus,
    onBlur: () => onBlur(),
    autoComplete: 'off',
    required: true,
  };

  if (labelText && showErrorMessage) {
    return (
      <div className={`${parentClassName}`}>
        <label htmlFor={id} className="heading-4 mb-3">
          {labelText}
        </label>

        <input
          {...commonInputProps}
          onBlur={() => setHasError(false)}
          className={`${className} ${hasError ? 'border-red-400' : 'border-none'}`}
        />

        {hasError && (
          <small className="mt-2 font-light text-sm text-red-400" data-testid="errorMessage">
            {errorMessage}
          </small>
        )}
      </div>
    );
  }

  return <input {...commonInputProps} />;
}
