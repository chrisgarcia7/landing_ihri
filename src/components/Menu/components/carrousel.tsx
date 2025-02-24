import React from 'react'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../estilos/style.css'

import instalacion6 from '../../paginaInicio/assets/instalacion6.jpg'
import instalacion5 from '../../paginaInicio/assets/instalacion5.jpg'
import instalacion4 from '../../paginaInicio/assets/instalacion4.jpg'

const carrousel = () => {
  return (
    <div className='carrusel'>
    <Carousel className='carousel'>
    <Carousel.Item interval={1000} className='carousel-item'>
      <img src={instalacion6} />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500} className='carousel-item'>
      <img src={instalacion5} />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className='carousel-item'>
      <img src={instalacion4} />
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