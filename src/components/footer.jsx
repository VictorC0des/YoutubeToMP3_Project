import { Navbar, Container } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-dark text-white p-3">
      <Container>
        <Navbar expand="lg" variant="dark">
          <div className="d-flex justify-content-between ml-auto" style={{ width: '200px' }}>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><FaFacebook style={{ color: 'white' }} /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer"><FaTwitter style={{ color: 'white' }} /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><FaInstagram style={{ color: 'white' }} /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin style={{ color: 'white' }} /></a>
          </div>
        </Navbar>
      </Container>
    </footer>
  );
}

export default Footer;