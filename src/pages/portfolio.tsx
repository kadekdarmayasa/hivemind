import Layout from "components/Layout";
import useSWR from 'swr';
import axios from "axios";
import type { PortfolioProps } from "types/Portfolio";
import { Header, CategoryList, PortfolioItems } from "components/PortfolioPage";
import { useAppSelector } from "redux/hooks";
import { selectedStatus } from "slices/dropdownSlice";

const fetcher = (url: string) => axios.get(url).then(response => response.data);

export default function PortfolioPage(): JSX.Element | false {
  const { data, error, isLoading } = useSWR<PortfolioProps[], Error>('/api/portfoliopage', fetcher);
  const dropdownStatus = useAppSelector(selectedStatus);

  if (error || isLoading) return false;
  const categoryList = data.map(portfolio => portfolio.serviceCategory);

  return (
    <Layout title="Hivemind - Portfolio">
      <section className={`mt-14 relative ${dropdownStatus === 'open' ? '-z-10' : 'z-0'}`}>
        <Header title="Hivemind Portfolio" />
        <CategoryList categoryList={categoryList} />
        <PortfolioItems portfolios={data} />
      </section>
    </Layout>
  )
}