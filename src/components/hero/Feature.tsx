type Props = {
  text: string;
  isTop: boolean;
};

export default function Feature({ text, isTop }: Props) {
  return (
    <div
      className={`hidden lg:flex bg-[#f8f8f8] px-5 py-3 rounded-xl w-max relative h-max ${
        isTop ? 'top-[100px]' : 'top-[400px]'
      } flex gap-2 items-center`}
    >
      <div className='w-6 h-2 bg-orange-500'></div>
      <p className='text-xs font-bold'>{text}</p>
    </div>
  );
}
