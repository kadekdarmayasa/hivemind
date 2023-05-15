import type { PhilosophyProps } from "types/Philosophy";
import Fade from 'react-reveal/Fade';
import Image from "next/image";

export default function Philosophy({ philosophy }: { philosophy: PhilosophyProps }): JSX.Element {
  return (
    <>
      <Fade up>
        <h1 className="heading-1 text-center">How We Are</h1>
      </Fade>

      <div className="flex gap-5 mt-20 items-center justify-center">
        <div className="flex-1">
          <Fade up>
            <h2 className="heading-2">Hivemind&apos;s Philosophy</h2>
          </Fade>
          <Fade up delay={300}>
            <p className="text-brave-purple font-normal text-lg leading-9 mt-6">{philosophy.text}</p>
          </Fade>
        </div>
        <div className="flex-1 flex justify-end">
          <Fade duration={3000}>
            <Image width={500} height={400} src={philosophy.imageId} alt="Company Philosophy" className="shadow-black-lg w-[98%]" />
          </Fade>
        </div>
      </div>
    </>
  );
}