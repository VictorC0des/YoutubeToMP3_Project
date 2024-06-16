import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DownloadButton from '../components/download-button';
import VideoInfo from '../components/video-info';
import 'bootstrap/dist/css/bootstrap.min.css';

function Download() {
  const [videoUrl, setVideoUrl] = useState('');

  const downloadStyle = {
    backgroundColor: '#343a40',
    color: '#fff',
    padding: '200px',
    minHeight: '807px',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    marginBottom: '20px',
  };

  return (
    <div className="download" style={downloadStyle}>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8}>
            <h1 style={headingStyle}>Paste the URL of the video to convert it to MP3</h1>
            <DownloadButton videoUrl={videoUrl} setVideoUrl={setVideoUrl} />
            <VideoInfo videoUrl={videoUrl} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Download;
