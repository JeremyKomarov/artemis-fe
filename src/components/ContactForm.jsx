import styles from './ContactForm.module.css';
function ContactForm() {
  return (
    <div className={styles.contactForm}>
      <form>
        <h2>Send Message</h2>
        <div className={styles.inputBox}>
          <input type="text" name="" required="required" />
          <span>Full Name</span>
        </div>
        <div className={styles.inputBox}>
          <input type="text" name="" required="required" />
          <span>Email</span>
        </div>
        <div className={styles.inputBox}>
          <textarea required="required"></textarea>
          <span>Type your message..</span>
        </div>
        <div className={styles.inputBox}>
          <input type="submit" name="" value="send" />
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
