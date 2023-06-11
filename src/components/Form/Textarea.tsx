import { ChangeEvent, FocusEvent, useState } from 'react';
import { InputHelper } from '@utils/input_helper';

type TextAreaProps = {
  labelText: string;
  name: string;
  id: string;
  value: string;
  placeHolder?: string;
  parentClassName?: string;
  onChange?: (data: object) => void;
};

export default function Textarea({
  labelText,
  name,
  id,
  value,
  parentClassName,
  placeHolder,
  onChange,
}: TextAreaProps): JSX.Element {
  const [hasError, setHasError] = useState<boolean>(false);
  const { validateInput, errorMessage } = InputHelper;

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const isValid = validateInput('textarea', event.target.value);

    setHasError(!isValid);
    onChange?.({
      target: {
        name,
        value: event.target.value,
      },
    });
  };

  const handleFocus = (event: FocusEvent<HTMLTextAreaElement>) => {
    const isValid = validateInput('textarea', event.target.value);

    setHasError(!isValid);
  };

  return (
    <div className={`flex flex-col ${parentClassName}`}>
      <label htmlFor={id} className="heading-4 mb-3">
        {labelText}
      </label>

      <textarea
        name={name}
        id={id}
        onChange={handleChange}
        onBlur={() => setHasError(false)}
        onFocus={handleFocus}
        className={`bg-[#F2F3FF] placeholder:text-brave-purple h-36 px-5 py-3 rounded-lg text-coarse-wool 
        text-lg font-light border-2 outline-none resize-none ${
          hasError ? 'border-red-400' : 'border-none'
        } 
        transition-all`}
        autoComplete="off"
        required
        placeholder={placeHolder}
        value={value}
      />

      {hasError && (
        <small className="mt-2 font-light text-sm text-red-400">
          {errorMessage.text(labelText)}
        </small>
      )}
    </div>
  );
}
