import Layout from "components/Layout";
import useSWR from 'swr';
import axios from "axios";
import type { PortfolioProps } from "types/Portfolio";
import { Header, CategoryList, PortfolioItems } from "components/PortfolioPage";
import { useAppSelector } from "hooks/useAppSelector";
import { selectedState } from "slices/dropdownSlice";
import { useEffect, useState } from "react";

const fetcher = (url: string) => axios.get(url).then(response => response.data);

export default function PortfolioPage(): JSX.Element | false {
  const [categoryId, setCategoryId] = useState<string | number>(0);
  const { data, error, isLoading } = useSWR<PortfolioProps[], Error>('/api/portfoliopage', fetcher);
  const dropdownState = useAppSelector(selectedState);

  useEffect(() => {
    console.log(categoryId)
  }, [categoryId])

  if (error || isLoading) return false;
  const categoryList = data.map(portfolio => portfolio.service);

  const handleClick = (categoryId: string | number) => {
    setCategoryId(categoryId);
  }

  return (
    <Layout title="Hivemind - Portfolio">
      <section className={`mt-14 relative ${dropdownState === 'open' ? '-z-10' : 'z-0'}`}>
        <Header title="Hivemind Portfolio" />
        <CategoryList categoryList={categoryList} onClick={handleClick} />
        <PortfolioItems portfolios={data} />
      </section>
    </Layout>
  )
}