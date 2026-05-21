import styles from './header.module.scss';

type Props = {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveSection: React.Dispatch<React.SetStateAction<number>>;
};

const Header = ({ setIsMenuOpen, setActiveSection }: Props) => {
  return (
    <header className={styles.header}>
      <a className={styles.header__logo} onClick={() => setActiveSection(0)}>
        <img src="src/assets/img/logo.png" alt="Global" />
      </a>
      <button className={`${styles.header__button} ${styles.contact_button}`} onClick={() => setActiveSection(4)}>Kontakt</button>
      <div
        className={styles.header__nav_toggle}
        onClick={() => setIsMenuOpen(true)}
      >
        <span></span>
      </div>
    </header>
  );
}

export default Header;
