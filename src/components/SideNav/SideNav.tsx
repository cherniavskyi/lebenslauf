import styles from './sideNav.module.scss';

type Props = {
  activeSection: number;
  setActiveSection: React.Dispatch<React.SetStateAction<number>>;
};

const navItems = [
    'Startseite',
    'Erfahrung',
    'Arbeiten',
    'Über mich',
    'Kontakt',
  ];

const SideNav = ({
  activeSection,
  setActiveSection,
}: Props) => {
  return (
    <nav className={styles.sideNav_l}>
        <ul className={styles.sideNav}>
          {navItems.map((item, index) => (
            <li
              key={item}
              onClick={() => setActiveSection(index)}
              className={
                activeSection === index
                  ? styles.isActive
                  : ''
              }
            >
              <span>{item}</span>
            </li>
          ))}
        </ul>
    </nav>
  );
};

export default SideNav;
