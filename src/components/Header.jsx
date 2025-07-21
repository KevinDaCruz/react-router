import { Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router";
import "../assets/styles/Header.css";

function Header() {
  return (
    <header className="bg-light border-bottom py-2">
      <Container>
        <Nav className="justify-content-end">
          <Nav.Link as={NavLink} to="/" className="nav-link">
            Accueil
          </Nav.Link>
          <Nav.Link as={NavLink} to="/categorie/vetements" className="nav-link">
            Vêtements
          </Nav.Link>
          <Nav.Link as={NavLink} to="/categorie/chaussures" className="nav-link">
            Chaussures
          </Nav.Link>
        </Nav>
      </Container>
    </header>
  );
}

export default Header;
