import TeamCarousel from "./TeamCarousel"

export default function Team({ teams }: { teams: TeamProps }): JSX.Element {
  return (
    <>
      <h2 className="heading-2 text-center">Meet Our Professional Teams</h2>

      <TeamCarousel teams={teams} />
    </>
  )
}

type TeamProps = {
  _id: number,
  imagePath: string,
  name: string,
  title: string,
  socials: {
    facebook: string,
    twitter: string,
    linkedin: string
  }
}[]