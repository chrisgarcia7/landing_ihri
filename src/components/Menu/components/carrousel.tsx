import React from 'react'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'


const carrousel = () => {
  return (
    <div style={{maxWidth: "600px", height: "auto",}}>
    <Carousel className='carousel'>
    <Carousel.Item interval={1000} className='carousel-item'>
      <img src="https://fakeimg.pl/600x400" />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500} className='carousel-item'>
      <img src="https://fakeimg.pl/600x400" />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className='carousel-item'>
      <img src="https://fakeimg.pl/600x400" />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  )
}

export default carrousel