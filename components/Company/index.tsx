import Philosophy from "./Philosophy";
import Mission from "./Mission";
import Vision from "./Vision";
import Team from "./Team";

export default function Company({ company }: { company: CompanyProps }): JSX.Element {
  return (
    <>
      <section className="mt-14">
        <Philosophy philosophy={company.philosophy} />

        <div className="flex mt-14 gap-10">
          <Mission missions={company.missions} />
          <Vision visions={company.visions} />
        </div>
      </section>

      <section className="mt-32">
        <Team teams={company.teams} />
      </section>
    </>
  )
}

type CompanyProps = {
  philosophy: {
    text: string,
    imagePath: string
  },
  missions: string[],
  visions: string[],
  teams: {
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
};
