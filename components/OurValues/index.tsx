import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { IconContext } from "react-icons";
import { LegacyRef } from 'react';

export default function OurValues({ refOurValues }: { refOurValues: LegacyRef<HTMLElement> }): JSX.Element {
  const checkmarkIcon = (
    <IconContext.Provider value={{ size: '2em', color: '#5BFBD8', className: '-mt-1' }}>
      <IoCheckmarkCircleOutline />
    </IconContext.Provider>
  )

  return (
    <section className="mt-32" ref={refOurValues}>
      <div className="flex flex-col items-center text-center">
        <h2 className="heading-2">What Sets Us Apart</h2>
      </div>

      <div className="flex justify-center mt-14 flex-wrap gap-10">
        <div className="our-values-item">
          <div className="flex items-center">
            <h3 className="heading">Experience</h3>
            {checkmarkIcon}
          </div>

          <p className="description">
            With years of experience in the digital marketing industry, we have the expertise and knowledge to develop and implement effective strategies that will help you reach your business goals.
          </p>
        </div>

        <div className="our-values-item">
          <div className="flex items-center">
            <h3 className="heading">Result-driven</h3>
            {checkmarkIcon}
          </div>

          <p className="description">
            Our focus is on delivering measurable results for our clients. We use data-driven insights to make informed decisions and constantly evaluate and adjust our strategies to ensure maximum <abbr title="Return On Investment">ROI</abbr>.
          </p>
        </div>

        <div className="our-values-item">
          <div className="flex items-center">
            <h3 className="heading">Custom Solutions</h3>
            {checkmarkIcon}
          </div>

          <p className="description">
            We tailor our services to meet the specific needs and goals of each client. We work closely with our clients to develop custom digital solutions that are designed to deliver results
          </p>
        </div>

        <div className="our-values-item">
          <div className="flex items-center">
            <h3 className="heading">Transparent communication</h3>
            {checkmarkIcon}
          </div>

          <p className="description">
            We believe in open and honest communication with our clients every step of the way. We provide regular updates and detailed reports, so you always know how your campaigns are performing.
          </p>
        </div>
      </div>
    </section>
  )
}