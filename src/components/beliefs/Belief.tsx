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
      className={`flex justify-between ${
        hasBorderLine ? 'border-b border-gray-300 pb-8 mb-8' : ''
      }`}
    >
      <h5 className='w-[45%] font-bold text-lg'>{belief}</h5>
      <p className='w-[52%] text-sm'>{description}</p>
    </div>
  );
}
