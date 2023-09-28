import axios from "axios"
import { useEffect, useState, useCallback, useRef } from "react"
import type PortfolioItemType from "types/PortfolioItem"
import { DEFAULT_SERVICE_ID } from "@constants/index"
import Layout from "@components/common/Layout"
import Skeleton from "@components/common/Skeleton"
import { CategoryList, Items } from "@components/portfolio"
import Head from "next/head"

function PortfolioPage() {
  const [serviceId, setServiceId] = useState<string>(DEFAULT_SERVICE_ID)
  const [page, setPage] = useState<number>(1)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [hasMore, setHasMore] = useState<boolean>(true)
  const [portfolios, setPortfolios] = useState<PortfolioItemType[]>([])
  const observer = useRef<IntersectionObserver>(null)

  const lastPortfolioElementRef = useCallback(
    (node: HTMLElement) => {
      observer.current?.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        entries[0].isIntersecting &&
          hasMore &&
          setPage((prevPage) => prevPage + 1)
      })
      node && observer.current.observe(node)
    },
    [hasMore],
  )

  useEffect(() => {
    setPage(1)
    setHasMore(false)
    setPortfolios([])
  }, [serviceId])

  useEffect(() => {
    setIsLoading(true)

    axios
      .post("/api/portfolios", {
        page,
        serviceId,
      })
      .then((response) => {
        if (response.data.portfolios.length > 0) {
          setPortfolios((prevState) => [
            ...prevState,
            ...response.data.portfolios,
          ])
        }
        setHasMore(response.data.hasMore)
        setIsLoading(false)
      })
  }, [page, serviceId])

  return (
    <Layout>
      <Head>
        <title>Hivemind | Portfolio</title>
        <meta name="description" content="Discover what we have done so far." />
      </Head>
      <section className="mt-14 relative">
        <h1 className="heading-1 text-center">Hivemind&apos;s Portfolios</h1>
        <CategoryList onClick={(id: string) => setServiceId(id)} />
        <Items
          ref={lastPortfolioElementRef}
          isLoading={isLoading}
          portfolios={portfolios}
        />
        {isLoading && <Skeleton.PortfolioItem />}
      </section>
    </Layout>
  )
}

export default PortfolioPage
