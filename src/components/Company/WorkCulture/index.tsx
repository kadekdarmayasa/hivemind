import type { WorkCultureProps } from "types/WorkCulture"
import Fade from 'react-reveal/Fade';

export default function WorkCulture({ workCultures }: { workCultures: WorkCultureProps[] }): JSX.Element {
  return <>
    <Fade up>
      <h2 className="heading-2 text-center mb-24">Our Work Culture</h2>
    </Fade>

    {workCultures.map((workCulture, index) => {
      return (index % 2 == 0) ? (
        <div key={index} className="flex gap-12 items-center">
          <Fade delay={300 * index}>
            <div className="flex-1 flex justify-end shadow-black-md">
              <img src={workCulture.imageId} alt={workCulture.headline} className="w-full" />
            </div>
          </Fade>

          <Fade delay={300 * index}>
            <div className="flex-1">
              <h3 className="heading-3">{workCulture.headline}</h3>
              <p className="mt-6 text-brave-purple font-normal text-lg leading-9">
                {workCulture.description}
              </p>
            </div>
          </Fade>
        </div>
      ) : (
        <div key={index} className="flex gap-12 items-center my-14">
          <Fade delay={300 * index}>
            <div className="flex-1">
              <h3 className="heading-3">{workCulture.headline}</h3>
              <p className="mt-6 text-brave-purple font-normal text-lg leading-9">
                {workCulture.description}
              </p>
            </div>
          </Fade>

          <Fade delay={300 * index}>
            <div className="flex-1 flex justify-end shadow-black-md">
              <img src={workCulture.imageId} alt={workCulture.headline} className="w-full" />
            </div>
          </Fade>
        </div>
      )
    })}
  </>
}