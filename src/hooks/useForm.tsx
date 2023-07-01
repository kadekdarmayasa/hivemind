import { useState, ChangeEvent } from 'react';

export function useForm() {
  const [inputValue, setInputValue] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue((prevProps) => ({ ...prevProps, [e.target.name]: e.target.value }));
  };

  return { inputValue, setInputValue, handleInputChange };
}
