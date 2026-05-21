import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import OuterNav from '../OuterNav';
import Header from '../Header';
import SideNav from '../SideNav';
import MainContent from '../MainContent';

import Intro from '../Intro';
import Experience from '../Experience';
import Work from '../Work';
import About from '../About';
import Contact from '../Contact';

import styles from './page.module.scss';

const sections = [
  Intro,
  Experience,
  Work,
  About,
  Contact,
];

const Page = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const canScroll = useRef(true);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 50) return;

      if (!canScroll.current) return;

      canScroll.current = false;

      setTimeout(() => {
        canScroll.current = true;
      }, 800);

      if (e.deltaY > 0) {
        setActiveSection((prev) =>
          prev === sections.length - 1
            ? 0
            : prev + 1
        );
      } else {
        setActiveSection((prev) =>
          prev === 0
            ? sections.length - 1
            : prev - 1
        );
      }
    };

    window.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);  

  return (
    <div className={classNames(
        styles.wrap,
        {
          [styles.modalView]: isMenuOpen,
        }
      )}>
      <div className={styles.container}>
        <div
          className={classNames(
            styles.closeMenu,
            {
              [styles.isVisible]: isMenuOpen,
            }
          )}
          onClick={() => setIsMenuOpen(false)}
        ></div>
        <div id="viewport" className={styles.viewport}>
          <div className={classNames(
            styles.content,
            {
              [styles[`section_num_${activeSection}`]]: activeSection,
            }
          )}>
            <Header
              setIsMenuOpen={setIsMenuOpen}
              setActiveSection={setActiveSection}
            />
            <SideNav
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
            <MainContent
              sections={sections}
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
          </div>
        </div>
      </div>
      <OuterNav
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </div>
  );
};

export default Page;
