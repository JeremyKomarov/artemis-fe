/* eslint-disable react/prop-types */
import styles from './ActivityItem.module.css';

function ActivityItem({activity, selectedTab}) {
  return (
    <div
      className={`${styles.tabItem} ${
        selectedTab === activity.id ? styles.selectedTab : ''
      }`}
    >
      <div className={styles.tabContentRight}>
        <h1>{activity.name}</h1>
        <p>{activity.description}</p>
      </div>
    </div>
  );
}

export default ActivityItem;
