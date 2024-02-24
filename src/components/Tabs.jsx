import styles from './Tabs.module.css';
import data from '../../data/activities.json';
import {useState} from 'react';
import Tab from './Tab';

function Tabs() {
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = id => {
    setActiveTab(prevTab => (prevTab === id ? null : id));
  };

  return (
    <div className={styles.tabs}>
      {data.activities.map(activity => (
        <Tab
          key={activity.id}
          activity={activity}
          isOpen={activity.id === activeTab}
          onClick={() => handleTabClick(activity.id)}
        />
      ))}
    </div>
  );
}

export default Tabs;
