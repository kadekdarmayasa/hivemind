import { useRef } from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero/Homepage";
import OurValues from "../components/OurValues";
import Services from "../components/Service";
import Portfolio from "../components/Portfolio";

export default function HomePage() {
  const refOurValues = useRef(null);

  return (
    <Layout title={'Hivemind - Home'}>
      <Hero refOurValues={refOurValues} />
      <OurValues refOurValues={refOurValues} />
      <Services limit={6} />
      <Portfolio limit={5} />
    </Layout>
  );
}