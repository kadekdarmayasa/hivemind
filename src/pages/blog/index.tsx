import Layout from '@components/Layout';
import BlogItem from '@components/Blog/BlogItem';
import type { BlogItemProps } from 'types/BlogItem';
import Loading from '@components/Loading';
import useSWR from 'swr';
import { fetcher } from '@utils/fetcher/get';

export default function BlogPage() {
  const { data, isLoading } = useSWR<{ blogs: BlogItemProps[] }>('/api/blog', fetcher);

  if (isLoading) return <Loading />;
  return (
    <Layout title="Hivemind - Blog">
      <section className="relative mt-10 grid grid-cols-12 grid-flow-dense sm:gap-x-8 gap-y-10">
        {data.blogs.map((blog, index) => (
          <BlogItem
            key={blog.id}
            blog={blog}
            contentWidth={index === 0 ? 'large' : 'default'}
            index={[2, 0, 1][index % 3]}
            isGridItem
          />
        ))}
      </section>
    </Layout>
  );
}
