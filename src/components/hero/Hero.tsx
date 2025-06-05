import PhoneContainer from './PhoneContainer';
import styles from '../../styles/Hero.module.css';

type Props = {};

export default function Hero({}: Props) {
  return (
    <section className={styles['hero--container']}>
      <PhoneContainer />
    </section>
  );
}
