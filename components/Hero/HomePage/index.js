import Image from "next/image";
import Button from "../../Button";

export default function Hero(props) {
  const showOurValues = () => {
    window.scrollTo({
      top: props.refOurValues.current.offsetTop - 50,
      behavior: 'smooth'
    });
  };

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
            <Image src='/images/contact.svg' width={27} height={24} alt="chat-box" className="mr-2"></Image>
            <span className="text-lg">Get in Touch</span>
          </Button>
          <Button classNames='h-[60px] w-[210px] ml-6 group relative' onClick={showOurValues}>
            <div className="rounded-xl h-8 w-5 border-palatinate-blue border-[2px] relative flex justify-center mr-4">
              <span className="animate-bounce block w-1 h-2 rounded-lg top-2 bg-palatinate-blue absolute"></span>
            </div>
            <span className="text-lg underline-offset-8">Scroll to read more</span>
            <div className="absolute h-[1px] w-0 opacity-0 left-0 group-hover:opacity-100 group-hover:w-full transition-all bg-palatinate-blue bottom-1"></div>
          </Button>
        </div>
      </div>

      <div className="flex-1 flex justify-end">
        <img src="/images/hero-image-1.png" alt="Our Team meeting With Client" className="w-[98%] drop-shadow-purple-sm" />
      </div>
    </section>
  )
}