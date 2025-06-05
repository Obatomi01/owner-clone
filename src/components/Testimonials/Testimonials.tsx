import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css/pagination';
import 'swiper/css';

import styles from '../../styles/Testimonials.module.css';
import Testimony from './Testimony';

import type { TestimonyProps } from './Testimony';

import Owner1 from '../../assets/business-owner/owner-8.jpg';
import Owner2 from '../../assets/business-owner/owner-7.jpg';
import Owner3 from '../../assets/business-owner/owner-6.jpg';
import Owner4 from '../../assets/business-owner/owner-10.jpg';
import Owner5 from '../../assets/business-owner/owner-4.jpg';

const testimonials: TestimonyProps[] = [
  {
    description: (
      <div className='flex gap-6'>
        <div>
          <h3 className='text-3xl font-semibold'>+54%</h3>
          <p className='text-sm'>Sales growth</p>
        </div>

        <div>
          <h3 className='text-3xl font-semibold'>+377%</h3>
          <p className='text-sm'>Growth</p>
        </div>
      </div>
    ),
    firstName: 'Fernando',
    company: 'Sushi Addicts',
    imgSrc: Owner1,
    name: 'Fernando Izaguirre',
    review:
      'You guys are amazing! I never thought I could have a restaurant app like the big brands.I think it was up and running in less than a week!',
  },
  {
    description: (
      <div className='flex gap-4'>
        <div>
          <h3 className='text-3xl font-semibold'>+$104,000</h3>
          <p className='text-sm'>Online Sales</p>
        </div>

        <div>
          <h3 className='text-3xl font-semibold'>$21,000</h3>
          <p className='text-sm'>Savings in third-party fees</p>
        </div>
      </div>
    ),
    firstName: 'Jessica',
    company: 'Urban Brew',
    imgSrc: Owner2,
    name: 'Jessica Lee',
    review: 'Incredible results! Our customer base has doubled.',
  },
  {
    description: (
      <div className='flex gap-4'>
        <div>
          <h3 className='text-3xl font-semibold'>+200%</h3>
          <p className='text-sm'>Online orders</p>
        </div>

        <div>
          <h3 className='text-3xl font-semibold'>+300%</h3>
          <p className='text-sm'>Customer retention rate</p>
        </div>
      </div>
    ),
    firstName: 'Michael',
    company: 'Tech Haven',
    imgSrc: Owner3,
    name: 'Michael Chen',
    review:
      'The app is fantastic! It’s like having a mini restaurant in my pocket.',
  },
  {
    description: (
      <div className='flex gap-4'>
        <div>
          <h3 className='text-3xl font-semibold'>+400%</h3>
          <p className='text-sm'>Online reviews in 6 months</p>
        </div>

        <div>
          <h3 className='text-3xl font-semibold'>+50%</h3>
          <p className='text-sm'>Customer satisfaction ratings</p>
        </div>
      </div>
    ),
    firstName: 'Priya',
    company: 'Spice Route',
    imgSrc: Owner4,
    name: 'Priya Patel & Rajesh Kumar',
    review:
      'Our online presence has never been stronger. The app is user-friendly and efficient.',
  },
  {
    description: (
      <div className='flex gap-4'>
        <div>
          <h3 className='text-3xl font-semibold'>+72,000</h3>
          <p className='text-sm'>Online Sales</p>
        </div>
        <div>
          <h3 className='text-3xl font-semibold'>$19,000</h3>
          <p className='text-sm'>Growth year-over-year</p>
        </div>
      </div>
    ),
    firstName: 'Lucas',
    company: 'Green Eats',
    imgSrc: Owner5,
    name: 'Lucas Martin',
    review: 'The app has transformed our business. It’s a game-changer!',
  },
];

export default function Testimonials() {
  return (
    <div className={styles.wrapper}>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1.3}
        centeredSlides
        loop
        spaceBetween={30}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          el: '.custom-pagination',
          clickable: true,
        }}
        className={styles.swiper}
      >
        {testimonials.map((testimony, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div
                className={`${styles.slide} ${
                  isActive ? styles.active : styles.inactive
                }`}
              >
                <Testimony {...testimony} />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={`custom-pagination ${styles.paginationContainer}`} />
    </div>
  );
}
