import styles from './SectionActivities.module.css'
import data from '../../data/activities.json';
import ActivityBox from './ActivityBox';

function SectionActivities() {
  return (
    <div className={styles.container}>
        {data.activities.map(activity => <ActivityBox key={activity.id} activity={activity}/>)}
    </div>
  )
}

export default SectionActivities
