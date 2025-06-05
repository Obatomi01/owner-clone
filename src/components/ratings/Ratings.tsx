import styles from '../../styles/Ratings.module.css';
import ArrowHoverButton from '../ArrowHoverButton';
import Reviews from './Reviews';

type Props = {};

export default function Ratings({}: Props) {
  return (
    <section className={`mt-52 pb-48 ${styles['ratings--container']}`}>
      <h1 className='text-4xl m-auto text-center w-[35%] mb-12 font-bold'>
        See why we're rated #1 in restaurant tech
      </h1>

      <Reviews />

      <ArrowHoverButton text='See more reviews' isBlack isCentered />
    </section>
  );
}
