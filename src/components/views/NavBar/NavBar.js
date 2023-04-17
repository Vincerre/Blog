import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Container>
      <Navbar
        bg="primary"
        variant="dark"
        expand="lg"
        className="mt-4 mb-4 px-3 rounded align-items-center justify-content-between">
        <Navbar.Brand>Blog.app</Navbar.Brand>

        <Nav className="">
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about">
            About
          </Nav.Link>
        </Nav>
      </Navbar>
    </Container>
  );
};

export default NavBar;
