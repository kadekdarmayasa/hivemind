import { useRouter } from "next/router";
import Layout from "components/Layout";
import useSWR from 'swr';
import axios from "axios";
import WebDesign from "components/ServicePage/WebDesign";

const fetcher = (url: string) => axios.get(url).then(response => response.data);

export default function Service(): JSX.Element | false {
  const router = useRouter();
  const { slug } = router.query;
  const { data, error, isLoading } = useSWR('/api/servicedetail', fetcher);

  if (error || isLoading) return false;

  return (
    <Layout title="Hivemind - Service">
      {slug === 'web-design' && <WebDesign data={data} />}
    </Layout>
  )
}