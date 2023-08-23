import TeamProps from 'types/Team';
import Image from 'next/image';
import { IconContext } from 'react-icons';
import { SlSocialLinkedin, SlEnvolope } from 'react-icons/sl';
import Link from 'next/link';

const socialMediaIconProps = { size: '1.3em' };

export default function TeamCarouselItem({ team }: { team: TeamProps }) {
  const { publicPhoto, name, role } = team;

  return (
    <div className="h-auto w-[330px] sm:w-[350px] px-5">
      <div className="w-full h-[360px] rounded-lg overflow-hidden transition-all">
        <Image
          height={360}
          width={350}
          src={`${process.env.NEXT_PUBLIC_API_URL}/image/${publicPhoto}`}
          alt={name}
          className="w-full object-cover hover:scale-[1.02] transition-all"
          crossOrigin="anonymous"
          priority
        />
      </div>
      <h3 className="heading-3 mt-4">{name}</h3>
      <p className="text-brave-purple font-light text-lg leading-9">{role.name}</p>
      <div className="flex mt-4">
        <IconContext.Provider value={socialMediaIconProps}>
          <Link
            href="https://mail.google.com/"
            className="bg-[#E8EAFF] hover:bg-palatinate-blue  h-[45px] w-[45px] flex items-center justify-center rounded-md mr-4 group transition-all"
            rel="noreferrer"
            target="_blank"
          >
            {' '}
            <SlEnvolope className="text-palatinate-blue group-hover:text-white transition-all" />
          </Link>
          <Link
            href="https://linkedin.com/"
            className="bg-[#E8EAFF] hover:bg-palatinate-blue  h-[45px] w-[45px] flex items-center justify-center rounded-md mr-4 group transition-all"
            rel="noreferrer"
            target="_blank"
          >
            {' '}
            <SlSocialLinkedin className="text-palatinate-blue group-hover:text-white transition-all" />
          </Link>
        </IconContext.Provider>
      </div>
    </div>
  );
}
