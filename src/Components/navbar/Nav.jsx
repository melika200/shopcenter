import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { TbBrandCashapp } from "react-icons/tb";
export default function NavbarItem() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">TiTi Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/product">Product</Nav.Link>
              <Nav className="ms-auto">
                <Nav.Link href="/buy" style={{alignItems:'center'}}>Basket <span style={{fontSize:'16px',fontWeight:'bold'}}><TbBrandCashapp /></span></Nav.Link>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
