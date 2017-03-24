import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/">React Bootswatcher</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink><Link to="/home">Home</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="/contact">Contact</Link></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        
      </div>
    );
  }
}
