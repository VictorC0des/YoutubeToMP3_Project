import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import '../styles/components/header.css'; 

function Header() {
    return (
        <header className="bg-dark header">
            <Container>
                <Navbar className="justify-content-between">
                    <Navbar.Brand as={Link} to="/" className="text-white">
                        Music Converter
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