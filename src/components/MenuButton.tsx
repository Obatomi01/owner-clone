import { useState } from 'react';
import styles from '../styles/General.module.css';

const MenuButton = () => {
  const [opened, setOpened] = useState(false);

  const toggleMenu = () => {
    setOpened((prev) => !prev);
  };

  return (
    <button
      className={`${styles.menu} ${opened ? styles.opened : ''}`}
      onClick={toggleMenu}
      aria-label='Main Menu'
      aria-expanded={opened}
    >
      <svg width='24' height='24' viewBox='0 0 100 100'>
        <path className={`${styles.line} ${styles.top}`} d='M 20,35 H 80' />
        <path className={`${styles.line} ${styles.bottom}`} d='M 20,65 H 80' />
      </svg>
    </button>
  );
};

export default MenuButton;
