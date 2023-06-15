import { useRef } from 'react';
import useSWR from 'swr';
import { fetcher } from '@utils/fetcher/get';
import Layout from '@components/Layout';
import { Hero, Client, OurValues, Service, Portfolio, Testimony, Blog } from '@partials/Homepage';
import type { TestimonyItemProps } from 'types/TestimonyItem';
import type { BlogItemProps } from 'types/BlogItem';
import type { PortfolioProps } from 'types/Portfolio';
import type { ServiceItemProps } from 'types/ServiceItem';
import type { OurValuesProps } from 'types/OurValues';
import type { ClientProps } from 'types/Client';

type HomepageProps = {
  clients: ClientProps[];
  companyValues: OurValuesProps[];
  services: ServiceItemProps[];
  portfolios: PortfolioProps[];
  testimonies: TestimonyItemProps[];
  blogs: BlogItemProps[];
};

export default function HomePage() {
  const refClients = useRef<HTMLElement>(null);
  const { data, error, isLoading } = useSWR<HomepageProps, Error>('/api/homepage', fetcher);

  if (error || isLoading) return false;

  return (
    <Layout title="Hivemind - Home">
      <Hero refClients={refClients} />
      <Client clients={data.clients} refClients={refClients} />
      <OurValues ourValues={data.companyValues} />
      <Service services={data.services} />
      <Portfolio portfolios={data.portfolios} />
      <Testimony testimonies={data.testimonies} title="What Client Says" labelText="Testimony" />
      <Blog blogs={data.blogs} />
    </Layout>
  );
}
