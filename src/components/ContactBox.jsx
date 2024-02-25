// ContactBox.js
import React from 'react';
import styles from './ContactBox.module.css';

function ContactBox({name, description, icon}) {
  // If the name is 'Email', create a clickable email link
  const renderDescription =
    name === 'Email' ? (
      <a href={`mailto:${description}`}>{description}</a>
    ) : // If the name is 'Address', create a link to Google Maps
    name === 'Address' ? (
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          description
        )}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {description}
      </a>
    ) : (
      description
    );

  return (
    <div className={styles.box}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.text}>
        <h3>{name}</h3>
        <p>{renderDescription}</p>
      </div>
    </div>
  );
}

export default ContactBox;
