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
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '48px',
        overflow: 'hidden',
      }}
    >
      <div className='w-[40%] pl-8'>
        <p
          className='text-2xl font-bold mb-2'
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
        <div className='w-[60%] h-[100%]'>
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
