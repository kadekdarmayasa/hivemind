import React, { ChangeEvent, FocusEvent, useState } from 'react';

type TextAreaProps = {
  labelText: string,
  name: string,
  id: string,
  value: string,
  placeHolder?: string,
  outerClassNames?: string[],
  onChange?: (data: object) => void
}

export default function Textarea(props: TextAreaProps) {
  const {
    labelText,
    name,
    id,
    value,
    outerClassNames = [],
    placeHolder,
  } = props;
  const [hasError, setHasError] = useState<boolean>(false);
  let errorMessage: string;

  outerClassNames.push('flex', 'flex-col');

  /* eslint-disable no-unused-expressions */
  /* eslint-disable react/destructuring-assignment */
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.target.value === '' ? setHasError(true) : setHasError(false);

    props.onChange({
      target: {
        name,
        value: event.target.value,
      },
    });
  };

  const handleFocus = (event: FocusEvent<HTMLTextAreaElement>) => {
    event.target.value === '' ? setHasError(true) : setHasError(false);
  };

  if (hasError) errorMessage = 'Message cannot be empty';

  return (
    <div className={`${outerClassNames.join(' ')}`}>
      <label htmlFor={id} className="heading-4 mb-3">{labelText}</label>

      <textarea
        name={name}
        id={id}
        onChange={handleChange}
        onBlur={() => setHasError(false)}
        onFocus={handleFocus}
        className={`bg-[#F2F3FF] placeholder:text-brave-purple h-36 px-5 py-3 rounded-lg text-coarse-wool 
        text-lg font-light border-2 outline-none resize-none ${hasError ? 'border-red-400' : 'border-none'} 
        transition-all`}
        autoComplete="off"
        required
        placeholder={placeHolder}
        value={value}
      />

      {hasError && (
        <small className="mt-2 font-light text-sm text-red-400">
          {errorMessage}
        </small>
      )}
    </div>
  );
}
