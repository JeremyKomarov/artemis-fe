/* eslint-disable react/prop-types */
import styles from './FilterButton.module.css';

function FilterButton({activity, selectedTab, onClick}) {
  return (
    <li
      className={`${styles.filterBtn} ${
        selectedTab === activity.id ? styles.active : ''
      }`}
      onClick={() => onClick(activity.id)}
    >
      {activity.name}
    </li>
  );
}

export default FilterButton;
