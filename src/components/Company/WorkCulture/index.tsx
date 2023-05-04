import type { WorkCultureProps } from "src/types/WorkCulture"

export default function WorkCulture({ workCultures }: { workCultures: WorkCultureProps[] }): JSX.Element {
  return <>
    <h2 className="heading-2 text-center mb-24">Our Work Culture</h2>

    {workCultures.map((workCulture, index) => {
      return (index % 2 == 0) ? (
        <div key={index} className="flex gap-12 items-center">
          <div className="flex-1 flex justify-end shadow-black-md">
            <img src={workCulture.imagePath} alt={workCulture.headline} className="w-full" />
          </div>

          <div className="flex-1">
            <h3 className="heading-3">{workCulture.headline}</h3>
            <p className="mt-6 text-brave-purple font-normal text-lg leading-9">
              {workCulture.description}
            </p>
          </div>
        </div>
      ) : (
        <div key={index} className="flex gap-12 items-center my-14">
          <div className="flex-1">
            <h3 className="heading-3">{workCulture.headline}</h3>
            <p className="mt-6 text-brave-purple font-normal text-lg leading-9">
              {workCulture.description}
            </p>
          </div>

          <div className="flex-1 flex justify-end shadow-black-md">
            <img src={workCulture.imagePath} alt={workCulture.headline} className="w-full" />
          </div>
        </div>
      )
    })}
  </>
}