import Philosophy from "./Philosophy";
import Mission from "./Mission";
import Vision from "./Vision";

type CompanyProps = {
  philosophy: {
    text: string,
    imagePath: string
  },
  missions: string[],
  visions: string[]
};

export default function Company({ company }: { company: CompanyProps }): JSX.Element {
  return (
    <section className="mt-14">
      <Philosophy philosophy={company.philosophy} />

      <div className="flex mt-14 gap-10">
        <Mission missions={company.missions} />
        <Vision visions={company.visions} />
      </div>
    </section>
  )
}