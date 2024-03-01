import { useRef, useState } from 'react';
import styles from './ContactForm.module.css';
import emailjs from "@emailjs/browser";


function ContactForm() {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_message: ''
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_bkftw0w', 'template_oir5bgq', form.current, {
        publicKey: 'NkuHjxZeY7Do7DrYK',
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