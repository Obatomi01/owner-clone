import React from 'react';

import ArrowHoverButton from '../ArrowHoverButton';
import Play from '../../assets/icons/play.png';

export type TestimonyProps = {
  name: string;
  company: string;
  review: string;
  description: React.ReactNode;
  imgSrc: string;
  firstName: string;
};

export default function Testimony({
  company,
  description,
  name,
  imgSrc,
  review,
  firstName,
}: TestimonyProps) {
  return (
    <div className='md:w-[96vw] xl:w-[1200px] h-max md:h-[450px] flex justify-between flex-col md:flex-row bg-white rounded-4xl'>
      <div className='group w-[100%] md:w-[45%] xl:w-[40%] h-[450px] md:h-full overflow-hidden rounded-4xl relative'>
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
                fontSize: '20px',
                fontWeight: '600',
              }}
            >
              {name}
            </p>
            <p
              style={{
                color: '#999',
                fontSize: '20px',
                fontWeight: '600',
              }}
            >
              Owner of {company}
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

      <div className='md:w-[55%] xl:w-[60%] p-8 flex flex-col justify-between h-[430px] md:h-full'>
        <h3 className='text-2xl md:text-3xl font-bold'>"{review}"</h3>

        <div className='flex flex-col gap-2 lg:gap-0 lg:flex-row justify-between lg:items-center'>
          {description}

          <div className='w-max'>
            <ArrowHoverButton
              isBlack={false}
              text={`See ${firstName}'s story`}
              isCentered={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
