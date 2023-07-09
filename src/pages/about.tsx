import Layout from '@components/Layout';
import {
  CompanyPhilosophy,
  CompanyMission,
  CompanyVision,
  CompanyTeam,
  CompanyWorkCulture,
} from '@partials/AboutPage';
import { TeamProps } from 'types/Team';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import axios from 'axios';

export const getStaticProps: GetStaticProps<{ teams: TeamProps[] }> = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/teams`);
  const teams = await res.data;

  if (!teams) return { notFound: true };
  return { props: { teams }, revalidate: 1 };
};

export default function AboutPage({ teams }: InferGetStaticPropsType<typeof getStaticProps>) {
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
