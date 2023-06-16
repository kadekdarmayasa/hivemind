import { ChangeEvent, FormEvent, useState, useMemo } from 'react';
import { MotionProps, motion } from 'framer-motion';
import { fadeVariants, transformVariants } from '@utils/motion/variants';
import { IconContext } from 'react-icons';
import { IoSendOutline, IoCheckmarkCircleOutline, IoAlertCircleOutline } from 'react-icons/io5';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import type { AlertProps } from 'types/AlertProps';
import { Alert } from '@material-tailwind/react';
import Button from '@components/Button';
import { Input, Textarea } from '@components/Form';
import type { ContactInformationProps } from 'types/ContactInformation';
import ContactInformation from './ContactInformation';

export default function GetInTouch({
  contactInformations,
}: {
  contactInformations: ContactInformationProps[];
}): JSX.Element {
  const commonMotionProps: MotionProps = {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true },
  };

  const [inputValue, setInputValue] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSending, setIsSending] = useState(false);

  const [alert, setAlert] = useState<AlertProps>({
    show: false,
    icon: null,
    message: '',
    type: 'success',
  });

  const alertIconProps: IconContext = useMemo(
    () => ({
      size: '25px',
      className: `${alert.type === 'failed' ? 'text-red-600' : 'text-rare-wind'}`,
    }),
    [alert.type],
  );

  const sendIconProps: IconContext = useMemo(
    () => ({ size: '1.3em', className: 'mt-[2px] ms-2' }),
    [],
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const response: EmailJSResponseStatus = await emailjs.sendForm(
        'service_2pnfp18',
        'template_ushp53d',
        e.currentTarget,
        'lqP46IkwDTQI1otnI',
      );

      if (response.status === 200) {
        setAlert({
          ...alert,
          show: true,
          icon: <IoCheckmarkCircleOutline />,
          message: 'Your message has been sent successfully.',
          type: 'success',
        });
      } else {
        setAlert({
          ...alert,
          show: true,
          icon: <IoAlertCircleOutline />,
          message: 'Oops! something went wrong. Try again later.',
          type: 'failed',
        });
      }
    } catch (_) {
      setAlert({
        ...alert,
        show: true,
        icon: <IoAlertCircleOutline />,
        message: 'Oops! something went wrong. Try again later.',
        type: 'failed',
      });
    }

    setInputValue({ name: '', email: '', message: '' });
    setIsSending(false);
  };

  return (
    <motion.section {...commonMotionProps} variants={fadeVariants('linear')} className="mt-14">
      <motion.div {...commonMotionProps} variants={fadeVariants('linear')} className="text-center">
        <motion.h1
          {...commonMotionProps}
          variants={transformVariants('linear')}
          className="heading-1"
        >
          Get In Touch With Us
        </motion.h1>

        <motion.p
          {...commonMotionProps}
          variants={transformVariants('linear')}
          custom={1}
          className="text-brave-purple font-normal text-lg leading-9 mt-3"
        >
          Have a question or comment? We&apos;re here to help!
          <br />
          Reach out to us using the contact information below.
        </motion.p>
      </motion.div>

      <motion.div
        {...commonMotionProps}
        variants={fadeVariants('linear')}
        className="bg-white h-auto shadow-black-lg rounded-xl mt-10 px-10 py-12 overflow-hidden items-center flex flex-col lg:flex-row"
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
          onSubmit={handleSubmit}
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
            } text-coarse-wool border-l-2  rounded-l-none`}
          >
            {alert.message}
          </Alert>

          <Input
            labelText="Name"
            type="text"
            name="name"
            id="name"
            value={inputValue.name}
            onChange={handleChange}
            placeHolder="Enter your name..."
            showErrorMessage
            parentClassName="mb-8 flex flex-col"
            className="bg-[#F2F3FF] placeholder:text-brave-purple h-14 px-5 rounded-lg text-coarse-wool text-lg
            font-light border-2 outline-none transition-all"
          />

          <Input
            labelText="Email"
            type="email"
            name="email"
            id="email"
            value={inputValue.email}
            onChange={handleChange}
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
            onChange={handleChange}
          />

          <Button
            isPrimary
            type="submit"
            className="h-14 mt-10 w-[230px] rounded-full hover:shadow-purple-md focus:shadow-purple-md"
          >
            {isSending ? (
              <>
                <div className="flex items-center justify-center mr-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white" />
                </div>
                <small className="text-lg">Sending...</small>
              </>
            ) : (
              <>
                <small className="text-lg">Send message</small>
                <IconContext.Provider value={sendIconProps}>
                  <IoSendOutline />
                </IconContext.Provider>
              </>
            )}
          </Button>
        </motion.form>
      </motion.div>
    </motion.section>
  );
}
