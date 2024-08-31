/** @format */

// import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { images } from "../exports/images";
import "./styles/layout.css";

export default function AppHeader() {
  return (
    <Navbar expand='lg' id="header">
      <div className="navbar-container">
        <Navbar.Brand href='#home' className="navbar-brand">
          <img src={images.BrandLogo} alt="Brand Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#home' className="active">Home</Nav.Link>
            <Nav.Link href='#about'>About Us</Nav.Link>
            <Nav.Link href='#services'>Services</Nav.Link>
            <Nav.Link href='#portfolio'>Porfolio</Nav.Link>
            <Nav.Link href='#testimonials'>Testimonials</Nav.Link>
            <Nav.Link href='#faqs'>Faqs</Nav.Link>
            {/* <Nav.Link href='#contact'>Contact Us</Nav.Link> */}

            <button className="btn bcg-primary text-white contact-us">
              Contact Us
            </button>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
