import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { fetcher } from '@utils/fetcher/get';
import type { PortfolioProps } from 'types/Portfolio';
import Layout from '@components/Layout';
import Loading from '@components/Loading';
import { CategoryList, PortfolioItems } from '@partials/PortfolioPage';

export default function PortfolioPage() {
  const [categoryId, setCategoryId] = useState<string>('0');
  const { data, error, isLoading } = useSWR<PortfolioProps[], Error>('/api/portfoliopage', fetcher);

  useEffect(() => {
    console.log(categoryId);
  }, [categoryId]);

  if (error) return false;
  if (isLoading) return <Loading />;

  const categoryList = data.map((portfolio) => portfolio.service);

  return (
    <Layout title="Hivemind - Portfolio">
      <section className="mt-14 relative">
        <h1 className="heading-1 text-center">Hivemind&apos;s Portfolios</h1>
        <CategoryList categoryList={categoryList} onClick={(id: string) => setCategoryId(id)} />
        <PortfolioItems portfolios={data} />
      </section>
    </Layout>
  );
}
