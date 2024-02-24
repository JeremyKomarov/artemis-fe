import PageNav from '../components/PageNav';
import Section from '../components/Section';
import Tabs from '../components/Tabs';
import styles from './Activities.module.css';

function Activities() {
  return (
    <main className={styles.activities}>
      <PageNav />
      <Section>
        <Tabs />
      </Section>
    </main>
  );
}

export default Activities;
