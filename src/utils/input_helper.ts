type InputHelperProps = {
  validator?: {
    email?: RegExp,
    tel?: RegExp,
  },

  errorMessage?: {
    email: string,
    text: (name: string) => string
  }
}

export const InputHelper: InputHelperProps = {
  validator: {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    tel: /[0-9]*/,
  },

  errorMessage: {
    email: 'Please enter email in a valid format',
    text: (name: string) => `${name} cannot be empty`,
  },
};
