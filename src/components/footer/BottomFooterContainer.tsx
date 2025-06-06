type Props = {};

const rightLinks = [
  'Cookie Settings',
  'Privacy',
  'Website Terms',
  'Disclaimer',
  'Restaurant Agreements',
  'Platform Terms',
  'Accessibility',
];

export default function BottomFooterContainer({}: Props) {
  return (
    <div className='w-full flex flex-col-reverse justify-between gap-4 lg:gap-0 lg:items-center lg:flex-row '>
      <p className='text-xs'>2025 © Owner. All rights reserved.</p>

      <div className='flex gap-4 whitespace-nowrap overflow-x-auto lg:overflow-x-hidden'>
        {rightLinks.map((link, index) => (
          <p
            key={index}
            className='text-xs font-semibold'
            onMouseEnter={(e) => (e.currentTarget.style.color = '#cbcccd')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#444')}
          >
            <a href=''>{link}</a>
          </p>
        ))}
      </div>
    </div>
  );
}
