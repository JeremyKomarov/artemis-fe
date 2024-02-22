import MainSection from '../components/MainSection';
import PageNav from '../components/PageNav';
import styles from './Homepage.module.css';

function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <MainSection />
    </main>
  );
}

export default Homepage;
