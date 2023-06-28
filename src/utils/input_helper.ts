import type { InputType } from 'types/InputType';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ErrorMessage = {
  email: string;
  text: (name: string) => string;
  default: string;
};

type InputHelperProps = {
  errorMessage?: ErrorMessage;
  validateInput: (type: InputType, value: string) => boolean;
};

export const InputHelper: InputHelperProps = {
  errorMessage: {
    email: 'Please enter email in a valid format',
    text: (name: string) => `Please enter a valid ${name.toLocaleLowerCase()}`,
    default: 'The field cannot be empty',
  },

  validateInput(type: InputType, value: string) {
    if (type === 'email') return EMAIL_REGEX.test(value);
    if (type === 'text' || type === 'textarea') return !!value.trim();
  },
};
