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
    <div className='w-full flex justify-between items-center'>
      <p className='text-xs'>2025 © Owner. All rights reserved.</p>

      <div className='flex gap-4'>
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
