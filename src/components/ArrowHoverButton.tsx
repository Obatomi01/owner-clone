import { useState } from 'react';

import ArrowRight from '../assets/icons/arrow-right.png';
import Next from '../assets/icons/next.png';
import styles from '../styles/General.module.css';

type Props = {
  text: string;
  isBlack?: boolean;
  isCentered?: boolean;
  isBlue?: boolean;
};

export default function ArrowHoverButton({
  isBlack,
  text,
  isCentered,
  isBlue,
}: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`flex items-center gap-2 px-4 py-2 ${
        isBlack
          ? 'bg-black text-white'
          : isBlue
          ? 'bg-[#015BF8] sm:bg-black text-white'
          : 'bg-[#00000014] hover:bg-[#00000029] text-black'
      } rounded-lg transition-all duration-300 ${
        isCentered ? 'm-auto' : ''
      } cursor-pointer ${styles['arrow--hover__button']}`}
    >
      <span className='font-semibold'>{text}</span>
      {hovered ? (
        <img
          src={ArrowRight}
          className='transition-transform duration-300 transform translate-x-1'
          style={{
            filter: isBlack
              ? 'invert(99%) sepia(92%) saturate(1%) hue-rotate(273deg) brightness(106%) contrast(100%)'
              : 'invert(0%) sepia(8%) saturate(7465%) hue-rotate(24deg) brightness(93%) contrast(96%)',
          }}
        />
      ) : (
        <img
          src={Next}
          className='transition-transform duration-300 transform translate-x-0'
          style={{
            filter:
              'invert(68%) sepia(5%) saturate(55%) hue-rotate(169deg) brightness(100%) contrast(82%)',
          }}
        />
      )}
    </button>
  );
}
