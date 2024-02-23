import PageNav from '../components/PageNav';
import Section from '../components/Section';
import styles from './Activities.module.css';

function Activities() {
  return (
    <main className={styles.activities}>
      <PageNav />
      <Section />
    </main>
  );
}

export default Activities;
