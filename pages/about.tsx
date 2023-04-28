import Layout from "components/Layout";
import Company from "components/Company";
import axios from "axios";
import useSWR from 'swr';

type AboutProps = {
  company: {
    philosophy: {
      text: string,
      imagePath: string
    },
    missions: string[],
    visions: string[]
  }
}

const fetcher = (url: string) => axios.get(url).then(response => response.data);

export default function AboutPage(): JSX.Element | false {
  const { data, error, isLoading } = useSWR<AboutProps, Error>('api/aboutpage', fetcher);

  if (error) return false;
  if (isLoading) return false;

  return (
    <Layout title={'Hivemind - About'}>
      <Company company={data.company} />
    </Layout>
  )
}