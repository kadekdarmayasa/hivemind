import Layout from "components/Layout";
import BlogPage from "components/BlogPage";
import useSWR from 'swr';
import axios from "axios";
import type { BlogItemProps } from "types/BlogItem";

const fetcher = (url: string) => axios.get(url).then(response => response.data);

export default function Blog(): JSX.Element | false {
  const { data, error, isLoading } = useSWR<BlogItemProps[], Error>('/api/blogpage', fetcher);

  if (error || isLoading) return false;
  console.log(data);

  return (
    <Layout title="Hivemind - Blog">
      <BlogPage blogs={data} />
    </Layout>
  )
}
