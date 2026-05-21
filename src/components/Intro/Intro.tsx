import styles from './intro.module.scss';

type Props = {
  setActiveSection: React.Dispatch<React.SetStateAction<number>>;
};

const Intro = ({ setActiveSection }: Props) => {
  return (
    <div className={styles.intro}>
      <div className={styles.intro__banner}>
        <h1>Oleh<br />Cherniavskyi</h1> 
        <h2>Frontend Entwickler</h2>
        <button onClick={() => setActiveSection(4)}>Kontakt
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 118" xmlSpace="preserve">
            <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
              <path d="M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z"/>
            </g>
          </svg>
          <span className={styles.btn_background}></span>
        </button>
        <img src="src/assets/img/introduction-visual.png" alt="Photo" />
      </div>
      <div className={styles.intro__options}>
        <a>
          <h3>Modernes Frontend</h3>
          <p>Entwicklung moderner Webanwendungen mit React, TypeScript und komponentenbasierter Architektur.</p>
        </a>
        <a>
          <h3>Responsives UI/UX</h3>
          <p>Erstellung von Benutzeroberflächen, die auf Smartphones, Tablets und Desktop-Geräten optimal funktionieren.</p>
        </a>
        <a>
          <h3>Performance</h3>
          <p>Fokus auf sauberen Code, optimierte Benutzeroberflächen und eine angenehme User Experience.</p>
        </a>
      </div>
    </div>
  );
};

export default Intro;
