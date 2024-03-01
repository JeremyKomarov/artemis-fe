import PageNav from '../components/PageNav';
import SectionAboutUs from '../components/SectionAboutUs';
import styles from './AboutUs.module.css';

function AboutUs() {
  return (
    <main className={styles.aboutUs}>
      <PageNav />
      <SectionAboutUs/>
    </main>
  );
}

export default AboutUs;
