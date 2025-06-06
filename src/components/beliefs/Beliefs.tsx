import type { BeliefProps } from './Belief';
import Belief from './Belief';
import styles from '../../styles/BeliefsAndBlogs.module.css';

import Adam from '../../assets/owner-ceo.jpg';

type Props = {};

const beliefs: BeliefProps[] = [
  {
    belief: 'Sales growth is more important than customization.',
    description:
      'The third party delivery apps and the big national brands have shaped how everyone orders online. We take their best practices and give them to you. This is why we outperform our competitors, who choose customization over sales.',
    hasBorderLine: true,
  },
  {
    belief: 'We have to earn your business every month.',
    description:
      'Restaurants are hard enough, you don’t need another tech vendor tying you up in a long term contract. Customers vote with their feet if they don’t like your restaurant. We want you to be able to leave easily if we aren’t adding value and helping you grow your business.',
    hasBorderLine: true,
  },
  {
    belief: 'Restaurants should own their customer relationships.',
    description:
      'One of the cruelest byproducts of tech “innovation” is how you are separated from your customers. If you ever decide to leave Owner, you get to bring your customers with you.',
    hasBorderLine: false,
  },
];

export default function Beliefs({}: Props) {
  return (
    <section className={styles['content--container']}>
      <div className='w-[95%] mx-auto lg:mx-unset lg:w-[50%] xl:w-[40%] flex flex-col justify-between gap-8'>
        <div className='flex flex-col gap-8 lg:gap-4'>
          <h2 className='text-3xl md:text-5xl font-semibold'>
            Three beliefs that guide our company
          </h2>
          <p className='text-sm'>
            Understand the principles that guide our decisions.
          </p>
        </div>

        <div className='flex flex-col lg:hidden'>
          {beliefs.map((belief, index) => (
            <Belief {...belief} key={index} />
          ))}
        </div>

        <div className='flex gap-8 items-end'>
          <img
            src={Adam}
            alt='owner ceo'
            className='w-[124px] rounded-lg h-[156px] object-cover'
          />

          <div className='flex flex-col'>
            <p className='text-xs'>Adam Guild</p>
            <p className='text-xs'>Co-Founder and CEO at Owner</p>
          </div>
        </div>
      </div>

      <div className='hidden lg:block w-[55%] lg:w-[50%] '>
        {beliefs.map((belief, index) => (
          <Belief {...belief} key={index} />
        ))}
      </div>
    </section>
  );
}
