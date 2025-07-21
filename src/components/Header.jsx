import { Container, Nav } from "react-bootstrap";
import { Link } from 'react-router';

function Header() {
  return (
    <header className="bg-light border-bottom py-2">
      <Container>
        <Nav as="ul" className="justify-content-end mb-0">
          <Nav.Item as="li">
            <Nav.Link as={Link} to="/">
              Accueil
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link as={Link} to="/categorie/vetements">
              Vêtements
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link as={Link} to="/categorie/chaussures">
              Chaussures
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </header>
  );
}

export default Header;
