import {useState} from 'react';
import styles from './Tab.module.css';

function Tab({activity, isOpen, onClick}) {
  const {name, description} = activity;

  return (
    <div className={styles.tab} onClick={onClick}>
      {isOpen ? (
        <div>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      ) : (
        <h2>{name}</h2>
      )}
    </div>
  );
}

export default Tab;
