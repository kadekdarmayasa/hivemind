import { ChangeEvent, FocusEvent, useState } from "react";

export default function Textarea(props: TextAreaProps) {
  const { labelText, name, id, value, outerClassNames = [], placeHolder } = props;
  const [hasError, setHasError] = useState<boolean>(false);
  let errorMessage: string;

  outerClassNames.push('flex', 'flex-col');

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.target.value === "" ? setHasError(true) : setHasError(false);

    props.onChange({
      target: {
        name: name,
        value: event.target.value
      }
    });
  }

  const onBlur = () => {
    setHasError(false);
  }

  const onFocus = (event: FocusEvent<HTMLTextAreaElement>) => {
    event.target.value === '' ? setHasError(true) : setHasError(false);
  }

  if (hasError) errorMessage = "Message cannot be empty";

  return (
    <div className={`${outerClassNames.join(" ")}`}>
      <label htmlFor={id} className="heading-4 mb-3">{labelText}</label>

      <textarea name={name} id={id} onChange={handleChange} onBlur={onBlur} onFocus={onFocus} className={`bg-[#F2F3FF] placeholder:text-brave-purple h-36 px-5 py-3 rounded-lg text-coarse-wool text-lg font-light border-2 outline-none resize-none ${hasError ? 'border-red-400' : 'border-none'} transition-all`} autoComplete="off" required placeholder={placeHolder} value={value}></textarea>

      {hasError && (<small className="mt-2 font-light text-sm text-red-400">
        {errorMessage}
      </small>)}
    </div>
  )
}

type TextAreaProps = {
  labelText: string,
  name: string,
  id: string,
  value: string,
  placeHolder?: string,
  outerClassNames?: string[],
  onChange?: (data: object) => void
}