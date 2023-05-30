import Layout from '@components/Layout';
import useSWR from 'swr';
import type { PortfolioProps } from 'types/Portfolio';
import { CategoryList, PortfolioItems } from '@partials/PortfolioPage';
import React, { useEffect, useState } from 'react';
import { fetcher } from '@utils/fetcher/get';

export default function PortfolioPage() {
  const [categoryId, setCategoryId] = useState<string | number>(0);
  const { data, error, isLoading } = useSWR<PortfolioProps[], Error>(
    '/api/portfoliopage',
    fetcher,
  );

  useEffect(() => {
    console.log(categoryId);
  }, [categoryId]);

  if (error || isLoading) return false;
  const categoryList = data.map((portfolio) => portfolio.service);

  return (
    <Layout title="Hivemind - Portfolio">
      <section className="mt-14 relative">
        <h1 className="heading-1 text-center">Hivemind&apos;s Portfolios</h1>
        <CategoryList
          categoryList={categoryList}
          onClick={(id: string | number) => setCategoryId(id)}
        />
        <PortfolioItems portfolios={data} />
      </section>
    </Layout>
  );
}
