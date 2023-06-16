import type { TeamProps } from 'types/Team';
import Image from 'next/image';

type TeamCarouselItemProps = {
  team: TeamProps;
};

export default function TeamCarouselItem({ team }: TeamCarouselItemProps) {
  const { imageId, name, title } = team;

  return (
    <div className="h-auto w-[350px] px-5 group">
      <div className="w-full h-[360px] rounded-lg overflow-hidden group transition-all">
        <Image
          height={360}
          width={350}
          src={imageId}
          alt={name}
          className="w-full object-cover group-hover:scale-[1.02] transition-all"
          priority
        />
      </div>
      <h3 className="heading-3 mt-4">{name}</h3>
      <p className="text-brave-purple font-light text-lg leading-9">{title}</p>
    </div>
  );
}
