import styles from './contact.module.scss';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.contact__container}>
        <h2><span>O</span>ffen<br />für n<span>e</span>ue<br />M<span>ö</span>glichk<span>e</span>iten</h2>
        <div className={styles.contact__content}>
          <div className={styles.contact__information}>
            <p>Holzwiese 13, <br /> 78126 Königsfeld, Deutschland</p>
            <a href="mailto:cherniavskyi.web@gmail.com">cherniavskyi.web@gmail.com</a>
            <a href="tel:+491755042234">+49 175 504 22 34</a>
          </div>
          <ul className={styles.contact__socials}>
            <li><a target="_blank" href="https://www.linkedin.com/in/oleh--cherniavskyi">LinkedIn</a></li>
            <li><a href="mailto:cherniavskyi.web@gmail.com">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
