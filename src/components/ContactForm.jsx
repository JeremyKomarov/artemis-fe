import styles from './ContactForm.module.css';
import InputBox from './InputBox';
import {useState} from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const handleChange = e => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className={styles.contactForm}>
      <form onSubmit={handleSubmit}>
        <h2>Send Message</h2>
        <InputBox
          kind="input"
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          label="Full Name"
          required
        />
        <InputBox
          kind="input"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          label="Email"
          required
        />
        <InputBox
          kind="textarea"
          name="message"
          value={formData.message}
          onChange={handleChange}
          label="Message"
          required
        />
        <InputBox kind="input" type="submit" value="Send" />
      </form>
    </div>
  );
}

export default ContactForm;
