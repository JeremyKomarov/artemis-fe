import AboutUsCard from './AboutUsCard'
import styles from './SectionAboutUs.module.scss'

function SectionAboutUs() {
  return (
    <section className={styles.container}>
      <div className={styles.titleRow}>
        <h1>החזון</h1>
      </div>
      <div className={styles.row}>
        <p>
        חברת ארטמיס הוקמה במטרה למלא את הצורך האמיתי הקיים בארצנו להתמודדות עם תופעות פליליות כגון גניבות, פריצות, פח"ע ופרוטקשן.
        </p>
        <p>
        אנו מאמינים במאה אחוז עבודה עברית וציונית ועל כן כלל אנשינו הינם יוצאי יחידות כוחות הביטחון ומהווים כאנשי מילואים בהווה.
        </p>
      </div>
      <div className={styles.titleRow}>
        <h2>מי אנחנו</h2>
      </div>
      <div className={styles.cardsRow}>
        <AboutUsCard
          name='Leon Bakalov'
          title='Founder & CEO'
          email='leon@artemis-security.co.il'
        />
        <AboutUsCard
          name='Ruslan mikhaylyukov'
          title='Founder & CEO'
          email='ruslan@artemis-security.co.il'
        />
      </div>
    </section>
  )
}

export default SectionAboutUs
