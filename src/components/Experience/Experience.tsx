import { useState } from 'react';
import classNames from 'classnames';
import styles from './experience.module.scss';

const experience = [
  {
    company: 'Evoplay',
    role: 'Frontend/React Developer',
    period: '02/2020 – Heute',
    description: [
        'Entwicklung neuer Funktionalitäten (Seiten, Widgets, Blöcke, Komponenten) sowie Pflege bestehender Feature gemäß technischen Anforderungen und Designvorgaben',
        'Optimierung und Refactoring von bestehendem Code, Implementierung neuer Features',
        'Redesign von Projekten mit Fokus aus modernes UI/UX',
        'Enge Zusammenarbeit mit Backend-Entwicklern, Designern und Projektmanagern',
        'Durchführung von Code-Reviews für Teammitglieder',
        'Migration bestehender Projekte von Twig auf React mit TypeScript',
        'Entwicklung von Themes unter Verwendung von CSSVariablen sowie Design-Tokens aus Figma',
        'Entwicklung kleiner Progressive Web Apps (PWA)',
    ],
  },
  {
    company: 'Skynix LLC',
    role: 'Frontend/React/Magento Developer',
    period: '09/2019 – 02/2020',
    description: [
      'Entwicklung einer Unternehmenswebsite mit React (Administration auf WordPress)',
      'Entwicklung eines E-Commerce-Shops mit Magento 2',
      'Kommunikation mit Kunden hinsichtlich technischer Umsetzung und Projektanforderungen',
      'Entwicklung einer Unternehmens-Website (Landing Page/Visitenkarten-Website) mit Vue.js',
      'Aktive Teilnahme an Diskussionen zur Optimierung von Arbeitsprozessen und Codequalität',
      'Erstellung eines Basis-Theme-Templates als Grundlage für neue Kundenprojekte',
    ],
  },
  {
    company: 'Cmsmasters',
    role: 'WordPress Developer',
    period: '04/2018 – 08/2019',
    description: [
      'Entwicklung neuer Themes für einen der führenden Autoren auf der Plattform Envato ThemeForest',
      'Entwicklung neuer Plugins und Shortcodes für Unternehmens-Themes',
      'Wartung, Support und Aktualisierung bereits veröffentlicher Themes',
      'Umsetzung und Entwicklung individueller Content-Blöcke',
      'Entwicklung eines eigenen Page-Builders',
    ],
  },
   {
    company: 'UTD',
    role: 'Junior Frontend Developer',
    period: '07/2017 – 03/2018',
     description: [
      'Umsetzung von Websiten gemäß Designvorgaben (HTML/CSS)',
      'Entwicklung interner Plugins für Unternehmensprojekte',
      'Aktive Weiterbildung im Bereich Web-Entwicklung (Seminare, Webinare, neue Tools)',
    ],
  },
];

const Experience = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
         <div className={styles.experience}>
            <h2 className={styles.experience__title}>Berufserfahrung</h2>
            <div className={styles.experience__content}>
                <div className={styles.tabs}>
                    <div className={styles.tabs__list}>
                        {experience.map((item, index) => (
                        <div
                            key={item.company}
                            onClick={() => setActiveIndex(index)}
                            className={classNames(styles.experience__item, {
                            [styles.active]: activeIndex === index,
                            })}
                        >   
                            <h3><span>{item.role}</span> - {item.company}</h3>
                            <span>{item.period}</span>
                        </div>
                        ))}
                    </div>
                    <div className={styles.tabs__content} key={activeIndex}>
                        <ul className={styles.experience__item_list}>
                            {experience[activeIndex].description.map((item) => <li>{item}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
