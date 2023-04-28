import TeamCarousel from "./TeamCarousel"
import { TeamProps } from "types/Team"

export default function Team({ teams }: { teams: TeamProps[] }): JSX.Element {
  return (
    <>
      <h2 className="heading-2 text-center">Meet Our Professional Teams</h2>

      <TeamCarousel teams={teams} />
    </>
  )
}
