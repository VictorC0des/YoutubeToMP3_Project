import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/pages/home.css';

function Home() {
  const navigate = useNavigate();

  const goToSearch = () => {
    navigate('/download');
  };

  const homeStyle = {
    backgroundColor: '#343a40',
    color: '#fff',
    padding: '20px',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    marginBottom: '20px',
  };

  const paragraphStyle = {
    fontSize: '1.2rem',
    lineHeight: '1.6',
  };

  return (
    <div className="home" style={homeStyle}>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8} className="text-center">
            <h1 style={headingStyle}>Welcome to our Music Converter</h1>
            <p style={paragraphStyle}>
              This application allows you to convert YouTube videos into MP3 files. Start now to enjoy your favorite music offline!
            </p>
            <p>
              <Button variant="primary" size="lg" onClick={goToSearch}>
                Start Now
              </Button>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
