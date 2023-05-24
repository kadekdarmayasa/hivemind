import Layout from '@components/Layout';
import useSWR from 'swr';
import type { PortfolioProps } from 'types/Portfolio';
import { Header, CategoryList, PortfolioItems } from '@partials/PortfolioPage';
import { selectedState } from '@redux-slices/dropdownSlice';
import { useAppSelector } from '@hooks/useAppSelector';
import React, { useEffect, useState } from 'react';
import { fetcher } from '@utils/fetcher/get';

export default function PortfolioPage() {
  const [categoryId, setCategoryId] = useState<string | number>(0);
  const { data, error, isLoading } = useSWR<PortfolioProps[], Error>('/api/portfoliopage', fetcher);
  const dropdownState = useAppSelector(selectedState);

  useEffect(() => {
    console.log(categoryId);
  }, [categoryId]);

  if (error || isLoading) return false;
  const categoryList = data.map((portfolio) => portfolio.service);

  return (
    <Layout title="Hivemind - Portfolio">
      <section className={`mt-14 relative ${dropdownState === 'open' ? '-z-10' : 'z-0'}`}>
        <Header title="Hivemind Portfolio" />
        <CategoryList
          categoryList={categoryList}
          onClick={(id: string | number) => setCategoryId(id)}
        />
        <PortfolioItems portfolios={data} />
      </section>
    </Layout>
  );
}
