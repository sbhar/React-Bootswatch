import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {lat: 28.629635, lng: 77.0915},    
    zoom: 18
  };

  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent
          lat={28.629635}
          lng={77.0915}
          text={'Belzabar'}
        />
      </GoogleMapReact>
    );
  }
}
export default SimpleMap;