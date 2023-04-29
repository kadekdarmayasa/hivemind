import { SlSocialLinkedin, SlSocialTwitter, SlSocialFacebook } from "react-icons/sl";
import { IconContext } from "react-icons";
import { TeamProps } from "types/Team";

export default function TeamItem({ team }: { team: TeamProps }): JSX.Element {
  return (
    <div className="h-auto w-[350px] mt-6 px-8 py-10 group">
      <div className="w-full h-[360px] rounded-lg overflow-hidden grayscale group-hover:grayscale-0 group transition-all">
        <img src={team.imagePath} className="w-full object-cover group-hover:scale-[1.02] transition-all" alt={team.name} />
      </div>

      <h3 className="heading-3 mt-4">{team.name}</h3>
      <p className="text-brave-purple font-light text-lg leading-9">{team.title}</p>

      <div className="flex mt-6">
        <IconContext.Provider value={{ size: '1em', color: '#2B3BE5' }}>
          <a href={team.socials.facebook} target="_blank" className="bg-[#E8EAFF] h-[38px] w-[38px] flex items-center justify-center rounded-md mr-4">
            <SlSocialFacebook />
          </a>
          <a href={team.socials.twitter} target="_blank" className="bg-[#E8EAFF] h-[38px] w-[38px] flex items-center justify-center rounded-md mr-4">
            <SlSocialTwitter />
          </a>
          <a href={team.socials.linkedin} target="_blank" className="bg-[#E8EAFF] h-[38px] w-[38px] flex items-center justify-center rounded-md mr-4">
            <SlSocialLinkedin />
          </a>
        </IconContext.Provider>
      </div>
    </div>
  )
}