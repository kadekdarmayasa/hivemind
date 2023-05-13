import ContactInformation from "components/ContactPage/ContactInformation"
import type { ContactInformationProps } from "types/ContactInformation";
import { Input, Textarea } from "components/Form";
import { ChangeEvent, FormEvent, useState } from "react";
import Button from "components/Button";
import { IoSendOutline, IoCheckmarkCircleOutline, IoAlertCircleOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { Alert } from "@material-tailwind/react";
import type { AlertProps } from "types/AlertProps";
import Fade from 'react-reveal/Fade';
import { useAppSelector } from "redux/hooks";
import { selectedStatus } from "redux/slices/dropdownSlice";

export default function GetInTouch({ contactInformations }: { contactInformations: ContactInformationProps[] }): JSX.Element {
  const status = useAppSelector(selectedStatus);
  const [inputValue, setInputValue] = useState({ name: '', email: '', message: '' });
  const [alert, setAlert] = useState<AlertProps>({ show: false, icon: null, message: '', type: 'success' });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  }

  const handleSubmit = async function (e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const response: EmailJSResponseStatus = await emailjs.sendForm('service_2pnfp18', 'template_ushp53d', e.currentTarget, 'lqP46IkwDTQI1otnI');

    response.status === 200 ? setAlert({
      ...alert,
      show: true,
      icon: <IoCheckmarkCircleOutline />,
      message: 'Your message has been sent successfully.',
      type: 'success'
    }) : setAlert({
      ...alert,
      show: true,
      icon: <IoAlertCircleOutline />,
      message: 'Oops! something went wrong. Try again later.',
      type: 'failed'
    });

    setInputValue({ name: '', email: '', message: '' });
  }

  return (
    <section className={`relative ${status === 'open' ? '-z-10' : 'z-0'} mt-14`}>
      <div className="text-center">
        <Fade up>
          <h1 className="heading-1">Get In Touch With Us</h1>
        </Fade>
        <Fade up delay={300}>
          <p className="text-brave-purple font-normal text-lg leading-9 mt-3">
            Have a question or comment? We're here to help! <br />
            Reach out to us using the contact information below.
          </p>
        </Fade>
      </div>

      <Fade>
        <div className="bg-white h-auto shadow-black-lg rounded-xl mt-10 px-10 py-12 overflow-hidden items-center flex">
          <div className="flex-1 w-[50%] ">
            {contactInformations.map(contactInformation => (
              <ContactInformation key={contactInformation._id} contactInformation={contactInformation} />
            ))}
          </div>

          <form className="flex-1 w-[50%] ps-10 border-l-2  border-l-[#E8EAFF]" onSubmit={handleSubmit}>
            <Alert
              show={alert.show}
              icon={
                <IconContext.Provider value={{ size: '25px', className: `${alert.type === 'failed' ? 'text-red-600' : 'text-rare-wind'}` }}>
                  {alert.icon}
                </IconContext.Provider>
              }
              dismissible={{
                onClose: () => setAlert({ ...alert, show: false }),
              }}
              className={`mb-10 ${alert.type === 'failed' ? 'bg-red-600/10 border-l-red-600' : 'bg-rare-wind/10 border-l-rare-wind'} text-coarse-wool border-l-2  rounded-l-none`}
            >
              {alert.message}
            </Alert>

            <Input labelText="Name" type="text" name="name" id="name" value={inputValue.name} onChange={handleChange} placeHolder="Enter your name..." outerClassNames={["mb-8"]} />

            <Input labelText="Email" type="email" name="email" id="email" value={inputValue.email} onChange={handleChange} placeHolder="Enter your email..." />

            <Textarea labelText="Message" name="message" id="message" value={inputValue.message} placeHolder="Enter your question..." outerClassNames={['mt-8']} onChange={handleChange} />

            <Button isPrimary type="submit" classNames={['h-14 mt-10 w-[230px] rounded-full group hover:shadow-purple-md focus:shadow-purple-md']}>
              <small className="text-lg">Send message</small>
              <IconContext.Provider value={{ size: '1.3em', className: "mt-[2px] ms-2 group-hover:ms-3 transition-all" }}>
                <IoSendOutline />
              </IconContext.Provider>
            </Button>
          </form>
        </div>
      </Fade>
    </section>
  )
} 