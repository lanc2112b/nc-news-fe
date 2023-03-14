import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const HeaderNav = () => {
  return (
    <Navbar collapseOnSelect bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/articles">
          <img src="/logo192.png" alt="Logo for xyz" className="App-logo" />{" "}
          NC-News
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/articles">Home</Nav.Link>
            <Nav.Link href="/articles">Articles</Nav.Link>
            <Nav.Link href="/articles">Users Todo</Nav.Link>
            <Nav.Link href="/articles">Profile Todo</Nav.Link>
            <Nav.Link href="/articles">Log In/Out Todo</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderNav;
