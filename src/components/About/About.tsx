import Skill from '../Skill';
import styles from './about.module.scss';

type Props = {
  isActive?: boolean;
};

const About = ({ isActive = false }: Props) => {
  return (
    <div className={styles.about}>
      <div className={styles.about__content}>
        <div className={styles.about__column}>
          <div className={styles.about__education}>
            <h2 className={styles.about__education_title}>Ausbildung</h2>
            <div className={styles.about__education_content}>
              <div className={styles.about__education_item}>
                <div className={styles.about__education_date}>09/2016 – 06/2017</div>
                <div className={styles.about__education_info}>
                  <div className={styles.about__education_name}><b>Spezialist Diplom</b> im Angewandte Mathematik</div>
                  <div className={styles.about__education_place}><b>MNU V.A.Sukhomlinskyi ǀ</b> Mikolaiw, Ukraine</div>
                </div>
              </div>
              <div className={styles.about__education_item}>
                <div className={styles.about__education_date}>09/2014 – 06/2016</div>
                <div className={styles.about__education_info}>
                  <div className={styles.about__education_name}><b>Bachelor Diplom</b> im Angewandte Mathematik</div>
                  <div className={styles.about__education_place}><b>MNU V.A.Sukhomlinskyi ǀ</b> Mikolaiw, Ukraine</div>
                </div>
              </div>
              <div className={styles.about__education_item}>
                <div className={styles.about__education_date}>09/2010 – 06/2014</div>
                <div className={styles.about__education_info}>
                  <div className={styles.about__education_name}><b>College Diplom</b> im Angewandte Mathematik</div>
                  <div className={styles.about__education_place}><b>College MNU V.A.Sukhomlinskyi ǀ</b> Mikolaiw, Ukraine</div>
                </div>
              </div>
              <div className={styles.about__education_item}>
                <div className={styles.about__education_date}>09/2005 – 06/2010</div>
                <div className={styles.about__education_info}>
                  <div className={styles.about__education_name}><b>Abitur</b></div>
                  <div className={styles.about__education_place}><b>Gymnasium ǀ</b> Mikolaiw, Ukraine</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.about__column}>
          <div className={styles.about__skills}>
            <h2 className={styles.about__skills_title}>IT-Kenntnisse</h2>
            <div className={styles.about__skills_content}>
              <div className={styles.about__skills_item}>
                <Skill label="JavaScript" percent={80} delay={0.2} isActive={isActive} />
              </div>
              <div className={styles.about__skills_item}>
                <Skill label="React" percent={80} delay={0.3} isActive={isActive} />
              </div>
              <div className={styles.about__skills_item}>
                <Skill label="TypeScript" percent={75} delay={0.4} isActive={isActive} />
              </div>
              <div className={styles.about__skills_item}>
                <Skill label="HTML, CSS" percent={95} delay={0.5} isActive={isActive} />
              </div>
              <div className={styles.about__skills_item}>
                <Skill label="Webpack" percent={80} delay={0.6} isActive={isActive} />
              </div>
               <div className={styles.about__skills_item}>
                <Skill label="Git" percent={85} delay={0.7} isActive={isActive} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
