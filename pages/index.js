import { useRef } from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero/Homepage";
import OurValues from "../components/OurValues";
import Services from "../components/Service";
import Portfolio from "../components/Portfolio";
import axios from "axios";
import useSWR from 'swr';

const fetcher = (url) => axios.get(url).then(response => response.data);

export default function HomePage() {
  const refOurValues = useRef(null);
  const { data: { portfolios, services }, error, isLoading } = useSWR('api/homepage', fetcher);

  if (error) return false;
  if (isLoading) return false;

  return (
    <Layout title={'Hivemind - Home'}>
      <Hero refOurValues={refOurValues} />
      <OurValues refOurValues={refOurValues} />
      <Services services={services} />
      <Portfolio portfolios={portfolios} />
    </Layout>
  );
}