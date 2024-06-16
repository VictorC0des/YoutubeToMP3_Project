import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';


const VideoInfo = ({ videoUrl }) => {
    const [videoInfo, setVideoInfo] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        const fetchVideoInfo = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/info?url=${videoUrl}`);
                setVideoInfo(response.data);
            } catch (err) {
                console.error(err);
                setError('Hubo un error al obtener la información del video.');
            }
        };

        if (videoUrl) {
            fetchVideoInfo();
        }
    }, [videoUrl]);

    useEffect(() => {
        if (videoInfo) {
            console.log(videoInfo);
        }
    }, [videoInfo]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!videoInfo) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
  <Container>
    <Row className="justify-content-md-center">
      <Col md="auto">
        <Card className="text-center">
          <Card.Img variant="top" src={videoInfo.thumbnail} alt={videoInfo.title} />
          <Card.Body>
            <Card.Title>{videoInfo.title}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
</div>
    );
}

export default VideoInfo;