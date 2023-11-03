// eslint-disable-next-line no-unused-vars
import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Img23 from "../../assets/japanese-food.png";

function Header() {
  return (
    <>
      <Navbar
        className="Nav_bg  border-bottom"
        variant="dark"
        expand="lg"
        fixed="top"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <Container fluid>
          <Navbar.Brand to="/" className="d-flex align-items-center">
            <img
              src={Img23}
              className="logo me-3"
              alt="City Tours Logo"
              style={{ width: "50px", margin: "10px 0" }}
            />
            <span className="fs-4">
              <i>Bistro Bliss</i>
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto w-100 d-flex justify-content-evenly  fw-bold">
              <NavLink
                to="/"
                className="nav-link me-2 font_color text-center text-lg-start "
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="nav-link me-2 font_color text-center text-lg-start"
              >
                About
              </NavLink>
              <NavLink
                to="/tour"
                className="nav-link me-2 font_color text-center text-lg-start"
              >
                Menu
              </NavLink>
              <NavLink
                to="/contact"
                className="nav-link me-2 font_color text-center text-lg-start"
              >
                Contact
              </NavLink>
            </Nav>
            <Link className="text-decoration-none" to="/signup">
              <Button className=" Sign_in fw-semibold border-0  px-4 py-2 w-100  rounded-5 ">
                Book A Table
              </Button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
