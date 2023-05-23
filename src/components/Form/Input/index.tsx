import { ChangeEvent, FocusEvent, useState } from "react";
import { InputHelper } from "@utils/input_helper";

export default function Input(props: InputProps): JSX.Element {
  const { type, labelText, name, id, placeHolder, value } = props;
  const { parentClassName, className } = props;
  let { showErrorMessage, errorMessage } = props;
  const [hasError, setHasError] = useState(false);
  let valid: RegExp;

  if (type === 'email') valid = InputHelper.validator.email;
  if (type === 'tel') valid = InputHelper.validator.tel;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = {
      target: {
        name: name,
        value: event.target.value
      }
    }

    if (type === 'email') {
      valid.test(event.target.value) ? setHasError(false) : setHasError(true);
      props.onChange(target);
    } else {
      event.target.value === '' ? setHasError(true) : setHasError(false);
      props.onChange(target);
    }
  }

  const onFocus = (event: FocusEvent<HTMLInputElement>) => {
    if (type === 'email') {
      valid.test(event.target.value) ? setHasError(false) : setHasError(true);
    } else {
      event.target.value === '' ? setHasError(true) : setHasError(false);
    }
  }

  if (hasError && type === 'email' && labelText === 'Email') errorMessage = InputHelper.errorMessage.email;
  if (hasError && type === 'text' && labelText === 'Name') errorMessage = InputHelper.errorMessage.text(labelText);

  if (labelText && showErrorMessage) {
    return (
      <div className={`${parentClassName}`}>
        <label
          htmlFor={id}
          className='heading-4 mb-3'
        >
          {labelText}
        </label>

        <input
          type={type}
          name={name}
          id={id}
          placeholder={placeHolder}
          value={value}
          onChange={handleChange}
          onBlur={() => setHasError(false)}
          onFocus={onFocus}
          className={`${className} ${hasError ? 'border-red-400' : 'border-none'}`}
          autoComplete="off"
          required
        />

        {hasError && (<small className="mt-2 font-light text-sm text-red-400">
          {errorMessage}
        </small>)}
      </div>
    )
  } else {
    return (
      <input type={type} name={name} id={id} onChange={handleChange} placeholder={placeHolder} value={value} className={`${className}`} autoComplete="off" required />
    )
  }
}

type InputProps = {
  type: InputTypes,
  labelText?: string,
  name: string,
  id: string,
  value: string,
  placeHolder?: string,
  errorMessage?: string,
  className?: string,
  showErrorMessage?: boolean,
  parentClassName?: string,
  onChange?: (data: object) => void
}

type InputTypes = 'text' | 'email' | 'tel';