import styles from './AboutUsCard.module.scss'

function AboutUsCard({name, title, email}) {
  return (
    <div className={styles.card}>
      <span>{name}</span>
      <span>{title}</span>
      <span>{email}</span>
  </div>
  )
}

export default AboutUsCard
