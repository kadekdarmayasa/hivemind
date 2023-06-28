import type { ContactInformationProps } from 'types/ContactInformation';
import { IconContext } from 'react-icons';

const contactInformationIconProps: IconContext = {
  size: '1.8em',
  className: 'text-palatinate-blue',
};

export default function ContactInformation({
  contactInformation,
}: {
  contactInformation: ContactInformationProps;
}) {
  const { icon, name, value } = contactInformation;

  return (
    <div className="flex mt-5 flex-col sm:flex-row">
      <div className="bg-[#E8EAFF] h-16 w-16 flex items-center justify-center rounded-md">
        <IconContext.Provider value={contactInformationIconProps}>{icon}</IconContext.Provider>
      </div>

      <div className="mt-4 sm:mt-0 sm:ms-5">
        <h4 className="heading-4">{name}</h4>
        <p className="text-brave-purple font-light text-lg leading-9 mb-5">{value}</p>
      </div>
    </div>
  );
}
