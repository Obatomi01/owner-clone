import { useEffect, useState } from 'react';

import styles from '../../styles/Hero.module.css';
import StarIcon from '../../assets/icons/star.png';
import Feature from './Feature';

type Props = {};

export default function PhoneContainer({}: Props) {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const startFadingAt = 120;
      const maxFadeDistance = 300;

      if (scrollY < startFadingAt) {
        setOpacity(1);
      } else {
        const fadeProgress = (scrollY - startFadingAt) / maxFadeDistance;
        const newOpacity = Math.max(1 - fadeProgress, 0.2);
        setOpacity(newOpacity);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        background: 'linear-gradient(to bottom, #f7f2e8, #fffdf8, #ffffff)',
        width: '100%',
        height: '100%',
      }}
      className='pt-[96px] md:pt-[156px]'
    >
      <div className='m-auto text-center mb-6'>
        <p
          style={{
            color: '#000',
            fontWeight: 'bold',
          }}
        >
          #1 Top-Rated Restaurant Software{' '}
          <span
            style={{
              color: '#999',
            }}
            className='hidden md:inline'
          >
            4.8{' '}
            <img
              src={StarIcon}
              style={{
                width: '16px',
                height: '16px',
                display: 'inline-block',
              }}
            />{' '}
            across 279 reviews
          </span>
        </p>
      </div>

      <h1 className='px-4 text-4xl md:text-6xl xl:text-7xl m-auto text-center md:w-[80%] xl:w-[65%] mb-12 font-bold md:p-0'>
        See where your restaurant is losing sales online
      </h1>

      <div className='flex justify-center gap-6'>
        <div style={{ opacity }}>
          <Feature text="See who's beating you on Google" isTop={false} />
        </div>

        <div className={styles['image-container']}>
          <img
            style={{ width: '100%' }}
            src='https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/680989a6a598aea4688dc28b_phone-status.svg'
          />
          <div style={{ paddingTop: '6px', height: '100%', width: '100%' }}>
            <div className={styles['container']}></div>
          </div>
        </div>

        <div style={{ opacity }}>
          <Feature text='See exactly what to fix' isTop={true} />
        </div>
      </div>
    </div>
  );
}
