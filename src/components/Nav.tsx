import { useEffect, useState } from 'react';
import styles from '../styles/Nav.module.css';
import Button from './Button';
import Logo from './Logo';
import MenuButton from './MenuButton';

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          scrolled ? 'backdrop-blur-md bg-white/60' : 'bg-transparent'
        }`}
      >
        <section className='w-[98%] sm:w-[90%] m-auto flex items-center justify-between py-4'>
          <div className='w-[80px] h-[24px] flex items-center justify-center'>
            <Logo />
          </div>

          <div className='flex items-center gap-6'>
            <p className='text-sm font-bold'>
              <a href='/'>Login</a>
            </p>
            <Button />
            <MenuButton />
          </div>
        </section>
      </nav>
    </>
  );
}
