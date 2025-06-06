import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState, useCallback } from 'react';
import styles from '../../styles/ReviewCarousel.module.css';

import Owner1 from '../../assets/business-owner/owner-1.jpeg';
import Owner2 from '../../assets/business-owner/owner-4.jpg';
import Owner3 from '../../assets/business-owner/owner-3.jpg';

import ArrowNext from '../../assets/icons/arrow-right.png';
import ArrowBack from '../../assets/icons/back.png';

import type { OwnerReviewProps } from './OwnerReview';
import OwnerReview from './OwnerReview';
import Testimonials from '../Testimonials/Testimonials';

const items: OwnerReviewProps[] = [
  {
    companyName: 'Sushi Addicts',
    imgSrc: Owner1,
    ownerName: 'Fernando Izaguirre',
    description: (
      <div className='flex lg:flex-col gap-4'>
        <div>
          <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold'>+54%</h3>
          <p className='text-sm'>Sales growth and switching to owner</p>
        </div>

        <div>
          <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold'>11,000</h3>
          <p className='text-sm'>
            Installs of their new mobile app, created with owner.
          </p>
        </div>
      </div>
    ),
    review: 'Amazing service! Our online orders skyrocketed.',
  },
  {
    companyName: 'Urban Brew',
    imgSrc: Owner3,
    ownerName: 'Jessica Lee',
    description: (
      <div className='flex lg:flex-col gap-4'>
        <div>
          <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
            +$104,000
          </h3>
          <p className='text-sm'>Online Slaes</p>
        </div>

        <div>
          <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
            $21,000
          </h3>
          <p className='text-sm'>Savings in third-party fees</p>
        </div>
      </div>
    ),
    review: 'Incredible results! Our customer base has doubled.',
  },
  {
    companyName: 'Tech Haven',
    imgSrc: Owner2,
    ownerName: 'Michael Chen',
    description: (
      <div className='flex lg:flex-col gap-4'>
        <div>
          <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
            +$72,000
          </h3>
          <p className='text-sm'>Online Slaes</p>
        </div>

        <div>
          <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
            $19,000
          </h3>
          <p className='text-sm'>Savings in third-party fees</p>
        </div>
      </div>
    ),
    review: 'Expansion was seamless, thanks to the support!',
  },
];

export default function ReviewCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const updateSelectedIndex = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    updateSelectedIndex();
    emblaApi.on('select', updateSelectedIndex);
  }, [emblaApi, updateSelectedIndex]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  const prevIndex = (selectedIndex - 1 + items.length) % items.length;
  const nextIndex = (selectedIndex + 1) % items.length;

  return (
    <section
      className={`flex flex-col items-center space-y-4 ${styles['review--carousel__container']}`}
    >
      <div className='overflow-hidden w-full max-w-[1200px]' ref={emblaRef}>
        <div className='flex'>
          {items.map((item, index) => (
            <div className='min-w-full px-4' key={index}>
              <OwnerReview {...item} />
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-center lg:justify-between w-full max-w-[1200px] px-16 items-center'>
        <button
          onClick={scrollPrev}
          className={`flex items-center gap-2 p-2 rounded-2xl transition-colors hover:bg-[#090a0b12] cursor-pointer ${styles['prev-arrow']}`}
        >
          <div
            className={`${styles['arrow--background']} ${styles['active--arrow']}`}
          >
            <img src={ArrowBack} alt='Previous' />
          </div>
          <p className='hidden lg:block'>
            Previous{' '}
            <span className='font-medium text-[#000]'>
              {items[prevIndex].companyName}
            </span>
          </p>
        </button>

        <button
          onClick={scrollNext}
          className={`flex items-center gap-2 p-2 rounded-2xl transition-colors hover:bg-[#090a0b12] cursor-pointer ${styles['next-arrow']}`}
        >
          <p className='hidden lg:block'>
            Next{' '}
            <span className='font-medium text-[#000]'>
              {items[nextIndex].companyName}
            </span>
          </p>{' '}
          <div
            className={`${styles['arrow--background']} ${styles['active--arrow']}`}
          >
            <img src={ArrowNext} alt='Next' />
          </div>
        </button>
      </div>

      <Testimonials />
    </section>
  );
}
