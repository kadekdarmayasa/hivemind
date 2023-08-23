import { useRef } from 'react';
import type ClientType from 'types/Client';
import type ServiceItemType from 'types/ServiceItem';
import type PortfolioType from 'types/PortfolioItem';
import type TestimonyItemType from 'types/TestimonyItem';
import type BlogItemType from 'types/BlogItem';
import Layout from '@components/common/Layout';
import { Hero, Client, OurValues, Service, Portfolio, Testimony, Blog } from '@components/home';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import axios from 'axios';

type HomepageProps = {
  clients: ClientType[];
  services: ServiceItemType[];
  portfolios: PortfolioType[];
  testimonies: TestimonyItemType[];
  blogs: BlogItemType[];
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
      <Hero ref={refClients} />
      <Client clients={homepage.clients} ref={refClients} />
      <OurValues />
      <Service services={homepage.services} />
      <Portfolio portfolios={homepage.portfolios} />
      <Testimony testimonies={homepage.testimonies} />
      <Blog blogs={homepage.blogs} />
    </Layout>
  );
}
