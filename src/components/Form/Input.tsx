import { ChangeEvent, FocusEvent, useState } from 'react';
import { InputHelper } from '@utils/input_helper';
import type { InputType } from 'types/InputType';

type InputProps = {
  type: InputType;
  labelText?: string;
  name: string;
  id: string;
  value: string;
  placeHolder?: string;
  className?: string;
  showErrorMessage?: boolean;
  parentClassName?: string;
  onChange?: (data: object) => void;
  onFocus?: () => void;
  onBlur?: () => void;
};

export default function Input(props: InputProps) {
  const {
    type,
    labelText,
    name,
    id,
    value,
    placeHolder,
    className,
    showErrorMessage,
    parentClassName,
    onChange,
    onFocus,
    onBlur,
  } = props;

  const [hasError, setHasError] = useState(false);
  const { validateInput, errorMessage } = InputHelper;

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
    setHasError(!isValid);
  };

  const getErrorMessage = () => {
    if (hasError && type === 'email' && labelText === 'Email') {
      return errorMessage.email;
    }

    if (hasError && type === 'text' && labelText === 'Name') {
      return errorMessage.text(labelText);
    }
  };

  const commonInputProps = {
    type,
    name,
    id,
    placeholder: placeHolder,
    value,
    className,
    onChange: handleChange,
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
          onFocus={handleFocus}
          className={`${className} ${hasError ? 'border-red-400' : 'border-none'}`}
        />

        {hasError && (
          <small className="mt-2 font-light text-sm text-red-400" data-testid="errorMessage">
            {getErrorMessage()}
          </small>
        )}
      </div>
    );
  }

  return <input {...commonInputProps} onFocus={onFocus} />;
}
