import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import '../estilos/estilos.css'

import instalacion6 from '../../paginaInicio/assets/instalacion6.jpg'
import instalacion5 from '../../paginaInicio/assets/instalacion5.jpg'
import instalacion4 from '../../paginaInicio/assets/instalacion4.jpg'

const carrousel = () => {
  return (
    <div>
      <Container fluid className='carrusel menu'>
        <Carousel className='carousel-menu'>
          <Carousel.Item interval={4000} className='carousel-item-menu'>
            <img src={instalacion6} className='imagen-del-carrusel' />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={4000} className='carousel-item-menu'>
            <img src={instalacion5} className='imagen-del-carrusel' />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={4000} className='carousel-item-menu'>
            <img src={instalacion4} className='imagen-del-carrusel' />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  )
}

export default carrousel