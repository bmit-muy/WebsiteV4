// ContactForm.js

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ContactForm = () => {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [messageContent, setMessageContent] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Your form submission logic goes here
    // ...

    // For demonstration purposes, we'll just set a success message
    setResponse('Your message has been successfully submitted!');
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formSenderName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formSenderEmail">
          <Form.Label>Your Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={senderEmail}
            onChange={(e) => setSenderEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formMessageContent">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Enter your message"
            value={messageContent}
            onChange={(e) => setMessageContent(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      {response && <p className="response-message">{response}</p>}
    </div>
  );
};

export default ContactForm;
