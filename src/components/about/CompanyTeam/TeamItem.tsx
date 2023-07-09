import type { TeamProps } from 'types/Team';
import Image from 'next/image';

export default function TeamCarouselItem({ team }: { team: TeamProps }) {
  const { profile, name, title } = team;

  return (
    <div className="h-auto w-[330px] sm:w-[350px] px-5 group">
      <div className="w-full h-[360px] rounded-lg overflow-hidden group transition-all">
        <Image
          height={360}
          width={350}
          src={profile}
          alt={name}
          className="w-full object-cover group-hover:scale-[1.02] transition-all"
          crossOrigin="anonymous"
          priority
        />
      </div>
      <h3 className="heading-3 mt-4">{name}</h3>
      <p className="text-brave-purple font-light text-lg leading-9">{title}</p>
    </div>
  );
}
