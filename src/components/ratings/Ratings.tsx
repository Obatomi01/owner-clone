import styles from '../../styles/Ratings.module.css';
import ArrowHoverButton from '../ArrowHoverButton';
import Reviews from './Reviews';

type Props = {};

export default function Ratings({}: Props) {
  return (
    <section className={`mt-32 md:mt-52 pb-48 ${styles['ratings--container']}`}>
      <div className='hidden md:block'>
        <h1 className='text-4xl m-auto text-center font-bold'>
          See why we're rated #1
        </h1>
        <h1 className='text-4xl m-auto text-center mb-12 font-bold'>
          in restaurant tech
        </h1>
      </div>

      <h1 className='block md:hidden w-[95%] text-3xl font-bold mb-6 text-center mx-auto'>
        See why we're rated #1 in restaurant tech
      </h1>

      <Reviews />

      <ArrowHoverButton text='See more reviews' isBlack isCentered />
    </section>
  );
}
