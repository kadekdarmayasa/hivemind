import useSWR from 'swr';
import Layout from '@components/Layout';
import BlogItem from '@components/Blog/BlogItem';
import Loading from '@components/Loading';
import { fetcher } from '@utils/fetcher/get';
import { useScreenSize } from '@hooks/useScreenSize';
import type { BlogItemProps } from 'types/BlogItem';

export default function BlogPage() {
  const { data, error, isLoading } = useSWR<BlogItemProps[], Error>('/api/blogpage', fetcher);
  const [screenSize] = useScreenSize();

  if (error) return false;
  if (isLoading) return <Loading />;

  return (
    <Layout title="Hivemind - Blog">
      <section className="relative mt-10 grid grid-cols-12 grid-flow-dense gap-x-8 gap-y-10">
        {data.map((blog, index) => (
          <BlogItem
            key={blog.id}
            blog={blog}
            contentWidth={index === 0 ? 'large' : 'default'}
            index={index === 0 && screenSize.width > 576 ? index : [2, 0, 1][index % 3]}
            isGridItem
          />
        ))}
      </section>
    </Layout>
  );
}
