import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.css'
import Carousel from 'react-responsive-carousel/lib/components/Carousel.js';
import './carousel-custom.css';

/* images */
import slide1 from './images/1.jpeg';
import slide2 from './images/2.jpeg';
import slide3 from './images/3.jpeg';
import slide4 from './images/4.jpeg';
import slide5 from './images/5.jpeg';
import slide6 from './images/6.jpeg';

class Carouselz extends Component {
render() {
        return (
            <Carousel >
                <div>
                    <img src={slide1} alt="slide1"/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={slide2} alt="slide2"/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={slide3} alt="slide3"/>
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={slide4} alt="slide4"/>
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src={slide5} alt="slide5"/>
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    <img src={slide6} alt="slide6"/>
                    <p className="legend">Legend 6</p>
                </div>
            </Carousel>
        );
}
}

export default Carouselz;