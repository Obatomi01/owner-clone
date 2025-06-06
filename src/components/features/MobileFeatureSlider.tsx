import { useRef, useEffect, useState } from 'react';
import styles from '../../styles/ReviewCarousel.module.css';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Feature from './Feature';
import ArrowNext from '../../assets/icons/arrow-right.png';
import ArrowBack from '../../assets/icons/back.png';

import type { FeatureProps } from './Feature';

type Props = {
  items: Array<{
    id: number;
    title: string;
    content: FeatureProps;
  }>;
};

const MobileFeatureSlider = ({ items }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [targetIndex, setTargetIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const goToFirst = () => {
    if (currentIndex === 0 || !items?.length) return;

    setIsAutoScrolling(false);
    setCurrentIndex(0);
    setTargetIndex(0);
    setProgressKey((prev) => prev + 1);
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
      setIsAutoScrolling(true);
      setProgressKey((prev) => prev + 1);
    }, 1000);
  };

  useEffect(() => {
    if (window.innerWidth < 1024) {
      const activeButton = buttonRefs.current[currentIndex];
      activeButton?.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [currentIndex]);

  useEffect(() => {
    if (!isAutoScrolling || isAnimating || !items?.length) return;

    const interval = setInterval(() => {
      if (currentIndex >= items.length - 1) {
        goToFirst();
      } else {
        setCurrentIndex((prev) => prev + 1);
        setTargetIndex((prev) => prev + 1);
        setProgressKey((prev) => prev + 1);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoScrolling, currentIndex, isAnimating, items?.length]);

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex || !items?.length) return;

    setIsAutoScrolling(false);
    setTargetIndex(index);
    setCurrentIndex(index);
    setProgressKey((prev) => prev + 1);
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
      setIsAutoScrolling(true);
      setProgressKey((prev) => prev + 1);
    }, 1000);
  };

  const getButtonState = (index: number) => {
    if (isAnimating) {
      return index === targetIndex;
    } else {
      return index === currentIndex;
    }
  };

  const goToPrevious = () => {
    if (isAnimating || currentIndex === 0 || !items?.length) return; // Don't proceed if already at first slide
    goToSlide(currentIndex - 1);
  };

  const goToNext = () => {
    if (isAnimating || currentIndex === items.length - 1 || !items?.length)
      return; // Don't proceed if already at last slide
    goToSlide(currentIndex + 1);
  };
  const sliderRef = useRef<Slider | null>(null);
  const isUserSwiping = useRef(false); // Track if user is manually swiping

  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    beforeChange: () => {
      // Set flag when user starts swiping
      isUserSwiping.current = true;
    },
    afterChange: (index: number) => {
      // Only update if this was a user-initiated swipe
      if (isUserSwiping.current) {
        setCurrentIndex(index);
        isUserSwiping.current = false; // Reset flag
      }
    },
  };

  useEffect(() => {
    // Only programmatically change slider if it's not a user swipe
    if (sliderRef.current && !isUserSwiping.current) {
      sliderRef.current.slickGoTo(currentIndex);
    }
  }, [currentIndex]);

  return (
    <div className='lg:hidden mb-10'>
      <Slider ref={sliderRef} {...settings}>
        {items.map((item, index) => (
          <div key={item.id} className='px-4'>
            <div className='mb-4'>
              <button
                disabled={isAnimating}
                className={`transition-all duration-300 py-4 w-full text-left ${
                  getButtonState(index) ? 'text-black' : 'text-[#999]'
                } hover:text-black cursor-pointer flex`}
              >
                <span className='text-lg font-semibold text-gray-300 mr-2'>
                  {index + 1}
                </span>
                <span className='font-medium truncate text-lg'>
                  {item.title}
                </span>
              </button>

              <div className='w-full bg-gray-200 rounded-full h-1'>
                <div
                  key={`${progressKey}-${index}`}
                  className={`h-1 bg-black rounded-full transition-all ease-linear ${
                    isAutoScrolling && !isAnimating && getButtonState(index)
                      ? 'mobile-animate-progress'
                      : 'w-0'
                  }`}
                />
              </div>
            </div>
            <div
              className='relative h-[600px] md:h-[400px] overflow-hidden'
              style={{ borderRadius: '24px' }}
            >
              <Feature {...item.content} />
            </div>
          </div>
        ))}
      </Slider>

      <div className='flex justify-center lg:justify-between mt-6 px-10'>
        <button
          onClick={goToPrevious}
          className={`flex items-center gap-2 p-2 rounded-4xl transition-colors hover:bg-[#090a0b12] cursor-pointer ${styles['prev-arrow']}`}
        >
          <div
            className={`${
              currentIndex === 0
                ? styles['inactive--arrow']
                : styles['active--arrow']
            } ${styles['arrow--background']}`}
          >
            <img src={ArrowBack} alt='Previous' />
          </div>
          <span
            className={`${
              currentIndex === 0 ? 'text-gray-400' : 'text-black'
            } hidden lg:block`}
          >
            Previous
          </span>
        </button>

        <button
          onClick={goToNext}
          className={`flex items-center gap-2 p-2 rounded-4xl transition-colors hover:bg-[#090a0b12] cursor-pointer ${styles['next-arrow']}`}
        >
          <span
            className={`${
              currentIndex === items.length - 1 ? 'text-gray-400' : 'text-black'
            } hidden lg:block`}
          >
            Next
          </span>
          <div
            className={`${
              currentIndex === items.length - 1
                ? styles['inactive--arrow']
                : styles['active--arrow']
            } ${styles['arrow--background']}`}
          >
            <img src={ArrowNext} alt='Next' />
          </div>
        </button>
      </div>

      <style>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        .mobile-animate-progress {
          animation: progress 3s linear;
        }
      `}</style>
    </div>
  );
};

export default MobileFeatureSlider;
