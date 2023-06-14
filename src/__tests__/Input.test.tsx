import { fireEvent, render, screen } from '@testing-library/react';
import { Input } from '@components/Form';
import { ChangeEvent, useState } from 'react';

type TestInputProps = {
  type: 'text' | 'email';
};

function TestInput({ type }: TestInputProps) {
  const [inputValue, setInputValue] = useState({ name: '', email: '' });

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue((prevInputValue) => ({
      ...prevInputValue,
      [event.target.name]: event.target.value,
    }));
  };

  if (type === 'text') {
    return (
      <Input
        labelText="Name"
        type="text"
        name="name"
        id="name"
        value={inputValue.name}
        onChange={onChange}
        placeHolder="Enter your name..."
        parentClassName="mb-8 flex flex-col"
        showErrorMessage
      />
    );
  }

  return (
    <Input
      labelText="Email"
      type="email"
      name="email"
      id="email"
      value={inputValue.email}
      onChange={onChange}
      placeHolder="Enter your email..."
      showErrorMessage
    />
  );
}

test('the error of input text should contain a red border and an error message', () => {
  render(<TestInput type="text" />);

  const textInput = screen.getByRole('textbox');

  expect(textInput).toBeInTheDocument();
  expect(textInput).toHaveAttribute('type', 'text');

  fireEvent.change(textInput, { target: { value: 'Kadek Darmayasa' } });
  fireEvent.change(textInput, { target: { value: '' } });

  expect(textInput).toHaveClass('border-red-400');

  const errorMessageContainer = screen.getByTestId('errorMessage');

  expect(errorMessageContainer).toBeInTheDocument();
  expect(errorMessageContainer).toHaveTextContent('Name cannot be empty');
});

test('the error of input email should contain a red border and an error message', () => {
  render(<TestInput type="email" />);

  const emailInput = screen.getByRole('textbox');

  expect(emailInput).toBeInTheDocument();
  expect(emailInput).toHaveAttribute('type', 'email');

  fireEvent.change(emailInput, { target: { value: 'kadekdarmayasa@' } });

  expect(emailInput).toHaveClass('border-red-400');

  const errorMessageContainer = screen.getByTestId('errorMessage');

  expect(errorMessageContainer).toBeInTheDocument();
  expect(errorMessageContainer).toHaveTextContent('Please enter email in a valid format');
});
