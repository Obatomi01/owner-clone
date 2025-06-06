import BottomFooterContainer from './BottomFooterContainer';
import FooterLinks from './FooterLinks';
import TopFooterContainer from './TopFooterContainer';

type Props = {};

export default function FooterLinksContainer({}: Props) {
  return (
    <section
      className='w-[99%] mx-auto px-2 mt-16 py-8 md:p-8 rounded-2xl flex flex-col gap-16'
      style={{
        backgroundColor: '#f2f0ed',
      }}
    >
      <TopFooterContainer />

      <FooterLinks />
      <BottomFooterContainer />
    </section>
  );
}
