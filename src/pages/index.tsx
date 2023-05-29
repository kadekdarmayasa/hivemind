import React, { useRef } from 'react';
import Layout from '@components/Layout';
import {
  Hero,
  OurValues,
  Service,
  Portfolio,
  Testimony,
  Blog,
} from '@partials/Homepage';
import type { TestimonyItemProps } from 'types/TestimonyItem';
import type { BlogItemProps } from 'types/BlogItem';
import type { PortfolioProps } from 'types/Portfolio';
import type { ServiceProps } from 'types/Service';
import type { OurValuesProps } from 'types/OurValues';
import { fetcher } from '@utils/fetcher/get';
import useSWR from 'swr';

type HomepageProps = {
  services: ServiceProps[];
  companyValues: OurValuesProps[];
  portfolios: PortfolioProps[];
  testimonies: TestimonyItemProps[];
  blogs: BlogItemProps[];
};

export default function HomePage() {
  const refOurValues = useRef<HTMLElement>(null);
  const { data, error, isLoading } = useSWR<HomepageProps, Error>(
    '/api/homepage',
    fetcher,
  );

  if (error || isLoading) return false;

  return (
    <Layout title="Hivemind - Home">
      <Hero refOurValues={refOurValues} />
      <OurValues refOurValues={refOurValues} ourValues={data.companyValues} />
      <Service services={data.services} />
      <Portfolio portfolios={data.portfolios} />
      <Testimony
        testimonies={data.testimonies}
        title="What Client Says"
        isContainLabel
        labelText="Testimony"
      />
      <Blog blogs={data.blogs} />
    </Layout>
  );
}
