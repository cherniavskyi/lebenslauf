import classNames from 'classnames';
import styles from './outerNav.module.scss';

type Props = {
  activeSection: number;
  setActiveSection: React.Dispatch<React.SetStateAction<number>>;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const navItems = [
  'Startseite',
  'Erfahrung',
  'Arbeiten',
  'Über mich',
  'Kontakt',
];

const OuterNav = ({
  activeSection,
  setActiveSection,
  isMenuOpen,
  setIsMenuOpen,
}: Props) => {
  return (
    <ul className={classNames(
        styles.outerNav,
        {
          [styles.isVisible]: isMenuOpen,
        }
      )}>
      {navItems.map((item, index) => (
        <li
          key={item}
          onClick={() => {
            setActiveSection(index);
            setIsMenuOpen(false);
          }}
          className={
            activeSection === index
              ? styles.isActive
              : ''
          }
        >
          {item}
        </li>
      ))}
  </ul>
  );
};

export default OuterNav;
