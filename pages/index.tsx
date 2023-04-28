import { useRef } from "react";
import Layout from "components/Layout";
import { HeroHomePage } from "components/Hero";
import OurValues from "components/OurValues";
import Services from "components/Service";
import Portfolio from "components/Portfolio";
import Testimony from "components/Testimony";
import Blog from "components/Blog";
import axios from "axios";
import useSWR from 'swr';
import { TestimonyItemProps } from "types/TestimonyItem";
import { BlogItemProps } from "types/BlogItem";
import { PortfolioProps } from "types/Portfolio";
import { ServiceProps } from "types/Service";

const fetcher = (url: string) => axios.get(url).then(response => response.data);

export default function HomePage(): JSX.Element | false {
  const refOurValues = useRef<HTMLElement>(null);
  const { data, error, isLoading } = useSWR<HomepageProps, Error>('api/homepage', fetcher);

  if (error) return false;
  if (isLoading) return false;

  return (
    <Layout title={'Hivemind - Home'}>
      <HeroHomePage refOurValues={refOurValues} />
      <OurValues refOurValues={refOurValues} />
      <Services services={data.services} />
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