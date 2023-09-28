import { motion } from "framer-motion"
import { Ref, forwardRef } from "react"
import { IconContext } from "react-icons"
import { IoArrowForwardSharp } from "react-icons/io5"
import type BlogItemType from "types/BlogItem"
import {
  commonMotionProps,
  fadeVariants,
  transformVariants,
} from "@utils/motion"
import Link from "next/link"
import Image from "next/image"

type BlogItemProps = {
  blog: BlogItemType
  contentWidth?: "large" | "default"
  isGridItem?: boolean
  index?: number
}

const arrowForwardIconProps: IconContext = {
  size: "1.3em",
  className: "mt-[2px] ml-1 group-hover:ml-2 transition-all",
  color: "#2B3BE5",
}

const BlogItem = forwardRef(
  (props: BlogItemProps, ref: Ref<HTMLDivElement>) => {
    const {
      blog: { title, description, thumbnail, publishedAt, author, slug },
      contentWidth = "default",
      isGridItem = false,
      index = 0,
    } = props

    const renderDefault = () => (
      <div className="h-[auto] bg-white rounded-xl relative blog-item w-[310px] sm:w-[360px] blog-item">
        <div className="h-[170px] w-full overflow-hidden rounded-t-xl">
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}/images/${thumbnail}`}
            alt={title}
            width={300}
            height={200}
            className="h-full w-full object-cover"
            crossOrigin="anonymous"
          />
        </div>

        <div className="px-6 py-10">
          <div className="flex">
            <small className="text-palatinate-blue text-sm text-center mr-4 rounded-full">
              {publishedAt}
            </small>
            <small className="text-palatinate-blue text-sm text-center rounded-full">
              {author.username}
            </small>
          </div>

          <h3 className="heading-3 mt-6">{title}</h3>

          <p className="text-brave-purple max-w-full font-light text-lg leading-8 mt-3 mb-16 overview-text">
            {description}
          </p>

          <Link
            href={`/blog/${slug}`}
            className="absolute bottom-10 group flex justify-center items-center text-palatinate-blue"
          >
            {" "}
            <span className="text-lg">Read more</span>
            <IconContext.Provider value={arrowForwardIconProps}>
              <IoArrowForwardSharp />
            </IconContext.Provider>
            <div
              className="absolute h-[2px] rounded-lg w-0 left-0 group-hover:w-full -bottom-1
          opacity-0 group-hover:opacity-100 transition-all bg-palatinate-blue"
            />
          </Link>
        </div>
      </div>
    )

    const renderGridLarge = () => (
      <motion.div
        ref={ref}
        {...commonMotionProps}
        variants={fadeVariants("linear")}
        custom={index}
        className="flex flex-col lg:flex-row gap-10 w-full col-span-12 blog-item"
      >
        <motion.div
          {...commonMotionProps}
          variants={fadeVariants("linear")}
          className="flex flex-1"
        >
          <Image
            width={500}
            height={350}
            src={`${process.env.NEXT_PUBLIC_API_URL}/images/${thumbnail}`}
            alt={title}
            className="w-full h-full rounded-lg"
            crossOrigin="anonymous"
          />
        </motion.div>

        <div className="flex flex-1 flex-col items-start justify-center">
          <div className="flex">
            <motion.small
              {...commonMotionProps}
              variants={transformVariants("linear")}
              className="text-palatinate-blue text-base mr-4 rounded-full"
            >
              {publishedAt}
            </motion.small>
            <motion.small
              {...commonMotionProps}
              variants={transformVariants("linear")}
              custom={1}
              className="text-palatinate-blue text-base rounded-full"
            >
              {author.username}
            </motion.small>
          </div>

          <motion.h1
            {...commonMotionProps}
            variants={transformVariants("linear")}
            className="heading-2 sm:heading-1"
          >
            {title}
          </motion.h1>
          <motion.p
            {...commonMotionProps}
            variants={transformVariants("linear")}
            custom={1}
            className="text-brave-purple font-normal text-xl leading-9 mt-3"
          >
            {description}
          </motion.p>

          <Link
            href={`/blog/${slug}`}
            className="mt-5 group flex justify-center items-center text-palatinate-blue"
          >
            {" "}
            <span className="text-lg">Read more</span>
            <IconContext.Provider value={arrowForwardIconProps}>
              <IoArrowForwardSharp />
            </IconContext.Provider>
            <div
              className="absolute h-[2px] rounded-lg w-0 left-0 group-hover:w-full -bottom-1
          opacity-0 group-hover:opacity-100 transition-all bg-palatinate-blue"
            />
          </Link>
        </div>
      </motion.div>
    )

    const renderGridDefault = () => (
      <motion.div
        ref={ref}
        {...commonMotionProps}
        variants={transformVariants("linear")}
        custom={index}
        className="h-[auto] rounded-xl relative blog-item md:col-span-6 lg:col-span-4 col-span-12 blog-item"
      >
        <div className="h-[170px] w-full overflow-hidden rounded-t-xl">
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}/images/${thumbnail}`}
            alt={title}
            width={300}
            height={200}
            className="h-full w-full object-cover"
            crossOrigin="anonymous"
          />
        </div>

        <div className="px-2 py-6">
          <div className="flex">
            <small className="text-palatinate-blue text-sm text-center mr-4 rounded-full">
              {publishedAt}
            </small>
            <small className="text-palatinate-blue text-sm text-center rounded-full">
              {author.username}
            </small>
          </div>

          <h3 className="heading-3 mt-6">{title}</h3>

          <p className="text-brave-purple max-w-full font-light text-lg leading-8 mt-3 mb-16 overview-text">
            {description}
          </p>

          <Link
            href={`/blog/${slug}`}
            className="absolute bottom-10 group flex justify-center items-center text-palatinate-blue"
          >
            {" "}
            <span className="text-lg">Read more</span>
            <IconContext.Provider value={arrowForwardIconProps}>
              <IoArrowForwardSharp />
            </IconContext.Provider>
            <div
              className="absolute h-[2px] rounded-lg w-0 left-0 group-hover:w-full -bottom-1
          opacity-0 group-hover:opacity-100 transition-all bg-palatinate-blue"
            />
          </Link>
        </div>
      </motion.div>
    )

    if (isGridItem && contentWidth === "large") return renderGridLarge()
    if (isGridItem && contentWidth === "default") return renderGridDefault()
    return renderDefault()
  },
)

export default BlogItem
