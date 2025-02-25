import React, { useState } from 'react'
import { Producto } from '../../Modelos/producto'
import producto1 from './assets/producto1.jpg'
import producto2 from './assets/producto2.jpg'
import producto3 from './assets/producto3.jpg'
import producto4 from './assets/producto4.jpg';
import producto5 from './assets/producto5.jpg';
import producto6 from './assets/producto6.jpg';
import producto7 from './assets/producto7.jpg';
import producto8 from './assets/producto8.jpg';
import producto9 from './assets/producto9.jpg';
import producto10 from './assets/producto10.jpg';
import producto11 from './assets/producto11.jpg';
import producto12 from './assets/producto12.jpg';
import producto13 from './assets/producto13.jpg';
import producto14 from './assets/producto14.jpg';
import producto15 from './assets/producto15.jpg';
import producto16 from './assets/producto16.jpg';
import producto17 from './assets/producto17.jpg';
import producto18 from './assets/producto18.jpg';
import producto19 from './assets/producto19.jpg';
import producto20 from './assets/producto20.jpg';
import producto21 from './assets/producto21.jpg';
import producto22 from './assets/producto22.jpg';
import producto23 from './assets/producto23.jpg';
import producto24 from './assets/producto24.jpg';
import producto25 from './assets/producto25.jpg';
import producto26 from './assets/producto26.jpg';
import producto27 from './assets/producto27.jpg';
import producto28 from './assets/producto28.jpg';
import producto29 from './assets/producto29.jpg';
import producto30 from './assets/producto30.jpg';
import producto31 from './assets/producto31.jpg';
import producto32 from './assets/producto32.jpg';
import producto33 from './assets/producto33.jpg';
import producto34 from './assets/producto34.jpg';
import producto35 from './assets/producto35.jpg';
import producto36 from './assets/producto36.jpg';
import producto37 from './assets/producto37.jpg';
import producto38 from './assets/producto38.jpg';
import producto39 from './assets/producto39.jpg';
import producto40 from './assets/producto40.jpg';
import producto41 from './assets/producto41.jpg';
import producto42 from './assets/producto42.jpg';



export default function CardProductos({producto}) {
  return (
    <div className="room__card">
                <div className="room__card__image">
                <div id={`carouselExample${producto.idProducto}`} className="carousel slide">
                    <div className="carousel-inner">

                                {producto.imagen.map((img, index) => (
                          <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                            <img src={img} className="d-block w-100" alt={producto.titulo} />
                          </div>
                        ))}
                                  
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
                <div className="room__card__details">
                  <h4>{producto.titulo}</h4>
                  {producto.subtitulo && <h5>{producto.subtitulo}</h5>}
                  <button className="btn">Conoce más</button>
                </div>
              </div>
  )
}
