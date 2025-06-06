import React from 'react';
import ArrowHoverButton from '../ArrowHoverButton';

import Play from '../../assets/icons/play.png';

export type OwnerReviewProps = {
  companyName: string;
  imgSrc: string;
  ownerName: string;
  description: React.ReactNode;
  review: string;
};

export default function OwnerReview({
  companyName,
  description,
  imgSrc,
  ownerName,
  review,
}: OwnerReviewProps) {
  return (
    <div className='h-[500px] sm:h-[600px] md:h-max bg-white rounded-2xl p-2 md:p-12 flex flex-col justify-between'>
      <div className='block md:hidden group h-[220px] sm:h-[350px] md:h-[400px] overflow-hidden rounded-2xl relative md:mb-8'>
        <div
          style={{
            backgroundImage: `url(${imgSrc})`,
            width: '100%',
            height: '100%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
          className='brightness-[0.7] transition-transform duration-500 ease-out group-hover:scale-105 cursor-pointer'
        ></div>
        <div className='absolute bottom-4 flex items-center justify-between w-full px-8'>
          <div>
            <p
              style={{
                color: '#fff',
                fontSize: '16px',
                fontWeight: '500',
              }}
            >
              See the story
            </p>
            <p
              style={{
                color: '#d6d6d6',
              }}
            >
              {companyName}
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
        </div>
      </div>

      <div className='flex flex-col md:flex-row md:justify-between gap-2 md:items-center md:gap-0'>
        <div>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
            {ownerName}
          </h1>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
            Owner at {companyName}
          </h1>
        </div>

        <div className='w-max'>
          <ArrowHoverButton text='See all reviews' isBlue />
        </div>
      </div>

      <div className='flex justify-between w-full md:mt-12'>
        <div className='flex flex-col justify-between md:w-[25%]'>
          <p className='hidden md:block'>"{review}"</p>
          <div>{description}</div>
        </div>

        <div className='hidden md:block group w-[65%] h-[400px] overflow-hidden rounded-2xl relative'>
          <div
            style={{
              backgroundImage: `url(${imgSrc})`,
              width: '100%',
              height: '100%',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
            className='brightness-[0.7] transition-transform duration-500 ease-out group-hover:scale-105 cursor-pointer'
          ></div>
          <div className='absolute bottom-4 flex items-center justify-between w-full px-8'>
            <div>
              <p
                style={{
                  color: '#fff',
                  fontSize: '16px',
                  fontWeight: '500',
                }}
              >
                See the story
              </p>
              <p
                style={{
                  color: '#d6d6d6',
                }}
              >
                {companyName}
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
          </div>
        </div>
      </div>
    </div>
  );
}
