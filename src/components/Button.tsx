type Props = {};

export default function Button({}: Props) {
  return (
    <button className='bg-[#015BF8] text-[#fff] px-6 py-3 rounded-xl font-semibold text-xs mdtext-sm hover:bg-[#0a488f] transition-colors duration-300 hover:cursor-pointer'>
      <a href='/'>Get a free demo</a>
    </button>
  );
}
