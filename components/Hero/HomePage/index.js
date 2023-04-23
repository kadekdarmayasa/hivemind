import Image from "next/image";
import Button from "../../Button";

export default function Hero() {
  return (
    <section className="flex mt-14">
      <div className="flex-1 flex flex-col justify-center">
        <small className="label-text">A innovate digital agency</small>
        <h1 className="heading-1">
          Transform Your Online Presence <br />
          with Our Innovate Digital <br />
          Solutions
        </h1>
        <p className="text-brave-purple font-normal text-xl leading-9 mt-2">
          We provide personalized strategies that are tailored to <br />
          your business goals, using cutting-edge technology <br />
          and industry best practices
        </p>
        <div className="flex mt-7">
          <Button type='link' href='/contact' isPrimary classNames='h-[60px] w-[210px] rounded-lg hover:shadow-purple-md transition-all'>
            <Image src='/images/contact.svg' width={30} height={30} alt="chat-box" className="mr-2"></Image>
            <span className="text-lg">Get in Touch</span>
          </Button>
          <Button classNames='h-[60px] w-[210px] ml-6 group'>
            <div className="rounded-xl h-10 w-6 border-palatinate-blue border-[2px] relative flex justify-center mr-4">
              <span className="animate-bounce block w-1 h-3 rounded-lg top-2 bg-palatinate-blue absolute"></span>
            </div>
            <span className="text-lg group-hover:underline underline-offset-8">Scroll to read more</span>
          </Button>
        </div>
      </div>

      <div className="flex-1 flex justify-end">
        <img src="/images/hero-image-1.png" alt="Our Team meeting With Client" className="w-[98%] drop-shadow-purple-sm" />
      </div>
    </section>
  )
}