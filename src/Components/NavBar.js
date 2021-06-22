import { NavLink } from "react-router-dom";
import "../Style/NavBar.css";
import * as ReactBootStrap from "react-bootstrap";

const NavBar = () => {
  return (
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="xl"
        bg="success"
        variant="dark"
      >
        <ReactBootStrap.Navbar.Brand href="/">
          Budget Up
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse  id="responsive-navbar-nav">
          <ReactBootStrap.Nav>
            <NavLink to="/transactions">Budget</NavLink>
            <NavLink to="/transactions/new">New Transaction</NavLink>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
  );
};

export default NavBar;
