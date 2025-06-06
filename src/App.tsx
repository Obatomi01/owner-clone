import Hero from './components/hero/Hero';
import Nav from './components/Nav';

import styles from './styles/General.module.css';

import ThousandsOfOwners from './components/owners/ThousandsOfOwners';
import Ratings from './components/ratings/Ratings';
import BigBrandsTech from './components/big-brands/BigBrandsTech';
import ReviewCarousel from './components/review-carousel/ReviewCarousel';
import BeliefsAndBlogs from './components/BeliefsAndBlogs';
import Footer from './components/footer/Footer';
import Features from './components/features/Features';

function App() {
  return (
    <>
      <Nav />
      <Hero />

      <h3
        className={`text-3xl mt-32 md:text-4xl ${styles['container']} font-bold`}
      >
        Trusted by thousands of owners
      </h3>
      <ThousandsOfOwners />
      <Features />

      <Ratings />
      <BigBrandsTech />

      <ReviewCarousel />

      <BeliefsAndBlogs />
      <Footer />
    </>
  );
}

export default App;
