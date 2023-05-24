import React from 'react';
import Layout from '@components/Layout';
import {
  CompanyPhilosophy,
  CompanyMission,
  CompanyVision,
  CompanyTeam,
  CompanyWorkCulture,
} from '@partials/AboutPage';
import useSWR from 'swr';
import type { TeamProps } from 'types/Team';
import type { PhilosophyProps } from 'types/Philosophy';
import type { WorkCultureProps } from 'types/WorkCulture';
import { useAppSelector } from '@hooks/useAppSelector';
import { selectedState } from '@redux-slices/dropdownSlice';
import { fetcher } from '@utils/fetcher/get';

type AboutProps = {
  company: {
    philosophy: PhilosophyProps,
    missions: string[],
    visions: string[],
    teams: TeamProps[],
    workCulture: WorkCultureProps[]
  }
}

export default function AboutPage() {
  const { data, error, isLoading } = useSWR<AboutProps, Error>('/api/aboutpage', fetcher);
  const dropdownState = useAppSelector(selectedState);

  if (error) return false;
  if (isLoading) return false;

  return (
    <Layout title="Hivemind - About">
      <section className={`relative ${dropdownState === 'open' ? '-z-10' : 'z-0'} mt-14`}>
        <CompanyPhilosophy philosophy={data.company.philosophy} />

        <div className="flex mt-14 gap-10">
          <CompanyMission missions={data.company.missions} />
          <CompanyVision visions={data.company.visions} />
        </div>
      </section>

      <CompanyTeam teams={data.company.teams} />

      <CompanyWorkCulture workCultures={data.company.workCulture} />
    </Layout>
  );
}
