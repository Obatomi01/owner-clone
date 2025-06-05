import Logo from '../Logo';
import Arrow from '../../assets/icons/top-right.png';

type Props = {};

const RightBox = ({
  bgColor,
  hoverColor,
  text,
}: {
  text: string;
  bgColor: string;
  hoverColor: string;
}) => (
  <a
    style={{ backgroundColor: bgColor }}
    className='w-[260px] h-[180px] rounded-2xl transition-colors duration-300 cursor-pointer relative'
    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverColor)}
    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = bgColor)}
  >
    <div className='absolute right-[16px] top-[16px] bg-[#ffffff26] p-2 rounded-full flex items-center justify-center'>
      <img
        src={Arrow}
        className='w-[12px] h-[12px]'
        style={{
          filter:
            'invert(100%) sepia(0%) saturate(7500%) hue-rotate(344deg) brightness(106%) contrast(102%)',
        }}
      />
    </div>

    <p
      className='text-white absolute left-[16px] bottom-[16px] font-semibold'
      style={{
        color: '#fff',
      }}
    >
      {text}
    </p>
  </a>
);

export default function TopFooterContainer({}: Props) {
  return (
    <div className='flex justify-between'>
      <div className='w-[120px] h-[32px]'>
        <Logo />
      </div>

      <div className='flex gap-4'>
        <RightBox
          bgColor='#090a0b'
          text='Get a free demo'
          hoverColor='#222323'
        />
        <RightBox
          bgColor='#bdab97'
          text='See how it works'
          hoverColor='#bdab97'
        />
      </div>
    </div>
  );
}
