import styles from '../styles/BeliefsAndBlogs.module.css';
import Beliefs from './beliefs/Beliefs';
import Blogs from './blogs/Blogs';

type Props = {};

export default function BeliefsAndBlogs({}: Props) {
  return (
    <section className={styles['container']}>
      <Beliefs />
      <Blogs />
    </section>
  );
}
