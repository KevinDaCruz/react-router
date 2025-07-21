import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router";

function Header() {
  return (
    <header className="bg-light border-bottom py-2">
      <Container>
        <Nav className="justify-content-end">
          <Nav.Link as={Link} to="/">
            Accueil
          </Nav.Link>
          <Nav.Link as={Link} to="/categorie/vetements">
            Vêtements
          </Nav.Link>
          <Nav.Link as={Link} to="/categorie/chaussures">
            Chaussures
          </Nav.Link>
        </Nav>
      </Container>
    </header>
  );
}

export default Header;
