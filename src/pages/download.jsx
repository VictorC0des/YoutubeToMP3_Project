import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import DownloadButton from "../components/download-button";
import VideoInfo from "../components/video-info";

function Download() {
    const [videoUrl, setVideoUrl] = useState('');

    return (
        <div className="home">
            <Container fluid className="bg-dark text-white p-5">
                <Row>
                    <Col xs={12} md={8} lg={6}>
                        <h1>Paste the url of the video to convert it to mp3</h1>
                        <p>
                            
                        </p>
                        <DownloadButton videoUrl={videoUrl} setVideoUrl={setVideoUrl} />
                    </Col>
                    <Col xs={12} md={4} lg={6}>
                        <VideoInfo videoUrl={videoUrl} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Download;
 