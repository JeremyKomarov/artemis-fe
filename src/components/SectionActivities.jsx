import {useState} from 'react';
import styles from './SectionActivities.module.css';
import data from '../../data/activities.json';
import FilterButton from './FilterButton';
import ActivityItem from './ActivityItem';

function SectionActivities() {
  const [selectedTab, setSelectedTab] = useState(null);

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.tabContainer}>
        <div className={styles.tabFilterContainer}>
          <ul>
            {data.activities.map(activity => (
              <FilterButton
                key={activity.id}
                activity={activity}
                selectedTab={selectedTab}
                onClick={setSelectedTab}
              />
            ))}
          </ul>
        </div>
        <div className={styles.tabFilterItemContainer}>
          {data.activities.map(activity => (
            <ActivityItem
              key={activity.id}
              activity={activity}
              selectedTab={selectedTab}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionActivities;
