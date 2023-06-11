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
    text: (name: string) => `${name} cannot be empty`,
    default: 'The field cannot be empty',
  },

  validateInput(type: InputType, value: string) {
    if (type === 'email') {
      return EMAIL_REGEX.test(value);
    }
    return value !== '';
  },
};
