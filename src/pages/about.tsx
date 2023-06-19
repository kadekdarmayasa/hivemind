import useSWR from 'swr';
import type { TeamProps } from 'types/Team';
import type { PhilosophyProps } from 'types/Philosophy';
import type { WorkCultureProps } from 'types/WorkCulture';
import Layout from '@components/Layout';
import { fetcher } from '@utils/fetcher/get';
import Loading from '@components/Loading';
import {
  CompanyPhilosophy,
  CompanyMission,
  CompanyVision,
  CompanyTeam,
  CompanyWorkCulture,
} from '@partials/AboutPage';

type AboutProps = {
  company: {
    philosophy: PhilosophyProps;
    missions: string[];
    visions: string[];
    teams: TeamProps[];
    workCulture: WorkCultureProps[];
  };
};

export default function AboutPage() {
  const { data, error, isLoading } = useSWR<AboutProps, Error>('/api/aboutpage', fetcher);

  if (error) return false;
  if (isLoading) return <Loading />;

  return (
    <Layout title="Hivemind - About">
      <section className="relative mt-14">
        <CompanyPhilosophy philosophy={data.company.philosophy} />

        <div className="flex flex-col lg:flex-row mt-14 gap-10">
          <CompanyMission missions={data.company.missions} />
          <CompanyVision visions={data.company.visions} />
        </div>
      </section>

      <CompanyTeam teams={data.company.teams} />

      <CompanyWorkCulture workCultures={data.company.workCulture} />
    </Layout>
  );
}
