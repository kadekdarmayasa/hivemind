import { useRef } from "react";
import Layout from "components/Layout";
import { Hero, OurValues, Service, Portfolio } from "components/Homepage";
import Testimony from "components/Testimony";
import Blog from "components/Blog";
import axios from "axios";
import useSWR from 'swr';
import type { TestimonyItemProps } from "types/TestimonyItem";
import type { BlogItemProps } from "types/BlogItem";
import type { PortfolioProps } from "types/Portfolio";
import type { ServiceProps } from "types/Service";

const fetcher = (url: string) => axios.get(url).then(response => response.data);

export default function HomePage(): JSX.Element | false {
  const refOurValues = useRef<HTMLElement>(null);
  const { data, error, isLoading } = useSWR<HomepageProps, Error>('api/homepage', fetcher);

  if (error) return false;
  if (isLoading) return false;

  return (
    <Layout title={'Hivemind - Home'}>
      <Hero refOurValues={refOurValues} />
      <OurValues refOurValues={refOurValues} />
      <Service services={data.services} />
      <Portfolio portfolios={data.portfolios} />
      <Testimony testimonies={data.testimonies} />
      <Blog blogs={data.blogs} />
    </Layout>
  );
}

type HomepageProps = {
  services: ServiceProps[],
  portfolios: PortfolioProps[],
  testimonies: TestimonyItemProps[],
  blogs: BlogItemProps[],
}