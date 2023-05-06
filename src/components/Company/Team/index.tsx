import TeamCarousel from "./TeamCarousel"
import type { TeamProps } from "types/Team"
import Fade from 'react-reveal/Fade';

export default function Team({ teams }: { teams: TeamProps[] }): JSX.Element {
  return (
    <>
      <Fade up>
        <h2 className="heading-2 text-center">Meet Our Professional Teams</h2>
      </Fade>

      <TeamCarousel teams={teams} />
    </>
  )
}
