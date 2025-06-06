import { useRef, useEffect } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Feature from './Feature';

import type { FeatureProps } from './Feature';

type Props = {
  items: Array<{
    id: number;
    title: string;
    content: FeatureProps;
  }>;
  getButtonState: (index: number) => boolean;
  isAutoScrolling: boolean;
  isAnimating: boolean;
  progressKey: number;
};

const MobileFeatureSlider = ({
  items,
  getButtonState,
  isAutoScrolling,
  isAnimating,
  progressKey,
  currentIndex,
  setCurrentIndex,
}: Props & { currentIndex: number; setCurrentIndex: (i: number) => void }) => {
  const sliderRef = useRef<Slider | null>(null);
  const isUserSwiping = useRef(false); // Track if user is manually swiping

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
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
                      ? 'animate-progress'
                      : 'w-0'
                  }`}
                />
              </div>
            </div>
            <div
              className='relative h-[400px] overflow-hidden'
              style={{ borderRadius: '24px' }}
            >
              <Feature {...item.content} />
            </div>
          </div>
        ))}
      </Slider>
      <style>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        .animate-progress {
          animation: progress 5s linear;
        }
      `}</style>
    </div>
  );
};

export default MobileFeatureSlider;
