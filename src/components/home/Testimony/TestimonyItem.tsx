import Image from 'next/image';
import Star from '@components/common/Star';
import type TestimonyItemType from 'types/TestimonyItem';

export default function TestimonyItem({ testimony }: { testimony: TestimonyItemType }) {
  const { clientPhoto, clientName, occupation, message, rate } = testimony;

  return (
    <div className="h-auto bg-white w-[310px] sm:w-[430px] px-8 py-10 rounded-lg testimony-item">
      <div className="flex items-center">
        <div className="h-[50px] w-[50px] overflow-hidden rounded-full">
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}/image/${clientPhoto}`}
            width={50}
            height={50}
            alt={clientName}
            className="rounded-full w-[50px] h-[50px]"
            priority
            crossOrigin="anonymous"
          />
        </div>

        <div className="ml-4">
          <h4 className="heading-5">{clientName}</h4>
          <p className="text-brave-purple text-base font-light">{occupation}</p>
        </div>
      </div>

      <div className="my-6">
        <p className="text-coarse-wool text-base font-normal leading-7">{message}</p>
      </div>

      <div className="mt-2">
        <Star value={rate} width={30} height={30} />
      </div>
    </div>
  );
}
