import React, { Component } from 'react';

import SimpleMap from '../GoogleMaps/gmap';
//import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <h2>Contact Page</h2>
        <div className="row">
          <div className="col-md-1"><b>Address</b></div>
          <div className="col-md-11">B1 Community Centre Janakpuri New Delhi-110058</div>
        </div>
        <div style={{width: '100%', height: '400px'}}>
        <SimpleMap />
        </div>
      </div>
    );
  }
}

export default Contact;
