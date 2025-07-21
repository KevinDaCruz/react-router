import { Container, Nav } from "react-bootstrap";

function Header() {
  return (
    <header className="bg-light border-bottom py-2">
      <Container>
        <Nav className="justify-content-end">
          <Nav.Link as="a" href="/">
            Accueil
          </Nav.Link>
          <Nav.Link as="a" href="/categorie/vetements">
            Vêtements
          </Nav.Link>
          <Nav.Link as="a" href="/categorie/chaussures">
            Chaussures
          </Nav.Link>
        </Nav>
      </Container>
    </header>
  );
}

export default Header;
