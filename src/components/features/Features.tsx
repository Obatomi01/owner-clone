import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import Background1 from '../../assets/features-background/blue-background.jpg';
import Background2 from '../../assets/features-background/cream-background.jpg';
import Background3 from '../../assets/features-background/fruit-background.jpg';
import Background4 from '../../assets/features-background/hand-on-phone.jpg';

import BlueRightImage from '../../assets/features-background/blue-right-image.png';

import ArrowNext from '../../assets/icons/arrow-right.png';
import ArrowBack from '../../assets/icons/back.png';
import styles from '../../styles/ReviewCarousel.module.css';

import type { FeatureProps } from './Feature';
import Feature from './Feature';
import MobileFeatureSlider from './MobileFeatureSlider';

interface CarouselItem {
  id: number;
  title: string;
  content: FeatureProps;
}

const items: CarouselItem[] = [
  {
    id: 1,
    title: 'More Repeat Orders',
    content: {
      rightImage: BlueRightImage,
      backgroundimage: Background1,
      description: 'Owner uses smart follow-ups that grow your repeat orders',
      title: 'Create more regulars',
    },
  },
  {
    id: 2,
    title: 'More Online Sales',
    content: {
      rightImage:
        'https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/680a178dea2dba19951bf646_abc3446dbd78d9103d75cafb2dcfa96d_online-ordering_item-1.avif',
      backgroundimage: Background3,
      description:
        'Grow sales with ordering that feels just like the big brands',
      title: 'Boost your orders',
    },
  },
  {
    id: 3,
    title: 'More Google Traffic',
    content: {
      rightImage:
        'https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/68099508c0154cdc49f8c9b7_a576e66e2a76a448f0c997ba69bd8d8f_ai-website_item-2.avif',
      backgroundimage: Background2,
      description: 'With Owner, your website gets way more Google traffic',
      title: 'Upgrade your SEO',
    },
  },
  {
    id: 4,
    title: 'More App Downloads',
    content: {
      rightImage: '',
      backgroundimage: Background4,
      description: 'Give guests points when they use your branded mobile app',
      title: 'Reward your guests',
    },
  },
];

const Features = () => {
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
    }, 5000);

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

  // Modified navigation functions with validation
  const goToPrevious = () => {
    if (isAnimating || currentIndex === 0 || !items?.length) return; // Don't proceed if already at first slide
    goToSlide(currentIndex - 1);
  };

  const goToNext = () => {
    if (isAnimating || currentIndex === items.length - 1 || !items?.length)
      return; // Don't proceed if already at last slide
    goToSlide(currentIndex + 1);
  };

  return (
    <div className='mx-auto mt-[144px] md:w-[90%] lg:w-[1000px] xl:w-[1200px]'>
      <div>
        <h2 className='text-4xl font-bold text-center mx-auto'>
          With Owner, you get more traffic,
        </h2>
        <h2 className='text-4xl font-bold mb-6 text-center mx-auto'>
          more sales, more repeat customers
        </h2>
      </div>

      <div className='hidden lg:grid grid-flow-col auto-cols-[90%] gap-4 lg:grid-cols-4 lg:auto-cols-auto mb-8'>
        {items.map((item, index) => (
          <div key={item.id} className='flex flex-col'>
            <button
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
              className={`transition-all duration-300 py-4 ${
                getButtonState(index) ? 'text-black' : 'text-[#999]'
              } hover:text-black cursor-pointer flex`}
            >
              <span className='text-lg font-semibold text-gray-300 mr-2'>
                {index + 1}
              </span>
              <span className='font-medium truncate text-lg '>
                {item.title}
              </span>
            </button>

            <div className='w-full bg-gray-200 rounded-full h-1'>
              <div
                key={`${progressKey}-${index}`}
                className={`h-1 bg-black rounded-full transition-all ease-linear ${
                  isAutoScrolling && !isAnimating && getButtonState(index)
                    ? 'animate-progress'
                    : 'w-0'
                }`}
              />
            </div>
          </div>
        ))}
      </div>

      <div
        className='hidden lg:block relative h-[600px] overflow-hidden'
        style={{ borderRadius: '48px' }}
      >
        <motion.div
          className='flex h-full w-full'
          style={{ width: `${items.length * 100}%` }}
          animate={{ x: `-${currentIndex * (100 / items.length)}%` }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className='w-full h-full flex-shrink-0'
              style={{ width: `${100 / items.length}%` }}
            >
              <Feature {...item.content} />
            </div>
          ))}
        </motion.div>
      </div>

      <MobileFeatureSlider
        items={items}
        getButtonState={getButtonState}
        isAutoScrolling={isAutoScrolling}
        isAnimating={isAnimating}
        progressKey={progressKey}
        currentIndex={currentIndex}
        setCurrentIndex={(index) => {
          // Only update if it's a valid manual change (not from auto-scroll)
          if (index !== currentIndex && !isAnimating) {
            setCurrentIndex(index);
            setTargetIndex(index);
            setProgressKey((prev) => prev + 1);
            setIsAutoScrolling(false);
            setIsAnimating(true);

            setTimeout(() => {
              setIsAnimating(false);
              setIsAutoScrolling(true);
              setProgressKey((prev) => prev + 1);
            }, 1000);
          }
        }}
      />

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
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
        
        .animate-progress {
          animation: progress 5s linear;
        }
      `}</style>
    </div>
  );
};

export default Features;
