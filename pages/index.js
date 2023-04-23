import Layout from "../components/Layout";
import Hero from "../components/Hero/Homepage";
import OurValues from "../components/OurValues";
export default function HomePage() {
  return (
    <Layout title={'Hivemind - Home'}>
      <Hero />
      <OurValues />
    </Layout>
  );
}