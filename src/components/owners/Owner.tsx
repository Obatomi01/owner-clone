import React from 'react';

import styles from '../../styles/General.module.css';

export type OwnerProps = {
  owner: string;
  company: string;
  description: React.ReactNode;
  imgSrc: string;
};

export default function Owner({
  company,
  description,
  imgSrc,
  owner,
}: OwnerProps) {
  return (
    <div
      className={`${styles['images--carousel__owners']} relative overflow-hidden group cursor-pointer`}
    >
      <div
        className='absolute inset-0 bg-center bg-cover brightness-[0.7] transition-transform duration-500 ease-out          group-hover:scale-105'
        style={{ backgroundImage: `url(${imgSrc})`, borderRadius: '16px' }}
      />
      <div
        className={`${styles['carousel--content']} relative z-10 text-white p-8`}
      >
        <div>
          <h5 className='font-bold text-sm'>{owner}</h5>
          <p className='font-thin text-sm'>{company}</p>
        </div>

        <div>{description}</div>
      </div>
    </div>
  );
}
