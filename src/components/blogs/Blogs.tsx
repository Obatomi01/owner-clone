import styles from '../../styles/BeliefsAndBlogs.module.css';
import ArrowHoverButton from '../ArrowHoverButton';

import Owner10 from '../../assets/business-owner/owner-9.jpg';
import GoogleSearch from '../../assets/google-search.jpg';
import Notes from '../../assets/notes.jpg';

import Play from '../../assets/icons/play.png';

import type { BlogProps } from './Blog';
import Blog from './Blog';

type Props = {};

const blogs: BlogProps[] = [
  {
    description: (
      <>
        <div className='w-[70%]'>
          <p
            style={{
              color: '#fff',
              fontSize: '20px',
              fontWeight: '600',
            }}
          >
            3 ways to improve your restaurant's online presence
          </p>
        </div>

        <div className='bg-white rounded-full p-2'>
          <img
            src={Play}
            className='w-[16px] h-[16px]'
            style={{
              filter:
                'invert(0%) sepia(100%) saturate(7460%) hue-rotate(349deg) brightness(91%) contrast(109%)',
            }}
          />
        </div>
      </>
    ),
    imgSrc: GoogleSearch,
  },
  {
    description: (
      <p
        style={{
          color: '#fff',
          fontSize: '20px',
          fontWeight: '600',
        }}
      >
        Restaurant SEO is better than you think (3 big wins)
      </p>
    ),
    imgSrc: Notes,
  },
  {
    description: (
      <p
        style={{
          color: '#fff',
          fontSize: '20px',
          fontWeight: '600',
        }}
      >
        Buyer's Guide: The best restaurant management website builders
      </p>
    ),
    imgSrc: Owner10,
  },
];

export default function Blogs({}: Props) {
  return (
    <section className={`mt-[124px] flex-col ${styles['content--container']}`}>
      <div className='flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between lg:items-center w-full mb-12'>
        <div className='hidden lg:block'>
          <h2 className='md:text-4xl lg:text-5xl font-bold'>
            See our free guides on
          </h2>
          <h2 className='md:text-4xl lg:text-5xl font-bold'>
            growing your restaurant
          </h2>
        </div>

        <h2 className='text-3xl md:text-4xl font-bold'>
          See our free guides on growing your restaurant
        </h2>

        <div className='w-max'>
          <ArrowHoverButton isBlack text='Read the blog' />
        </div>
      </div>

      <div className='flex gap-4 flex-col lg:gap-0 lg:flex-row justify-between w-full'>
        {blogs.map((blog, index) => (
          <Blog key={index} {...blog} />
        ))}
      </div>
    </section>
  );
}
