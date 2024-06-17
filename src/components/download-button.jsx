import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import SearchBar from './search-bar';

function DownloadButton({ videoUrl, setVideoUrl }) {
    const handleDownload = async () => {
        if (!videoUrl) {
            console.error('URL is empty');
            alert('URL is empty');
            return;
        }
    
        try {
            
            const infoResponse = await axios.get(`http://localhost:3001/api/info?url=${videoUrl}`);
            const videoTitle = infoResponse.data.title; 
    
          
            const response = await axios.get(`http://localhost:3001/api/single/mp3?url=${videoUrl}`, { responseType: 'blob' });
            const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.setAttribute('download', `${videoTitle}.mp3`); 
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <div >
            <SearchBar videoUrl={videoUrl} setVideoUrl={setVideoUrl} />
            <Button onClick={handleDownload} className="mt-2">Download</Button>
        </div>
    );
}

export default DownloadButton;
