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

    return (
        <div className="home">
            <Container fluid className="bg-dark text-white p-5">
                <Row>
                    <Col xs={12} md={8} lg={6}>
                        <h1>Welcome to our Music Converter</h1>
                        <p>
                            This application allows you to convert YouTube videos into MP3 files.
                            Start now to enjoy your favorite music offline!
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