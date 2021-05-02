import { Button, Nav, Navbar, Form, FormControl } from "react-bootstrap";
import { NavLink } from "react-router-dom"

const Navbarcomp = () => {
  return (

      <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={NavLink} to='/'><h2>AJ blogs</h2></Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
          <Nav.Link as={NavLink} to='/create'>Create</Nav.Link>
          <Nav.Link as={NavLink} to='/contact'>Contact</Nav.Link>

        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>

  );
};

export default Navbarcomp;
