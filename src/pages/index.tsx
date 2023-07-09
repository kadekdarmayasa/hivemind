import { useRef } from 'react';
import type { TestimonyItemProps } from 'types/TestimonyItem';
import type { BlogItemProps } from 'types/BlogItem';
import type { PortfolioProps } from 'types/Portfolio';
import type { ServiceItemProps } from 'types/ServiceItem';
import type { ClientProps } from 'types/Client';
import Layout from '@components/Layout';
import { Hero, Client, OurValues, Service, Portfolio, Testimony, Blog } from '@partials/Homepage';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import axios from 'axios';

type HomepageProps = {
  clients: ClientProps[];
  services: ServiceItemProps[];
  portfolios: PortfolioProps[];
  testimonies: TestimonyItemProps[];
  blogs: BlogItemProps[];
};

export const getStaticProps: GetStaticProps<{ homepage: HomepageProps }> = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/homepage`);
  const homepage = res.data;

  if (!homepage) return { notFound: true };
  return { props: { homepage }, revalidate: 10 };
};

export default function HomePage({ homepage }: InferGetStaticPropsType<typeof getStaticProps>) {
  const refClients = useRef<HTMLElement>(null);

  return (
    <Layout title="Hivemind - Home">
      <Hero refClients={refClients} />
      <Client clients={homepage.clients} refClients={refClients} />
      <OurValues />
      <Service services={homepage.services} />
      <Portfolio portfolios={homepage.portfolios} />
      <Testimony testimonies={homepage.testimonies} />
      <Blog blogs={homepage.blogs} />
    </Layout>
  );
}
