import styles from './Contact.module.css';
import PageNav from '../components/PageNav';
import SectionContact from '../components/SectionContact';

function ContactUs() {
  return (
    <main className={styles.contact}>
      <PageNav />
      <SectionContact />
    </main>
  );
}

export default ContactUs;
