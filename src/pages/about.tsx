import Layout from "components/Layout";
import Company from "components/Company";
import axios from "axios";
import useSWR from 'swr';
import type { TeamProps } from "types/Team";
import type { PhilosophyProps } from "types/Philosophy";
import type { WorkCultureProps } from "types/WorkCulture";

const fetcher = (url: string) => axios.get(url).then(response => response.data);

export default function AboutPage(): JSX.Element | false {
  const { data, error, isLoading } = useSWR<AboutProps, Error>('/api/aboutpage', fetcher);

  if (error) return false;
  if (isLoading) return false;

  return (
    <Layout title={'Hivemind - About'}>
      <Company company={data.company} />
    </Layout>
  )
}

type AboutProps = {
  company: {
    philosophy: PhilosophyProps,
    missions: string[],
    visions: string[],
    teams: TeamProps[],
    workCulture: WorkCultureProps[]
  }
}
