/* eslint-disable no-undef */
import { useRef, useState } from 'react';
import styles from './ContactForm.module.css';
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.EMAILJS_PUBLIC_KEY;


function ContactForm() {
  console.log(import.meta.env.EMAILJS_SERVICE_ID);
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_message: ''
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      )
      .finally(() => {
        form.current.reset();
        setFormData({
          user_name: '',
          user_email: '',
          user_message: ''
        });
      });
  };

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      sendEmail(e);
    };

  return (
    <form ref={form} className={styles.contactForm} onSubmit={handleSubmit}>
      <div>
        <h2>צור קשר</h2>
      </div>
      <div className={styles.formGroup}>
        <input
          type='text'
          className={styles.formInput}
          placeholder='שם'
          name='user_name'
          value={formData.user_name}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <input
          type='email'
          className={styles.formInput}
          placeholder='מייל'
          name='user_email'
          value={formData.user_email}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <textarea
          className={styles.formInput}
          placeholder='הודעה'
          name='user_message'
          value={formData.user_message}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <button type="submit">צור קשר</button>
      </div>
    </form>
  );
}

export default ContactForm;