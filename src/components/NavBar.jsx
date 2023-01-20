import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Carrito from "./CartWidget";

function NavBar() {
  return (
    <Navbar bg="success" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/" style={{ textDecoration: "none" }}>
            GK-Outlet
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link>
              <Link to="/Hombre" style={{ textDecoration: "none" }}>
                Hombre
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Mujer" style={{ textDecoration: "none" }}>
                Mujer
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Joyeria" style={{ textDecoration: "none" }}>
                Joyería
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link to="/Electronica" style={{ textDecoration: "none" }}>
                Electrónica
              </Link>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Describa su producto"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="light">Buscar</Button>
          </Form>
          <Nav.Link>
            <Carrito />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
