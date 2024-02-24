import ContactForm from './ContactForm';
import styles from './SectionContact.module.css';
import {FaPhoneAlt, FaMapMarkerAlt, FaMailBulk} from 'react-icons/fa';

function SectionContact() {
  return (
    <section className={styles.contact}>
      <div className={styles.content}>
        <h2>Contact Us</h2>
        <div className={styles.container}>
          <div className={styles.contactInfo}>
            <div className={styles.box}>
              <div className={styles.icon}>
                <FaMapMarkerAlt size={30} />
              </div>
              <div className={styles.text}>
                <h3>Adress</h3>
                <p>ביאליק 16, בת-ים</p>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.icon}>
                <FaPhoneAlt size={30} />
              </div>
              <div className={styles.text}>
                <h3>Phone</h3>
                <p>+972-58-5073032</p>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.icon}>
                <FaMailBulk size={30} />
              </div>
              <div className={styles.text}>
                <h3>Email</h3>
                <p>ortal@artemis-security.co.il</p>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default SectionContact;
