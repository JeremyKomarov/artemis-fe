import styles from './ActivityBox.module.css'
function ActivityBox({activity}) {
  return (
    <div className={styles.activityBox}>
    <h3>{activity.name}</h3>
    <p>{activity.description}</p>
  </div>
  )
}

export default ActivityBox
