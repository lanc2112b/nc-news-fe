import { useContext } from "react";
import { UserContext } from '../contexts/User'
import { Link } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const HeaderNav = () => {

  const { user, setUser } = useContext(UserContext);

  const userHandler = () => {
    if (user.username) {
      setUser({
        username: null,
        name: null,
        avatar_url: null,
      });
    } else {
      setUser({
        username: "jessjelly",
        name: "Jess Jelly",
        avatar_url:
          "https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141",
      });
    }
  }

  return (
    <Navbar collapseOnSelect bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src="/logo192.png" alt="Logo for xyz" className="App-logo" />{" "}
          NC-News
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/articles">
              Articles
            </Nav.Link>
            <Nav.Link as={Link} to="/users">
              Users
            </Nav.Link>
            <Nav.Link as={Link} to="/api">
              Api
            </Nav.Link>

            <Nav.Link as={Link} to="#" onClick={userHandler}>
              Log {!user.username ? "In" : "Out"}
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={user.username ? `/users/${user.username}` : `#`}
              className={user.username ?? "profile_link"}
            >
              Profile
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderNav;
