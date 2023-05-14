import Image from "next/image"
import Star from '../../Star';
import type { TestimonyItemProps } from "types/TestimonyItem";

export default function TestimonyItem({ testimony }: { testimony: TestimonyItemProps }): JSX.Element {
  return (
    <div className="h-auto bg-white  w-[430px] mt-10 px-8 py-10 rounded-lg testimony-item">
      <div className="flex items-center">
        <div className="h-[50px] w-[50px] overflow-hidden rounded-full">
          <Image src={testimony.imageId} width={50} height={50} alt={testimony.clientName} className="rounded-full" />
        </div>

        <div className="ml-4">
          <h4 className="heading-5">{testimony.clientName}</h4>
          <p className="text-brave-purple text-base font-light">{testimony.occupation}</p>
        </div>
      </div>

      <div className="my-6">
        <p className="text-coarse-wool text-base font-normal leading-7">"{testimony.message}"</p>
      </div>

      <div className="mt-2">
        <Star value={testimony.rate} width={30} height={30} />
      </div>
    </div>
  )
}