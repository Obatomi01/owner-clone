import styles from '../../styles/Ratings.module.css';
import ArrowHoverButton from '../ArrowHoverButton';
import Reviews from './Reviews';

type Props = {};

export default function Ratings({}: Props) {
  return (
    <section className={`mt-52 pb-48 ${styles['ratings--container']}`}>
      <div>
        <h1 className='text-4xl m-auto text-center font-bold'>
          See why we're rated #1
        </h1>
        <h1 className='text-4xl m-auto text-center mb-12 font-bold'>
          in restaurant tech
        </h1>
      </div>

      <Reviews />

      <ArrowHoverButton text='See more reviews' isBlack isCentered />
    </section>
  );
}
