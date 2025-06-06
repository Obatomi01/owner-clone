export type FeatureProps = {
  title: string;
  description: string;
  rightImage: string;
  backgroundimage: string;
};

export default function Feature({
  backgroundimage,
  description,
  rightImage,
  title,
}: FeatureProps) {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundimage})`,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',

        justifyContent: 'space-between',
        borderRadius: '48px',
        overflow: 'hidden',
      }}
      className='flex flex-col md:flex-row md:items-center '
    >
      <div className='md:w-[40%] pl-8 pt-4 md:pt-0'>
        <p
          className='text-2xl font-bold md:mb-2'
          style={{
            color: '#777',
          }}
        >
          {title}
        </p>
        <p
          className='text-2xl text-white font-bold'
          style={{
            color: '#fff',
          }}
        >
          {description}
        </p>
      </div>

      {rightImage !== '' && (
        <div className='h-[450px] md:w-[60%] md:h-[100%]'>
          <img
            src={rightImage}
            alt={title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          />
        </div>
      )}
    </div>
  );
}
