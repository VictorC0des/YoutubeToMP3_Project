import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { FaYoutube} from 'react-icons/fa';
import '../styles/components/header.css'; 

function Header() {
    return (
        <header className="bg-dark header">
            <Container>
                <Navbar className="justify-content-between">
                    <Navbar.Brand as={Link} to="/" className="text-white">
                    <a href="https://youtube.com" target="_blank" rel="noreferrer"><FaYoutube style={{ color: 'red', width: "100px" }} /></a> Music Converter
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link as={Link} to="/download" className="text-white">
                            Convert
                        </Nav.Link>
                        <Nav.Link as={Link} to="/about" className="text-white">
                            About
                        </Nav.Link>
                        <Nav.Link as={Link} to="/contact" className="text-white">
                            Contact us
                        </Nav.Link>
                    </Nav>
                </Navbar>
            </Container>
        </header>
    );
}

export default Header;