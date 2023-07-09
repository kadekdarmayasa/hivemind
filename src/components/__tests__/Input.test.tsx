import { fireEvent, render, screen } from '@testing-library/react';
import { Input } from '@components/common/Form';
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

test('input text should have classname of border-red-400 when user type space or empty string', () => {
  render(<TestInput type="text" />);

  const inputText = screen.getByRole('textbox');
  fireEvent.change(inputText, { target: { value: ' ' } });
  expect(inputText).toHaveClass('border-red-400');
});

test('should show the error message when user type space or empty string', () => {
  render(<TestInput type="text" />);

  const inputText = screen.getByRole('textbox');
  fireEvent.change(inputText, { target: { value: ' ' } });

  const errorMessageContainer = screen.getByTestId('errorMessage');
  expect(errorMessageContainer).toBeInTheDocument();
  expect(errorMessageContainer).toHaveTextContent('Please enter a valid name');
});

test('input text should not have classname of border-red-400 when user type valid string', () => {
  render(<TestInput type="text" />);

  const inputText = screen.getByRole('textbox');
  fireEvent.change(inputText, { target: { value: 'Kadek Darmayasa' } });
  expect(inputText).not.toHaveClass('border-red-400');
});

test('should hide the error message when user type valid string', () => {
  render(<TestInput type="text" />);

  const inputText = screen.getByRole('textbox');
  fireEvent.change(inputText, { target: { value: 'Kadek Darmayasa' } });

  const errorMessageContainer = screen.queryByTestId('errorMessage');
  expect(errorMessageContainer).not.toBeInTheDocument();
});

test('input email should have classname of border-red-400 when user type invalid email', () => {
  render(<TestInput type="email" />);

  const emailInput = screen.getByRole('textbox');
  fireEvent.change(emailInput, { target: { value: 'kadekdarmayasa@' } });
  expect(emailInput).toHaveClass('border-red-400');
});

test('input email should not have classname of border-red-400 when user type valid email', () => {
  render(<TestInput type="email" />);

  const emailInput = screen.getByRole('textbox');
  fireEvent.change(emailInput, { target: { value: 'darmayasadiputra@gmail.com' } });
  expect(emailInput).not.toHaveClass('border-red-400');
});

test('should show the error message when user type invalid email', () => {
  render(<TestInput type="email" />);

  const emailInput = screen.getByRole('textbox');
  fireEvent.change(emailInput, { target: { value: 'kadekdarmayasa@' } });

  const errorMessageContainer = screen.getByTestId('errorMessage');
  expect(errorMessageContainer).toBeInTheDocument();
  expect(errorMessageContainer).toHaveTextContent('Please enter email in a valid format');
});

test('should hide the error message when user type valid email', () => {
  render(<TestInput type="email" />);

  const emailInput = screen.getByRole('textbox');
  fireEvent.change(emailInput, { target: { value: 'darmayasadiputra@gmail.com' } });
  expect(emailInput).not.toHaveClass('border-red-400');
});
