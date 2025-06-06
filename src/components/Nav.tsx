import { useEffect, useState } from 'react';
import styles from '../styles/Nav.module.css';
import Button from './Button';
import Logo from './Logo';
import MenuButton from './MenuButton';
import FooterLinks from './footer/FooterLinks';

type Props = {};

const navLinks: string[] = [
  'Product',
  'Pricing',
  'How it works',
  'Company',
  'Resources',
];

export default function Nav({}: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [showMobileMenu]);

  return (
    <>
      <nav
        className={`hidden lg:flex fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'backdrop-blur-md bg-white/60' : 'bg-transparent'
        }`}
      >
        <section className={`${styles['nav--contents']}`}>
          <div className='flex md:w-[50%] xl:w-[35%] items-center justify-between'>
            <div className='w-[80px] h-[24px] flex items-center justify-center'>
              <Logo />
            </div>

            {navLinks.map((link, index) => (
              <p key={index} className='text-xs font-bold'>
                <a href='/'>{link}</a>
              </p>
            ))}
          </div>

          <div className='flex items-center gap-6'>
            <p className='text-sm font-bold'>
              <a href='/'>Login</a>
            </p>
            <Button />
          </div>
        </section>
      </nav>

      <nav
        className={`lg:hidden fixed top-0 w-full z-50 transition-all duration-300 ${
          showMobileMenu
            ? 'bg-white'
            : scrolled
            ? 'backdrop-blur-md bg-white/60'
            : 'bg-transparent'
        }`}
      >
        <section className='w-[95%] sm:w-[90%] m-auto flex items-center justify-between py-4'>
          <div className='w-[80px] h-[24px] flex items-center justify-center'>
            <Logo />
          </div>

          <div className='flex items-center gap-6'>
            <p className='hidden sm:block text-sm font-bold'>
              <a href='/'>Login</a>
            </p>
            <Button />
            <MenuButton onPress={() => setShowMobileMenu(!showMobileMenu)} />
          </div>
        </section>
      </nav>

      {showMobileMenu && (
        <div
          className={`fixed top-[64px] left-0 w-full h-[calc(100vh-64px)] z-40 overflow-y-auto bg-white shadow-md ${styles['animate-slideDown']} py-4 px-4 md:px-10`}
        >
          <FooterLinks
            isMobileNav
            onCloseNav={() => setShowMobileMenu(false)}
          />
        </div>
      )}
    </>
  );
}
