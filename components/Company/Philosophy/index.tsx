import { PhilosophyProps } from "types/Philosophy";

export default function Philosophy({ philosophy }: { philosophy: PhilosophyProps }): JSX.Element {
  return (
    <>
      <h1 className="heading-1 text-center">How We Are</h1>

      <div className="flex gap-5 mt-20 items-center justify-center">
        <div className="flex-1">
          <h2 className="heading-2">Our Philosophy</h2>
          <p className="text-brave-purple font-normal text-lg leading-9 mt-6">{philosophy.text}</p>
        </div>
        <div className="flex-1 flex justify-end">
          <img src={philosophy.imagePath} alt="Company Philosophy" className="shadow-black-lg w-[98%]" />
        </div>
      </div>
    </>
  );
}