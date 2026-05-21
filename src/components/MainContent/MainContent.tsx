import classNames from 'classnames';
import styles from './mainContent.module.scss';

type SectionProps = {
  isActive?: boolean;
  setActiveSection?: React.Dispatch<React.SetStateAction<number>>;
};

type Props = {
  activeSection: number;
  sections: React.ComponentType<SectionProps>[];
  setActiveSection?: React.Dispatch<React.SetStateAction<number>>;
};

const MainContent = ({
  activeSection,
  sections,
  setActiveSection,
}: Props) => {
  return (
    <ul className={styles.mainContent}>
      {sections.map((Section, index) => (
        <li
          key={index}
          className={classNames(styles.section, {
            [styles.isActive]: index === activeSection,
          })}
        >
          <Section isActive={index === activeSection} setActiveSection={setActiveSection} />
        </li>
      ))}
    </ul>
  );
};

export default MainContent;
