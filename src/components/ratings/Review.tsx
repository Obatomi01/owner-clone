import FiveStars from '../../assets/icons/rating.png';
import styles from '../../styles/Ratings.module.css';

export type ReviewProps = {
  name: string;
  imgSrc: string;
  review: string;
  highlightBackground?: boolean;
};

export default function Review({
  imgSrc,
  name,
  review,
  highlightBackground,
}: ReviewProps) {
  return (
    <div
      className={`flex flex-col justify-between rounded-xl p-6 w-[300px] bg-white ${
        highlightBackground ? styles['review--fade-out'] : ''
      }`}
    >
      <img
        src={FiveStars}
        alt='rating'
        style={{
          width: '48px',
        }}
      />
      <div>
        <p className='text-sm font-semibold'>{review}</p>
      </div>

      <div className='flex items-center gap-2 mt-4'>
        <img
          src={imgSrc}
          alt='reviewer'
          style={{
            width: '24px',
            height: '24px',
            borderRadius: '100%',
          }}
        />
        <p className='text-sm font-semibold'>{name}</p>
      </div>
    </div>
  );
}
