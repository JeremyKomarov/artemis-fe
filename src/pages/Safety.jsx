import PageNav from '../components/PageNav';
import SectionSafety from '../components/SectionSafety';
import styles from './Safety.module.scss';

function Safety() {
  return (
    <main className={styles.safety}>
      <PageNav />
      <SectionSafety/>
    </main>
  );
}

export default Safety;
