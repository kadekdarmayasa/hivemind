import ContactInformation from "components/ContactInformation"
import { ContactInformationProps } from "types/ContactInformation";
import { Input, Textarea } from "components/Form";
import { ChangeEvent, useState } from "react";
import Button from "components/Button";
import { IoSendOutline } from "react-icons/io5";
import { IconContext } from "react-icons";

export default function GetInTouch({ contactInformations }: { contactInformations: ContactInformationProps[] }): JSX.Element {
  const [inputValue, setInputValue] = useState({ name: '', email: '', message: '' })

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue({
      ...inputValue,
      [event.target.name]: event.target.value
    })
  }

  return (
    <section className="mt-14">
      <div className="text-center">
        <h1 className="heading-1">Get In Touch With Us</h1>
        <p className="text-brave-purple font-light text-lg leading-9 mt-3">
          Have a question or comment? We're here to help! <br />
          Reach out to us using the contact information below.
        </p>
      </div>

      <div className="bg-white h-auto shadow-black-lg rounded-xl mt-10 px-10 py-12 overflow-hidden items-center flex">
        <div className="flex-1 w-[50%] ">
          {contactInformations.map(contactInformation => (
            <ContactInformation key={contactInformation._id} contactInformation={contactInformation} />
          ))}
        </div>
        <form className="flex-1 w-[50%] ps-10 border-l-2  border-l-[#E8EAFF]">
          <Input labelText="Name" type="text" name="name" id="name" value={inputValue.name} onChange={onChange} placeHolder="Enter your name..." outerClassNames={["mb-8"]} />

          <Input labelText="Email" type="email" name="email" id="email" value={inputValue.email} onChange={onChange} placeHolder="Enter your email..." />

          <Textarea labelText="Message" name="message" id="message" value={inputValue.message} placeHolder="Enter your question..." outerClassNames={['mt-8']} onChange={onChange} />

          <Button isPrimary type="submit" classNames={['h-14 mt-10 w-[230px] rounded-full group']}>
            <small className="text-lg">Send message</small>
            <IconContext.Provider value={{ size: '1.3em', className: "mt-[2px] ms-2 group-hover:ms-3 transition-all" }}>
              <IoSendOutline />
            </IconContext.Provider>
          </Button>
        </form>
      </div>
    </section>
  )
} 