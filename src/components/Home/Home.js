import React, { Component } from 'react';
import Carouselz from '../Carousel/carousel.js';
import Content from '../Content/content.js';


class Home extends Component {
  render() {
    return (
      <div >
        <Carouselz />
          <Content />
      </div>
    );
  }
}

export default Home;