import { Container, Nav } from "react-bootstrap";
import { NavLink, useMatch } from "react-router";
import "../assets/styles/Header.css";

function Header() {
  const match = useMatch("/categorie/:category");

  return (
    <header className="bg-light border-bottom py-2">
      <Container>
        {match ? (
          <div className="fw-bold">Catégorie : {match.params.category}</div>
        ) : (
          <div />
        )}
        <Nav className="justify-content-end">
          <Nav.Link as={NavLink} to="/" className="nav-link">
            Accueil
          </Nav.Link>
          <Nav.Link as={NavLink} to="/categorie/vetements" className="nav-link">
            Vêtements
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/categorie/chaussures"
            className="nav-link"
          >
            Chaussures
          </Nav.Link>
        </Nav>
      </Container>
    </header>
  );
}

export default Header;
