import PageNav from '../components/PageNav';
import styles from './Vision.module.css';

const visionDescrption =
  'חברת ארטמיס הוקמה במטרה למלא את הצורך האמיתי הקיים בארצנו להתמודדות עם תופעות פליליות כגון גניבות, פריצות, פח"ע ופרוטקשן. אנו מאמינים במאה אחוז עבודה עברית וציונית ועל כן כלל אנשינו הינם יוצאי יחידות כוחות הביטחון ומהווים כאנשי מילואים בהווה.';

function Vision() {
  return (
    <main className={styles.vision}>
      <PageNav />
      <h2>חזון החברה:</h2>
      <p>{visionDescrption}</p>
    </main>
  );
}

export default Vision;
