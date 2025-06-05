import React from 'react';

export type BlogProps = {
  description: React.ReactNode;
  imgSrc: string;
};

export default function Blog({ description, imgSrc }: BlogProps) {
  return (
    <div className='group w-[33%] h-[450px] overflow-hidden rounded-2xl relative'>
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
      <div className='absolute bottom-4 flex items-end justify-between w-full px-8'>
        {description}
      </div>
    </div>
  );
}
