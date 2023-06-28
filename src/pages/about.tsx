import useSWR from 'swr';
import type { TeamProps } from 'types/Team';
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

export default function AboutPage() {
  const { data: teams, error, isLoading } = useSWR<TeamProps[], Error>('/api/team', fetcher);

  if (error) return false;
  if (isLoading) return <Loading />;

  return (
    <Layout title="Hivemind - About">
      <section className="relative mt-14">
        <CompanyPhilosophy />
        <div className="flex flex-col lg:flex-row mt-14 gap-10">
          <CompanyMission />
          <CompanyVision />
        </div>
      </section>
      <CompanyTeam teams={teams} />
      <CompanyWorkCulture />
    </Layout>
  );
}
