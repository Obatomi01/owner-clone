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
      <div className='w-[50%] p-24'>
        <h1
          style={{
            color: '#fff',
          }}
          className='text-5xl font-bold mb-6'
        >
          The easiest way to grow your restaurant online.
        </h1>
        <ArrowHoverButton isBlack text='Get a free demo' />
      </div>

      <FooterLinksContainer />
    </footer>
  );
}
