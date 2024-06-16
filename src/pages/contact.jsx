import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
  const contactStyle = {
    backgroundColor: '#f8f9fa',
    padding: '200px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    minHeight: '807px',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#343a40',
  };

  const paragraphStyle = {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    color: '#6c757d',
  };

  const formStyle = {
    marginTop: '20px',
  };

  return (
    <div className="contact" style={contactStyle}>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8}>
            <h1 style={headingStyle}>Contact Us</h1>
            <p style={paragraphStyle}>
              If you have any questions, suggestions, or just want to say hello, feel free to send us a message!
            </p>
            <Form style={formStyle}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Your message" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Send
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
