import PageNav from '../components/PageNav';
import SectionActivities from '../components/SectionActivities';
import styles from './Activities.module.css';

function Activities() {
  return (
    <main className={styles.activities}>
      <PageNav />
      <SectionActivities />
    </main>
  );
}

export default Activities;
