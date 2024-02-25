import ContactBox from './ContactBox';
import ContactForm from './ContactForm';
import styles from './SectionContact.module.css';
import {FaMapMarkerAlt, FaMailBulk} from 'react-icons/fa';

function SectionContact() {
  return (
    <section className={styles.sectionContact}>
      <div className={styles.container}>
        <h2>Contact Us</h2>
        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <ContactBox
              name="Address"
              description="ביאליק 16 בת ים, 5947116"
              icon={<FaMapMarkerAlt size={30} />}
            />

            <ContactBox
              name="Email"
              description="ortal@artemis-security.co.il"
              icon={<FaMailBulk size={30} />}
            />
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default SectionContact;
