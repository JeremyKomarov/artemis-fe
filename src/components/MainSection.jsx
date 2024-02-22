import styles from './MainSection.module.css';

function MainSection() {
  return (
    <section className={styles.main}>
      <div className={styles.mainImgContainer}>
        <img src="./full-logo.png" alt="Artemis Full Logo" />
      </div>
      <div className={styles.arrowContainer}>
        <a href="#">
          Scroll Down
          <span>
            <i className="bx bx-down-arrow-alt"></i>
          </span>
        </a>
      </div>
    </section>
  );
}

export default MainSection;
