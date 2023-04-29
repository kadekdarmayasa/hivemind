import { fireEvent, render, queries } from '@testing-library/react';
import Input from './index';
import { ChangeEvent, useState } from 'react';

function TestInput({ type }: { type: "text" | "email" }) {
  const [inputValue, setInputValue] = useState({ name: '', email: '', })

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue({
      ...inputValue,
      [event.target.name]: event.target.value
    })
  }

  if (type === 'text') {
    return (
      <Input labelText="Name" type="text" name="name" id="name" value={inputValue.name} onChange={onChange} placeHolder="Enter your name..." outerClassNames={["mb-8"]} />
    )
  } else {
    return (
      <Input labelText="Email" type="email" name="email" id="email" value={inputValue.email} onChange={onChange} placeHolder="Enter your email..." />
    )
  }
}

test('The error of input text should contains style of border red and error message', () => {
  const { container } = render(<TestInput type='text' />);
  const textInput = container.querySelector('input[type=text]');

  expect(textInput).toBeInTheDocument();

  fireEvent.change(textInput, { target: { value: 'Kadek Darmayasa' } });
  fireEvent.change(textInput, { target: { value: '' } });

  expect(textInput).toHaveClass('border-red-400');

  const errorMessageContainer = container.querySelector('small');

  expect(errorMessageContainer).toBeInTheDocument();
  expect(errorMessageContainer).toHaveTextContent("Name cannot be empty")
});

test('The error of input email should contains style of border red and error message', () => {
  const { container } = render(<TestInput type='email' />);
  const emailInput = container.querySelector('input[type=email]');

  expect(emailInput).toBeInTheDocument();

  fireEvent.change(emailInput, { target: { value: 'kadekdarmayasa@' } });

  expect(emailInput).toHaveClass('border-red-400');

  const errorMessageContainer = container.querySelector('small');

  expect(errorMessageContainer).toBeInTheDocument();
  expect(errorMessageContainer).toHaveTextContent("Please enter email in a valid format")
})