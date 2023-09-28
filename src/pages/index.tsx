import { useRef } from "react"
import type ClientType from "types/Client"
import type ServiceItemType from "types/ServiceItem"
import type PortfolioType from "types/PortfolioItem"
import type TestimonyItemType from "types/TestimonyItem"
import type BlogItemType from "types/BlogItem"
import Layout from "@components/common/Layout"
import {
  Hero,
  Client,
  OurValues,
  Service,
  Portfolio,
  Testimony,
  Blog,
} from "@components/home"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import axios from "axios"
import Head from "next/head"

type HomepageProps = {
  clients: ClientType[]
  services: ServiceItemType[]
  portfolios: PortfolioType[]
  testimonies: TestimonyItemType[]
  blogs: BlogItemType[]
}

export const getStaticProps: GetStaticProps<{
  homepage: HomepageProps
}> = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/homepage`)
  const { data } = res.data

  if (!data.homepage) return { notFound: true }
  return { props: { homepage: data.homepage }, revalidate: 10 }
}

export default function HomePage({
  homepage,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const refClients = useRef<HTMLElement>(null)

  return (
    <Layout>
      <Head>
        <title>Hivemind | Home</title>
        <meta
          name="description"
          content="Discover the top services for enhancing your business's online presence and see how an incredible amount of customers are happy with them"
        />
      </Head>
      <Hero ref={refClients} />
      <Client clients={homepage.clients} ref={refClients} />
      <OurValues />
      <Service services={homepage.services} />
      <Portfolio portfolios={homepage.portfolios} />
      <Testimony testimonies={homepage.testimonies} />
      <Blog blogs={homepage.blogs} />
    </Layout>
  )
}
