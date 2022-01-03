import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import "./header.css";


function Header() {

  const {total} = useSelector(state => state);
  return (
    <header>
      <div className="logoBox">
        <ul className="signIn">
          <li>
            <Link to="login">ورود</Link>
          </li>
          |
          <li>
            <Link to="register">ثبت نام</Link>
          </li>
        </ul>
        <span className="logoImgBox">
          <img src="/catering_project/images/logo/logo.png" alt="پرتقال"/>
        </span>
        <span className="ourServices">
          <Link to="Cart">
            <span className="d-none d-md-inline">لیست سفارشات </span>
            <FontAwesomeIcon
              icon={["fas", "cart-arrow-down"]}
            ></FontAwesomeIcon>
          </Link>
          <span className="totalOrders">{total}</span>
        </span>
      </div>
      <Navbar id="stickyNav" expand="md" className="bg-orange" variant="light">
        <Container>
          <Navbar className="d-none d-md-flex" id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">
                خانه
              </Nav.Link>
              <NavDropdown title="رستوران ها   " id="collasible-nav-dropdown">
                <NavDropdown.Item as={NavLink} to="Collections">
                  همه
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="Collections/2">
                  سنتی
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="Collections/1">
                  فست فود
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="Collections/3">
                  {" "}
                  قنادی
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={NavLink} to="services">خدمات ما</Nav.Link>
              <Nav.Link as={NavLink} to="aboutUs">درباره ما</Nav.Link>
            </Nav>
          </Navbar>
          <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                <span className="logoImgBox">
                  <img src="/catering_project/images/logo/logo.png" alt="پرتقال"/>
                </span>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={NavLink} to="/">خانه</Nav.Link>
                <NavDropdown title="رستوران ها   " id="collasible-nav-dropdown">
                  <NavDropdown.Item as={NavLink} to="Collections/2">سنتی</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="Collections/1">فست فود</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="Collections/3">{" "}قنادی</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={NavLink} to="services">خدمات ما</Nav.Link>
                <Nav.Link as={NavLink} to="aboutUs">درباره ما</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
        <Navbar.Toggle />
        <Navbar.Brand>
          <h4>پرتقال</h4>
          <h6>سفارش آنلاین غذا</h6>
        </Navbar.Brand>
      </Navbar>
    </header>
  );
}

export default React.memo(Header);
