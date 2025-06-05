import Food1 from '../../assets/food/food-1.png';
import Food2 from '../../assets/food/food-2.png';
import Food3 from '../../assets/food/food-3.png';

import FoodPhoneScreen from '../../assets/looking-at-phone.jpg';
import SkeletonBackground from '../../assets/skeleton-background-1.jpg';

import styles from '../../styles/General.module.css';

type Props = {};

export default function BigBrandsTech({}: Props) {
  return (
    <section
      className={`${styles['big--brands__container']} rounded-[100px] w-full py-[128px] relative -top-14 z-1 bg-white`}
    >
      <h3 className={`text-4xl font-bold m-auto w-[50%] text-center`}>
        Give your restaurant the same tech as the big brands
      </h3>

      <div className='flex flex-col w-[1200px] m-auto mt-12 gap-4'>
        <div
          style={{
            backgroundImage: `url(${FoodPhoneScreen})`,
            width: '100%',
            height: '500px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            borderRadius: '40px',
            position: 'relative',
          }}
        >
          <div className='absolute bottom-8 right-8'>
            <h5 className={`${styles['other-texts']}  text-lg font-bold`}>
              Your customers are used to ordering on their phone.
            </h5>{' '}
            <h5 className={`${styles['other-texts']}  text-lg font-bold`}>
              That’s why we give your restaurant its own
              <span className='text-[#fff]'> mobile app.</span>
            </h5>
          </div>
        </div>

        <div className='flex gap-4 items-center'>
          <div
            style={{
              backgroundImage: `url(${SkeletonBackground})`,
              width: '50%',
              height: '500px',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              borderRadius: '40px',
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <h5
              className={`${styles['other-texts']} absolute bottom-8 text-lg font-bold text-center w-[60%]`}
            >
              Get higher Google rankings with your AI-powered
              <span className='text-[#fff]'> restaurant website.</span>
            </h5>
          </div>

          <div className='relative bg-[#f4ece0] rounded-[40px] h-[500px] p-8 w-[50%] flex flex-col justify-between'>
            <div className='relative flex flex-col items-center justify-center h-[80%]'>
              <img
                src={Food2}
                alt='Top Image'
                className='w-[290px] opacity-50 -mb-14 z-0'
              />

              <img
                src={Food1}
                alt='Middle Image'
                className='w-[339px] z-10 rotate-[-5deg] transition-transform duration-300'
              />

              <img
                src={Food3}
                alt='Bottom Image'
                className='w-[290px] opacity-50 -mt-14 z-0 rotate-[3deg] transition-transform duration-300'
              />
            </div>

            <h5
              className={`${styles['sales--text']} text-center text-lg font-bold`}
            >
              Grow your sales with an <span>online ordering system</span>{' '}
              modeled after the big brands.
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
}
