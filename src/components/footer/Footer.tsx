import FooterLinksContainer from './FooterLinksContainer';
import ArrowHoverButton from '../ArrowHoverButton';

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer
      style={{
        background:
          'url(https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/68137c03673002ba44186929_e9df3c48529db552c48678c7d93816d2_footer-bg_new.avif)',
        width: '100%',

        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        borderTopLeftRadius: '52px',
        borderTopRightRadius: '52px',
        marginTop: '-144px',
        paddingBottom: '10px',
      }}
    >
      <div className='p-8 lg:p-24'>
        <div className='hidden md:block'>
          <h1
            style={{
              color: '#fff',
            }}
            className='md:text-4xl lg:text-5xl font-bold'
          >
            The easiest way to grow
          </h1>
          <h1
            style={{
              color: '#fff',
            }}
            className='md:text-4xl lg:text-5xl font-bold mb-6'
          >
            your restaurant online.
          </h1>
        </div>

        <div className='block md:hidden'>
          <h1
            style={{
              color: '#fff',
            }}
            className='text-4xl font-bold'
          >
            The easiest way to grow your
          </h1>
          <h1
            style={{
              color: '#fff',
            }}
            className='text-4xl font-bold mb-6'
          >
            restaurant online.
          </h1>
        </div>
        <ArrowHoverButton isBlack text='Get a free demo' />
      </div>

      <FooterLinksContainer />
    </footer>
  );
}
