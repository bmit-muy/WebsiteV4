import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ContactForm = () => {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [messageContent, setMessageContent] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', senderName);
    formData.append('email', senderEmail);
    formData.append('message', messageContent);

    try {
      const response = await fetch('./contact.php', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        setResponse('Your message has been successfully submitted!');
      } else {
        throw new Error('Failed to submit the form.');
      }
    } catch (error) {
      setResponse('An error occurred while submitting the form.');
    }
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
            rows={8}
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
