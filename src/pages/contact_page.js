import React from 'react';
import ContactForm from '../components/contact_form';
import './ContactPage.css';


const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-info">
        <h2>Contact Me</h2>
        <p>
          Please feel free to reach out to me with any questions, feedback, or inquiries you may have.
        </p>
        <p>Phone: +41 79 842 71 44</p>
        <p>Address: Naglerwiesenstrasse 4, 8049 Zürich, Schweitz</p>
      </div>
      <div className="contact-form">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
