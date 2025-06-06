import styles from '../../styles/Footer.module.css';

type Props = {
  isMobileNav?: boolean
  onCloseNav?: () => void
};

const productLinks = [
  'Restaurant Website',
  'Online Ordering',
  'Custom Mobile App',
  'Zero-Commission Delivery',
  'Loyalty Program',
  'Automated Marketing',
];

const resourcesLinks = [
  'Case Studies',
  'Compare Owner',
  'Restaurant Marketing Guide',
  'SEO for Restaurants',
  'Restaurant Email Marketing',
  'Restaurant Mobile App',
  'Online Ordering Systems',
  'Restaurant Website Builders',
  'Restaurant Website Builders',
];

const supportinks = ['(510) 630-2397', 'support@owner.com'];

const contactLinks = ['About', 'Careers', 'Press'];

const leftCompareLinks = ['BentoBox', 'ChowNow', 'Clover', 'Grubhub'];
const rightCompareLinks = ['Menufy', 'SpotHopper', 'Toast'];

export default function FooterLinks({}: Props) {
  return (
    <section className={styles['footer--links']}>
      <div>
        <p className={`text-xs font-semibold mb-4 ${styles['link--heading']}`}>
          PRODUCTS
        </p>
        <div className='flex flex-col gap-2'>
          {productLinks.map((link, index) => (
            <p
              className='text-md font-semibold'
              style={{
                color: '#552B0D',
              }}
              key={index}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#444')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#552B0D')}
            >
              <a href=''>{link}</a>
            </p>
          ))}
        </div>
      </div>

      <div>
        <p className={`text-xs font-semibold mb-4 ${styles['link--heading']}`}>
          RESOURCES
        </p>
        <div className='flex flex-col gap-2'>
          {resourcesLinks.map((link, index) => (
            <p
              className='text-sm font-semibold'
              onMouseEnter={(e) => (e.currentTarget.style.color = '#552B0D')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#444')}
              key={index}
            >
              <a href=''>{link}</a>
            </p>
          ))}
        </div>
      </div>

      <div>
        <p className={`text-xs font-semibold mb-4 ${styles['link--heading']}`}>
          COMPARE
        </p>

        <div className='flex gap-6'>
          <div className='flex flex-col gap-2'>
            {leftCompareLinks.map((link, index) => (
              <p
                className='text-sm font-semibold'
                key={index}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#552B0D')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#444')}
              >
                <a href=''>{link}</a>
              </p>
            ))}
          </div>
          <div className='flex flex-col gap-2'>
            {rightCompareLinks.map((link, index) => (
              <p
                className='text-sm font-semibold'
                key={index}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#552B0D')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#444')}
              >
                <a href=''>{link}</a>
              </p>
            ))}
          </div>
        </div>
      </div>

      <div>
        <p className={`text-xs font-semibold mb-4 ${styles['link--heading']}`}>
          CONTACT
        </p>
        <div className='flex flex-col gap-2'>
          {contactLinks.map((link, index) => (
            <p
              className='text-sm font-semibold'
              key={index}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#552B0D')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#444')}
            >
              <a href=''>{link}</a>
            </p>
          ))}
        </div>
      </div>

      <div>
        <p className={`text-xs font-semibold mb-4 ${styles['link--heading']}`}>
          SUPPORT
        </p>
        <div className='flex flex-col gap-2'>
          {supportinks.map((link, index) => (
            <p
              className='text-sm font-semibold'
              key={index}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#552B0D')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#444')}
            >
              <a href=''>{link}</a>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
