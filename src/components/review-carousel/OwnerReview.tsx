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
    <div className='bg-white rounded-2xl p-12'>
      <div className='flex justify-between items-center'>
        <div>
          <h1 className='text-5xl font-bold'>{ownerName}</h1>
          <h1 className='text-5xl font-bold'>Owner at {companyName}</h1>
        </div>

        <ArrowHoverButton isBlack text='See all reviews' />
      </div>

      <div className='flex justify-between w-full mt-12'>
        <div className='flex flex-col justify-between w-[25%]'>
          <p>"{review}"</p>
          <div>{description}</div>
        </div>

        <div className='group w-[65%] h-[400px] overflow-hidden rounded-2xl relative'>
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
