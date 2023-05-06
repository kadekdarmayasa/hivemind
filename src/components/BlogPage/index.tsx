import type { BlogItemProps } from "types/BlogItem";
import { IconContext } from 'react-icons';
import { IoChevronForwardOutline } from 'react-icons/io5';
import Button from "components/Button";
import BlogItem from "components/Blog/BlogItem";

export default function BlogPage({ blogs }: { blogs: BlogItemProps[] }): JSX.Element {
  const blogItems = [];

  return (
    <section className="mt-14">
      {blogs.map((blog, index) => {
        if (index === 0) {
          return (
            <div className="flex gap-10">
              <div className="flex flex-1">
                <img src={blog.imagePath} alt={blog.title} className="w-full h-full rounded-lg" />
              </div>
              <div className="flex flex-1 flex-col items-start justify-center">
                <div className='flex'>
                  <small className='block bg-[#E8EAFF] text-palatinate-blue px-6 text-center py-2 mr-4 rounded-full'>{blog.publishedDate}</small>
                  <small className='block bg-[#E8EAFF] text-palatinate-blue px-6 text-center py-2 rounded-full'>{blog.author}</small>
                </div>
                <h1 className="heading-1">{blog.title}</h1>
                <p className="text-brave-purple font-normal text-xl leading-9 mt-3">{blog.shortDescription}</p>

                <Button type='link' href={`/blog/${blog._id}`} classNames={['relative', 'group', 'mt-6']}>
                  <span className='text-lg'>Read more</span>
                  <IconContext.Provider value={{ size: '1.3em', className: 'mt-[2px] ml-1 group-hover:ml-2 transition-all', color: '#2B3BE5' }}>
                    <IoChevronForwardOutline />
                  </IconContext.Provider>
                  <div className='absolute h-[2px] rounded-lg w-0 left-0 group-hover:w-full -bottom-1 opacity-0 group-hover:opacity-100 transition-all bg-palatinate-blue'></div>
                </Button>
              </div>
            </div>
          );
        } else {
          blogItems.push(<BlogItem blog={blog} />);
        }
      })}

      <div className="flex flex-wrap gap-7 justify-center mt-12">
        {blogItems.map((blog, index) => {
          return blog;
        })}
      </div>
    </section>
  )
}