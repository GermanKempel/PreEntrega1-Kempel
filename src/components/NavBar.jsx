import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Carrito from "./CartWidget";

function NavBar() {
  return (
    <Navbar bg="success" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">GK-Indumentaria</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Inicio</Nav.Link>
            <Nav.Link href="#action2">Novedades</Nav.Link>
            <NavDropdown title="Productos" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Hombre</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Mujer</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Niños</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Contacto
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
          <Carrito></Carrito>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
