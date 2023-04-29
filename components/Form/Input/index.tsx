import { ChangeEvent, FocusEvent, useState } from "react";

export default function Input(props: InputProps): JSX.Element {
  let { type, labelText, name, id, placeHolder, value, errorMessage, outerClassNames = [] } = props;
  const [hasError, setHasError] = useState<boolean>(false);
  let pattern: RegExp;

  outerClassNames.push('flex', 'flex-col');

  if (type === 'email') pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (type === 'tel') pattern = /[0-9]*/;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = {
      target: {
        name: name,
        value: event.target.value
      }
    }

    if (type === 'email') {
      !pattern.test(event.target.value) ? setHasError(true) : setHasError(false);
      props.onChange(target);
    } else {
      event.target.value === '' ? setHasError(true) : setHasError(false);
      props.onChange(target);
    }
  }

  const onBlur = () => {
    setHasError(false);
  }

  const onFocus = (event: FocusEvent<HTMLInputElement>) => {
    if (type === 'email') {
      !pattern.test(event.target.value) ? setHasError(true) : setHasError(false);
    } else {
      event.target.value === '' ? setHasError(true) : setHasError(false);
    }
  }

  if (hasError && type === 'email' && labelText === 'Email') errorMessage = "Please enter email in a valid format";
  if (hasError && type === 'text' && labelText === 'Name') errorMessage = "Name cannot be empty";

  return (
    <div className={`${outerClassNames.join(' ')}`}>
      <label htmlFor={id} className="heading-4 mb-3">{labelText}</label>

      <input type={type} name={name} id={id} placeholder={placeHolder} value={value} onChange={onChange} onBlur={onBlur} onFocus={onFocus} className={`bg-[#F2F3FF] placeholder:text-brave-purple h-14 px-5 rounded-lg text-coarse-wool text-lg font-light border-2 outline-none ${hasError ? 'border-red-400' : 'border-none'} transition-all`} autoComplete="off" required />

      {hasError && (<small className="mt-2 font-light text-sm text-red-400">
        {errorMessage}
      </small>)}
    </div>
  )
}

type InputProps = {
  type: InputTypes,
  labelText: string,
  name: string,
  id: string,
  value: string,
  placeHolder?: string,
  errorMessage?: string,
  outerClassNames?: string[],
  onChange?: (data: object) => void
}

type InputTypes = 'text' | 'email' | 'tel';