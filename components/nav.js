//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import React from 'react';
const nav = () => {
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Blogify</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">About</Nav.Link>
      <Nav.Link href="#pricing">Blog</Nav.Link>
     {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>*/}
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Login</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        My profile
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

    </div>
  )
}
export default nav;