import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { fetcher } from '@utils/fetcher/get';
import type { PortfolioProps } from 'types/Portfolio';
import Layout from '@components/Layout';
import Loading from '@components/Loading';
import { CategoryList, PortfolioItems } from '@partials/PortfolioPage';

export default function PortfolioPage() {
  const [categoryId, setCategoryId] = useState<number>(0);
  const {
    data: portfolios,
    error,
    isLoading,
  } = useSWR<PortfolioProps[], Error>('/api/portfolio', fetcher);

  useEffect(() => {
    console.log(categoryId);
  }, [categoryId]);

  if (error) return false;
  if (isLoading) return <Loading />;

  const categoryList = portfolios.map((portfolio) => ({
    serviceId: portfolio.serviceId,
    serviceName: portfolio.serviceName,
  }));

  return (
    <Layout title="Hivemind - Portfolio">
      <section className="mt-14 relative">
        <h1 className="heading-1 text-center">Hivemind&apos;s Portfolios</h1>
        <CategoryList categoryList={categoryList} onClick={(id: number) => setCategoryId(id)} />
        <PortfolioItems portfolios={portfolios} />
      </section>
    </Layout>
  );
}
