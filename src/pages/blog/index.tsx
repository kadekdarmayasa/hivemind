import BlogItem from "@components/common/BlogItem"
import Layout from "@components/common/Layout"
import type BlogItemType from "types/BlogItem"
import Skeleton from "@components/common/Skeleton"
import { useCallback, useEffect, useRef, useState } from "react"
import axios from "axios"
import Head from "next/head"

export default function BlogPage() {
  const [hasMore, setHasMore] = useState<boolean>(false)
  const [page, setPage] = useState<number>(1)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [blogs, setBlogs] = useState<BlogItemType[]>([])
  const observer = useRef<IntersectionObserver>(null)

  const lastBlogElementRef = useCallback(
    (node: HTMLDivElement) => {
      observer.current?.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1)
        }
      })
      if (node) observer.current.observe(node)
    },
    [hasMore],
  )

  useEffect(() => {
    setIsLoading(true)

    axios.post("/api/blogs", { page }).then((response) => {
      setIsLoading(false)
      setHasMore(response.data.hasMore)
      setBlogs((prevBlogs) => [...prevBlogs, ...response.data.blogs])
    })
  }, [page])

  return (
    <Layout>
      <Head>
        <title>Hivemind | Blog</title>
        <meta
          name="description"
          content="Providing informations that related with how to thrive your business in the digital age"
        />
      </Head>
      <section className="relative mt-10 grid grid-cols-12 grid-flow-dense sm:gap-x-8 gap-y-10">
        {blogs.map((blog, index) => {
          if (blogs.length === index + 1) {
            return (
              <BlogItem
                ref={lastBlogElementRef}
                key={blog.id}
                blog={blog}
                contentWidth={index === 0 ? "large" : "default"}
                index={[2, 0, 1][index % 3]}
                isGridItem
              />
            )
          }

          return (
            <BlogItem
              key={blog.id}
              blog={blog}
              contentWidth={index === 0 ? "large" : "default"}
              index={[2, 0, 1][index % 3]}
              isGridItem
            />
          )
        })}

        {isLoading &&
          Array.from({ length: 3 }).map((_, index) => (
            <Skeleton.BlogItem key={index} />
          ))}
      </section>
    </Layout>
  )
}
