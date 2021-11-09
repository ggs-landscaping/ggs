import React, { useState } from "react"
import { Link } from "gatsby"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap"
import logo from "../../src/img/logo.png"
import "../Nav/nav.scss"

const MainNav = props => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar id="nav" expand="lg">
        <NavbarBrand href="/">
          <Link to="/" className="logo">
            <img
              src={logo}
              alt="niagara-on-the-lake outdoor landscaping design &amp; construction full service landscaping"
            />
          </Link>
        </NavbarBrand>
        <NavbarToggler className="custom-toggler" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/services" className="nav-link">
                Services
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/portfolio" className="nav-link">
                Portfolio
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/company" className="nav-link">
                Our Company
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/quote" className="nav-link">
                Get A Quote
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default MainNav
