import Button from 'components/Button';
import { IconContext } from 'react-icons';
import { IoArrowForwardSharp } from 'react-icons/io5';
import type { BlogItemProps } from 'types/BlogItem';

export default function BlogItem({ blog }: { blog: BlogItemProps }): JSX.Element {
  return (
    <div className='h-[auto] w-[360px] bg-white rounded-xl relative blog-item'>
      <div className='h-[170px] w-full overflow-hidden rounded-t-xl'>
        <img src={blog.imageId} alt={blog.title} className='h-full w-full object-cover' />
      </div>

      <div className='px-6 py-6'>
        <div className='flex'>
          <small className='text-palatinate-blue text-sm text-center mr-4 rounded-full'>{blog.publishedDate}</small>
          <small className='text-palatinate-blue text-sm text-center rounded-full'>{blog.author}</small>
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
  );
}