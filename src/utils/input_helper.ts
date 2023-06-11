const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TEL_REGEX = /[0-9]*/;

type InputHelperProps = {
  validator?: {
    email?: RegExp;
    tel?: RegExp;
  };

  errorMessage?: {
    email: string;
    text: (name: string) => string;
    default: string;
  };
};

export const InputHelper: InputHelperProps = {
  validator: {
    email: EMAIL_REGEX,
    tel: TEL_REGEX,
  },

  errorMessage: {
    email: 'Please enter email in a valid format',
    text: (name: string) => `${name} cannot be empty`,
    default: 'The field cannot be empty',
  },
};
