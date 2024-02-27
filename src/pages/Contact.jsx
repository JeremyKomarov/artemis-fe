import styles from './Contact.module.css';
import PageNav from '../components/PageNav';
// import SectionContact from '../components/SectionContact';
import Contact from '../components/Contact';

function ContactUs() {
  return (
    <main className={styles.contact}>
      <PageNav />
      {/* <SectionContact /> */}
      <Contact />
    </main>
  );
}

export default ContactUs;
