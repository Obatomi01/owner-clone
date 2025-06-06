export type BeliefProps = {
  belief: string;
  description: string;
  hasBorderLine: boolean;
};

export default function Belief({
  belief,
  description,
  hasBorderLine,
}: BeliefProps) {
  return (
    <div
      className={`flex flex-col gap-4 md:flex-row md:gap-0 justify-between ${
        hasBorderLine ? 'border-b border-gray-300 pb-8 mb-8' : ''
      }`}
    >
      <h5 className='w-full md:w-[45%] font-bold text-lg'>{belief}</h5>
      <p className='w-full md:w-[52%] text-sm'>{description}</p>
    </div>
  );
}
