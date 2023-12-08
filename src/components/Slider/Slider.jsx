import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import pic1 from "../Asset/images/pic2.jpg.jpg";
import pic2 from "../Asset/images/pic3.jpg.jpg";
import pic3 from "../Asset/images/pic6.3.jpg";
import pic4 from '../Asset/images/slider6.jpg';
import pic5 from '../Asset/images/slider7.jpg';
import './Slider.css';

const Slider = () => {
  return (
    <Carousel className='slider'>
      <Carousel.Item>
      <img
          className="d-block w-100" width={900} height={900}
          src={pic1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100" width={900} height={900}
          src={pic2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100" width={900} height={900}
          src={pic3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100" width={900} height={900}
          src={pic4}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100" width={900} height={900}
          src={pic5}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
  }
export default Slider;