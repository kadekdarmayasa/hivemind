import Philosophy from "./Philosophy";
import Mission from "./Mission";
import Vision from "./Vision";
import Team from "./Team";
import WorkCulture from "./WorkCulture";
import { TeamProps } from "types/Team";
import { PhilosophyProps } from "types/Philosophy";
import { WorkCultureProps } from "types/WorkCulture";
import { useAppSelector } from "hooks/useAppSelector";
import { selectedStatus } from "slices/dropdownSlice";

export default function Company({ company }: { company: CompanyProps }): JSX.Element {
  const dropdownStatus = useAppSelector(selectedStatus);

  return (
    <>
      <section className={`relative ${dropdownStatus === 'open' ? '-z-10' : 'z-0'} mt-14`}>
        <Philosophy philosophy={company.philosophy} />

        <div className="flex mt-14 gap-10">
          <Mission missions={company.missions} />
          <Vision visions={company.visions} />
        </div>
      </section>

      <section className="mt-32">
        <Team teams={company.teams} />
      </section>

      <section className="mt-32">
        <WorkCulture workCultures={company.workCulture} />
      </section>
    </>
  )
}

type CompanyProps = {
  philosophy: PhilosophyProps,
  missions: string[],
  visions: string[],
  teams: TeamProps[],
  workCulture: WorkCultureProps[]
};
