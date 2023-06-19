import type { ContactInformationProps } from 'types/ContactInformation';
import Image from 'next/image';

export default function ContactInformation({
  contactInformation,
}: {
  contactInformation: ContactInformationProps;
}) {
  const { imageId, name, value } = contactInformation;

  return (
    <div className="flex mt-5">
      <div className="bg-[#E8EAFF] h-16 w-16 flex items-center justify-center rounded-md">
        <Image src={imageId} width={32} height={32} alt={name} priority />
      </div>

      <div className="ms-5">
        <h4 className="heading-4">{name}</h4>
        <p className="text-brave-purple font-light text-lg leading-9 mb-5">{value}</p>
      </div>
    </div>
  );
}
