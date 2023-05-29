import React, { useMemo } from 'react';
import Button from '@components/Button';
import { IconContext } from 'react-icons';
import { IoArrowForwardSharp } from 'react-icons/io5';
import type { BlogItemProps } from 'types/BlogItem';
import Image from 'next/image';

export default function BlogItem({
  blog,
  contentWidth = 'default',
  isGridItem = false,
}: {
  blog: BlogItemProps;
  contentWidth?: 'large' | 'default';
  isGridItem?: boolean;
}) {
  const iconProps = useMemo(
    () => ({
      size: '1.3em',
      className: 'mt-[2px] ml-1 group-hover:ml-2 transition-all',
      color: '#2B3BE5',
    }),
    [],
  );

  if (isGridItem && contentWidth === 'large') {
    return (
      <div className="flex gap-10 w-full col-span-12">
        <div className="flex flex-1">
          <Image
            width={500}
            height={350}
            src={blog.imageId}
            alt={blog.title}
            className="w-full h-full rounded-lg"
          />
        </div>

        <div className="flex flex-1 flex-col items-start justify-center">
          <div className="flex">
            <small className="text-palatinate-blue text-sm mr-4 rounded-full">
              {blog.publishedDate}
            </small>
            <small className="text-palatinate-blue text-sm rounded-full">
              {blog.author}
            </small>
          </div>

          <h1 className="heading-1">{blog.title}</h1>
          <p className="text-brave-purple font-normal text-xl leading-9 mt-3">
            {blog.briefDescription}
          </p>

          <Button
            type="link"
            href={`/blog/${blog.id}`}
            className="relative group mt-6"
          >
            <span className="text-lg">Read more</span>
            <IconContext.Provider value={iconProps}>
              <IoArrowForwardSharp />
            </IconContext.Provider>
            <div className="absolute h-[2px] rounded-lg w-0 left-0 group-hover:w-full -bottom-1 opacity-0 group-hover:opacity-100 transition-all bg-palatinate-blue" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`h-[auto] bg-white rounded-xl relative blog-item ${
        isGridItem ? 'col-span-4' : 'w-[360px]'
      }`}
    >
      <div className="h-[170px] w-full overflow-hidden rounded-t-xl">
        <Image
          src={blog.imageId}
          alt={blog.title}
          width={300}
          height={200}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="px-6 py-10">
        <div className="flex">
          <small className="text-palatinate-blue text-sm text-center mr-4 rounded-full">
            {blog.publishedDate}
          </small>
          <small className="text-palatinate-blue text-sm text-center rounded-full">
            {blog.author}
          </small>
        </div>

        <h3 className="heading-3 mt-6">{blog.title}</h3>

        <p className="text-brave-purple max-w-full font-light text-lg leading-8 mt-3 mb-16">
          {blog.briefDescription}
        </p>

        <Button
          type="link"
          href={`/blog/${blog.id}`}
          className="absolute bottom-10 group"
        >
          <span className="text-lg">Read more</span>
          <IconContext.Provider value={iconProps}>
            <IoArrowForwardSharp />
          </IconContext.Provider>
          <div
            className="absolute h-[2px] rounded-lg w-0 left-0 group-hover:w-full -bottom-1
              opacity-0 group-hover:opacity-100 transition-all bg-palatinate-blue"
          />
        </Button>
      </div>
    </div>
  );
}
