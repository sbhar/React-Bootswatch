import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      light:true,
      color:' ',
      classname:'  '
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
changenavtheme(themecolor){
  console.log(themecolor);
  if(themecolor==='dark'){
    this.setState({
        light: false,
        classname: 'navbar-inverse bg-primary',
        color: "inverse"
    })
  }else if(themecolor==='cerulean'){
    this.setState({
        light: true,
        classname: 'navbar-inverse bg-primary',
        color: 'faded'
    })
  }else if(themecolor==='lux'){
    this.setState({
        light: false,
        classname: 'navbar-default bg-primary'
    })
  }
  else if(themecolor==='default'){
    this.setState({
        light: false,
        classname: 'navbar-default bg-primary',
        color:'inverse'
    })
  }
}

  render() {
    return (
      <div>
        {/*<Navbar color="inverse" inverse toggleable>*/}
        <Navbar color={this.state.color} toggleable inverse className='bg-primary'>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/">React Bootswatcher </NavbarBrand>
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
