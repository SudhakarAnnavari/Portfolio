import React, { useState } from 'react';
import './ContactForm.css'; 

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="contact-form">
      <h1>Contact Me</h1>
      <h2>I'will Be Glad To Answer your Questions</h2>
      <form
        action="https://formspree.io/f/mvoekjaz"
        method="POST"
      >
        <div>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder='Name'
            required
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='Email Address'
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.email}
            onChange={handleChange}
            placeholder='Subject'
            required
          />
        </div>
        <div>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder='Message'
            required
          />
        </div>
        <button className='form-btn' type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
