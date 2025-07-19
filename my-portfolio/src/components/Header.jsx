import styles from '../styles/Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/">ホーム</Link>
        <Link to="/about">自己紹介</Link>
        <Link to="/works">実績一覧</Link>
      </nav>
    </header>
  );
};

export default Header;