import styles from './Contact.module.css'
import ContactForm from './ContactForm'
function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <ContactForm/>
      </div>
    </div>
  )
}

export default Contact
