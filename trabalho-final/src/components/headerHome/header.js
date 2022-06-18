import React from 'react';
import { Navbar, Container, NavDropdown, Form, FormControl, Button, Nav, Offcanvas } from 'react-bootstrap';


export const Topo = () => {
  return (<>
    
    <Navbar bg="light" expand="lg" >
    

  <Container fluid>
  
    <Navbar.Brand href="#"><button type="button" class="btn btn-light">Tech Books</button></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1"><button type="button" class="btn btn-light">Carrinho</button></Nav.Link>
        <Nav.Link href="#action2"><button type="button" class="btn btn-light">Contato</button></Nav.Link>
      </Nav>
    </Navbar.Collapse>
    <button type="button" class="btn btn-outline-danger">Sair</button>
   
  </Container>
  
</Navbar>

  </>);
}