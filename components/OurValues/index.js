import Image from "next/image"

export default function OurValues(props) {
  return (
    <section className="mt-32" ref={props.refOurValues}>
      <div className="flex flex-col items-center text-center">
        <small className="label-text">Our Values</small>
        <h2 className="heading-2">What Sets Us Apart</h2>
      </div>

      <div className="flex justify-center mt-14 flex-wrap gap-10">
        <div className="cursor-default w-[550px] rounded-lg bg-white px-12 py-14 shadow-black-sm hover:shadow-black-md hover:scale-[1.02] transition-all ">
          <div className="flex items-center">
            <h3 className="heading-3 -mt-1 mr-2">Experience</h3>
            <Image src='/images/check-mark.svg' width={30} height={30} alt="Checked" />
          </div>

          <p className="text-brave-purple font-normal text-lg leading-9 mt-5">
            With years of experience in the digital marketing industry, we have the expertise and knowledge to develop and implement effective strategies that will help you reach your business goals.
          </p>
        </div>
        <div className="cursor-default w-[550px] rounded-lg bg-white px-12 py-14 shadow-black-sm hover:shadow-black-md hover:scale-[1.02] transition-all ">
          <div className="flex items-center">
            <h3 className="heading-3 -mt-1 mr-2">Result-driven</h3>
            <Image src='/images/check-mark.svg' width={30} height={30} alt="Checked" />
          </div>

          <p className="text-brave-purple font-normal text-lg leading-9 mt-5">
            Our focus is on delivering measurable results for our clients. We use data-driven insights to make informed decisions and constantly evaluate and adjust our strategies to ensure maximum <abbr title="Return On Investment">ROI</abbr>.
          </p>
        </div>
        <div className="cursor-default w-[550px] rounded-lg bg-white px-12 py-14 shadow-black-sm hover:shadow-black-md hover:scale-[1.02] transition-all ">
          <div className="flex items-center">
            <h3 className="heading-3 -mt-1 mr-2">Custom Solutions</h3>
            <Image src='/images/check-mark.svg' width={30} height={30} alt="Checked" />
          </div>

          <p className="text-brave-purple font-normal text-lg leading-9 mt-5">
            We tailor our services to meet the specific needs and goals of each client. We work closely with our clients to develop custom digital solutions that are designed to deliver results
          </p>
        </div>
        <div className="cursor-default w-[550px] rounded-lg bg-white px-12 py-14 shadow-black-sm hover:shadow-black-md hover:scale-[1.02] transition-all ">
          <div className="flex items-center">
            <h3 className="heading-3 -mt-1 mr-2">Transparent communication</h3>
            <Image src='/images/check-mark.svg' width={30} height={30} alt="Checked" />
          </div>

          <p className="text-brave-purple font-normal text-lg leading-9 mt-5">
            We believe in open and honest communication with our clients every step of the way. We provide regular updates and detailed reports, so you always know how your campaigns are performing.
          </p>
        </div>
      </div>
    </section>
  )
}