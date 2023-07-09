import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { fetcher } from '@utils/fetcher/get';
import type { PortfolioProps } from 'types/Portfolio';
import Layout from '@components/Layout';
import { PortfolioCatagoryList, PortfolioContent } from '@partials/PortfolioPage';
import Loading from '@components/Loading';

export default function PortfolioPage() {
  const [categoryId, setCategoryId] = useState<number>(0);
  const { data, isLoading } = useSWR<{ portfolios: PortfolioProps[] }, Error>(
    '/api/portfolio',
    fetcher,
  );

  useEffect(() => {
    // console.log(categoryId);
  }, [categoryId]);

  if (isLoading) return <Loading />;

  const categoryList = data.portfolios.map((portfolio) => ({
    serviceId: portfolio.serviceId,
    serviceName: portfolio.serviceName,
  }));

  return (
    <Layout title="Hivemind - Portfolio">
      <section className="mt-14 relative">
        <h1 className="heading-1 text-center">Hivemind&apos;s Portfolios</h1>
        <PortfolioCatagoryList
          categoryList={categoryList}
          onClick={(id: number) => setCategoryId(id)}
        />
        <PortfolioContent portfolios={data.portfolios} />
      </section>
    </Layout>
  );
}
