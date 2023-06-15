import Image from 'next/image';
import Star from '@components/Star';
import type { TestimonyItemProps as TIProps } from 'types/TestimonyItem';

type TestimonyItemProps = {
  testimony: TIProps;
};

export default function TestimonyItem({ testimony }: TestimonyItemProps) {
  const { imageId, clientName, occupation, message, rate } = testimony;

  return (
    <div className="h-auto bg-white  w-[430px] px-8 py-10 rounded-lg testimony-item">
      <div className="flex items-center">
        <div className="h-[50px] w-[50px] overflow-hidden rounded-full">
          <Image
            src={imageId}
            width={50}
            height={50}
            alt={clientName}
            className="rounded-full w-[50px] h-[50px]"
            priority
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
