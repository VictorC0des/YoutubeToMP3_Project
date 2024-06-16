import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  const aboutStyle = {
    backgroundColor: '#f8f9fa',
    padding: '238px',
    borderRadius: '8px',
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

  return (
    <div className="about" style={aboutStyle}>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8}>
            <h1 style={headingStyle}>About Us</h1>
            <p style={paragraphStyle}>
              Welcome to our Music Converter application. We are dedicated to providing you with a simple and efficient way to convert your favorite YouTube videos into MP3 files. Our goal is to make your music experience seamless and enjoyable, allowing you to listen to your favorite tracks offline anytime, anywhere.
            </p>
            <p style={paragraphStyle}>
              Our team is passionate about music and technology, constantly working to improve our service and add new features. We hope you enjoy using our application as much as we enjoyed creating it for you.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
