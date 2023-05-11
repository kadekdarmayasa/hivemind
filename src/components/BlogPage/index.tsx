import type { BlogItemProps } from "types/BlogItem";
import { IconContext } from 'react-icons';
import { IoArrowForwardSharp } from 'react-icons/io5';
import Button from "components/Button";
import Fade from 'react-reveal/Fade';
import { useAppSelector } from "redux/hooks";
import { selectedStatus } from "redux/slices/dropdownSlice";

export default function BlogPage({ blogs }: { blogs: BlogItemProps[] }): JSX.Element {
  const status = useAppSelector(selectedStatus);

  return (
    <section className={`relative mt-14 grid grid-cols-12 grid-flow-dense gap-x-5 gap-y-10 ${status === 'open' ? '-z-10' : 'z-0'}`}>
      {blogs.map((blog, index) => {
        if (index === 0) {
          return (
            <div className="flex gap-10 w-full col-span-12">
              <Fade>
                <div className="flex flex-1">
                  <img src={blog.imagePath} alt={blog.title} className="w-full h-full rounded-lg" />
                </div>
              </Fade>

              <div className="flex flex-1 flex-col items-start justify-center">
                <Fade up cascade>
                  <div className='flex'>
                    <small className='text-palatinate-blue text-sm mr-4 rounded-full'>{blog.publishedDate}</small>
                    <small className='text-palatinate-blue text-sm rounded-full'>{blog.author}</small>
                  </div>
                </Fade>

                <Fade up cascade>
                  <div>
                    <h1 className="heading-1">{blog.title}</h1>
                    <p className="text-brave-purple font-normal text-xl leading-9 mt-3">{blog.shortDescription}</p>
                  </div>
                </Fade>

                <Fade>
                  <Button type='link' href={`/blog/${blog._id}`} classNames={['relative', 'group', 'mt-6']}>
                    <span className='text-lg'>Read more</span>
                    <IconContext.Provider value={{ size: '1.3em', className: 'mt-[2px] ml-1 group-hover:ml-2 transition-all', color: '#2B3BE5' }}>
                      <IoArrowForwardSharp />
                    </IconContext.Provider>
                    <div className='absolute h-[2px] rounded-lg w-0 left-0 group-hover:w-full -bottom-1 opacity-0 group-hover:opacity-100 transition-all bg-palatinate-blue'></div>
                  </Button>
                </Fade>
              </div>
            </div>
          );
        } else {
          return (
            <Fade up delay={index <= 3 ? index * 300 : (index % 3) === 0 ? 3 * 300 : (index % 3) * 300}>
              <div className='h-[auto] w-full bg-white shadow-black-sm hover:shadow-black-md hover:scale-[1.02] transition-all rounded-xl relative blog-item col-span-4'>
                <div className='h-[170px] w-full overflow-hidden rounded-t-xl'>
                  <img src={blog.imagePath} alt="" className='h-full w-full object-cover' />
                </div>

                <div className='px-6 py-6'>
                  <div className='flex'>
                    <small className='text-palatinate-blue text-sm mr-4 rounded-full'>{blog.publishedDate}</small>
                    <small className='text-palatinate-blue text-sm rounded-full'>{blog.author}</small>
                  </div>

                  <h3 className='heading-3 mt-6'>{blog.title}</h3>
                  <p className='text-brave-purple max-w-full font-light text-lg leading-8 mt-3 mb-16'>{blog.shortDescription}</p>

                  <Button type='link' href={`/blog/${blog._id}`} classNames={['absolute', 'bottom-8', 'group']}>
                    <span className='text-lg'>Read more</span>
                    <IconContext.Provider value={{ size: '1.3em', className: 'mt-[2px] ml-1 group-hover:ml-2 transition-all', color: '#2B3BE5' }}>
                      <IoArrowForwardSharp />
                    </IconContext.Provider>
                    <div className='absolute h-[2px] rounded-lg w-0 left-0 group-hover:w-full -bottom-1 opacity-0 group-hover:opacity-100 transition-all bg-palatinate-blue'></div>
                  </Button>
                </div>
              </div>
            </Fade>
          )
        }
      })}
    </section>
  )
}