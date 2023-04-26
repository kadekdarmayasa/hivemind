import Button from 'components/Button';
import { IconContext } from 'react-icons';
import { IoChevronForwardOutline } from 'react-icons/io5';
import PropTypes from 'prop-types';

export default function BlogItem({ blog }) {
  return (
    <div className='h-[auto] w-[360px] bg-white rounded-xl relative'>
      <div className='h-[170px] w-full overflow-hidden rounded-t-xl'>
        <img src={blog.imagePath} alt="" className='h-full w-full object-cover' />
      </div>

      <div className='px-6 py-6'>
        <div className='flex'>
          <small className='block bg-[#E8EAFF] text-palatinate-blue px-6 text-center py-2 mr-4 rounded-full'>{blog.publishedDate}</small>
          <small className='block bg-[#E8EAFF] text-palatinate-blue px-6 text-center py-2 rounded-full'>{blog.author}</small>
        </div>

        <h3 className='heading-3 mt-6'>{blog.title}</h3>
        <p className='text-brave-purple max-w-full font-light text-lg leading-8 mt-3 mb-14'>{blog.shortDescription}</p>

        <Button type='link' href={`/blog/${blog._id}`} classNames='absolute bottom-5 group'>
          <span className='text-lg'>Read more</span>
          <IconContext.Provider value={{ size: '1.3em', className: 'mt-[2px] ml-1 group-hover:ml-2 transition-all', color: '#2B3BE5' }}>
            <IoChevronForwardOutline />
          </IconContext.Provider>
          <div className='absolute h-[2px] rounded-lg w-0 left-0 group-hover:w-full -bottom-1 opacity-0 group-hover:opacity-100 transition-all bg-palatinate-blue'></div>
        </Button>
      </div>
    </div>
  );
}

BlogItem.propTypes = {
  blog: PropTypes.object
}