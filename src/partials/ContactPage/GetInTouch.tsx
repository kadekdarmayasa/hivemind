import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { IconContext } from 'react-icons';
import {
  IoSendOutline,
  IoMailOutline,
  IoCallOutline,
  IoTimeOutline,
  IoLocationOutline,
} from 'react-icons/io5';
import { Alert } from '@material-tailwind/react';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { useAlert } from '@hooks/useAlert';
import { useForm } from '@hooks/useForm';
import { fadeVariants, transformVariants, commonMotionProps } from '@utils/motion';
import type { ContactInformationProps } from 'types/ContactInformation';
import Button from '@components/Button';
import { Input, Textarea } from '@components/Form';
import ContactInformation from './ContactInformation';

const contactInformations: ContactInformationProps[] = [
  {
    id: 12212,
    icon: <IoMailOutline />,
    name: 'Email',
    value: 'info@hivemind.com',
  },
  {
    id: 12213,
    icon: <IoCallOutline />,
    name: 'Telp',
    value: '(555) 123-4567',
  },
  {
    id: 12214,
    icon: <IoTimeOutline />,
    name: 'Business Hours',
    value: 'Monday - Friday, 9.00am - 5.00pm WITA',
  },
  {
    id: 12215,
    icon: <IoLocationOutline />,
    name: 'Address',
    value: '123 Main st, Suite 500, Bali, Indonesia',
  },
];

const sendIconProps: IconContext = { size: '1.3em', className: 'mt-[2px] ms-2' };

export default function GetInTouch() {
  const { inputValue, setInputValue, handleInputChange } = useForm();
  const { alert, setAlert, setAlertState, alertIconProps } = useAlert();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async ({ formElement }: { formElement: HTMLFormElement }) => {
    try {
      const response: EmailJSResponseStatus = await emailjs.sendForm(
        'service_2pnfp18',
        'template_ushp53d',
        formElement,
        'lqP46IkwDTQI1otnI',
      );

      const isSuccessful = response?.status === 200;
      setAlertState(isSuccessful ? 'success' : 'failed');
    } catch (_) {
      setAlertState('failed');
    }
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    await sendEmail({ formElement: e.currentTarget });
    setInputValue((prevProps) => ({ ...prevProps, name: '', email: '', message: '' }));
    setIsSending(false);
  };

  return (
    <motion.section {...commonMotionProps} variants={fadeVariants('linear')} className="mt-14">
      <motion.div {...commonMotionProps} variants={fadeVariants('linear')} className="text-center">
        <motion.h1
          {...commonMotionProps}
          variants={transformVariants('linear')}
          className="heading-2 sm:heading-1"
        >
          Get In Touch With Us
        </motion.h1>

        <motion.p
          {...commonMotionProps}
          variants={transformVariants('linear')}
          custom={1}
          className="text-brave-purple font-normal text-lg leading-9 mt-3 w-full sm:w-[500px] mx-auto"
        >
          Have a question or comment? We&apos;re here to help! Reach out to us using the contact
          information below.
        </motion.p>
      </motion.div>

      <motion.div
        {...commonMotionProps}
        variants={fadeVariants('linear')}
        className="bg-white h-auto shadow-black-lg rounded-xl mt-10 px-8 sm:px-10 py-12 overflow-hidden items-center flex flex-col lg:flex-row"
      >
        <motion.div
          {...commonMotionProps}
          variants={fadeVariants('linear')}
          className="flex-1 lg:w-[50%] w-full order-2 lg:order-1 pt-5 lg:pt-0"
        >
          {contactInformations.map((contactInformation) => (
            <ContactInformation
              key={contactInformation.id}
              contactInformation={contactInformation}
            />
          ))}
        </motion.div>

        <motion.form
          {...commonMotionProps}
          variants={fadeVariants('linear')}
          className="flex-1 lg:w-[50%] lg:order-2 w-full lg:ps-10 lg:border-l-2  lg:border-l-[#E8EAFF] border-b-2 border-b-[#E8EAFF] pb-10 lg:pb-0 lg:border-b-0 lg:border-b-transparent"
          onSubmit={handleFormSubmit}
          method="post"
        >
          <Alert
            show={alert.show}
            icon={<IconContext.Provider value={alertIconProps}>{alert.icon}</IconContext.Provider>}
            dismissible={{
              onClose: () => setAlert({ ...alert, show: false }),
            }}
            className={`mb-10 ${
              alert.type === 'failed'
                ? 'bg-red-600/10 border-l-red-600'
                : 'bg-rare-wind/10 border-l-rare-wind'
            } text-coarse-wool border-l-2 rounded-l-none`}
          >
            {alert.message}
          </Alert>

          <Input
            labelText="Name"
            type="text"
            name="name"
            id="name"
            value={inputValue.name}
            onChange={handleInputChange}
            placeHolder="Enter your name..."
            showErrorMessage
            parentClassName="mb-8 flex flex-col w-full"
            className="bg-[#F2F3FF] placeholder:text-brave-purple h-14 px-5 rounded-lg text-coarse-wool text-lg
            font-light border-2 outline-none transition-all"
          />

          <Input
            labelText="Email"
            type="email"
            name="email"
            id="email"
            value={inputValue.email}
            onChange={handleInputChange}
            placeHolder="Enter your email..."
            showErrorMessage
            parentClassName="mb-8 flex flex-col"
            className="bg-[#F2F3FF] placeholder:text-brave-purple h-14 px-5 rounded-lg text-coarse-wool text-lg
            font-light border-2 outline-none transition-all"
          />

          <Textarea
            labelText="Message"
            name="message"
            id="message"
            value={inputValue.message}
            placeHolder="Enter your question..."
            parentClassName="mt-8"
            onChange={handleInputChange}
          />

          {isSending ? (
            <Button disabled type="button" className="h-14 mt-10 w-[230px] rounded-full">
              <div className="flex items-center justify-center mr-2">
                <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white" />
              </div>
              <small className="text-lg">Sending...</small>
            </Button>
          ) : (
            <Button
              isPrimary
              type="submit"
              className="h-14 mt-10 w-[230px] rounded-full hover:shadow-purple-md focus:shadow-purple-md"
            >
              <small className="text-lg">Send message</small>
              <IconContext.Provider value={sendIconProps}>
                <IoSendOutline />
              </IconContext.Provider>
            </Button>
          )}
        </motion.form>
      </motion.div>
    </motion.section>
  );
}
