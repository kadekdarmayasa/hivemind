import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { ChangeEvent, FormEvent, useState } from 'react';

export const useForm = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [inputValue, setInputValue] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue((prevProps) => ({ ...prevProps, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const { currentTarget } = e;

      const response: EmailJSResponseStatus = await emailjs.sendForm(
        'service_2pnfp18',
        'template_ushp53d',
        currentTarget,
        'lqP46IkwDTQI1otnI',
      );

      setIsSuccessful(response?.status === 200);
    } catch (_) {
      setIsSuccessful(false);
    }

    setInputValue((prevProps) => ({ ...prevProps, name: '', email: '', message: '' }));
    setIsSending(false);
  };

  return { inputValue, isSending, handleInputChange, handleFormSubmit, isSuccessful };
};
