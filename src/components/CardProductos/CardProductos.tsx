import React, { useState } from "react";
import { Producto } from "../../Modelos/producto";


export default function CardProductos({ producto }) {
  return (
    <div className="room__card">
      <div className="room__card__image">
        <div id={`carouselExample${producto.idProducto}`} className="carousel slide" style={{ marginBottom: '-60%' }}>
          <div className="carousel-inner">
            {producto.imagen.map((img, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <img src={img} className="d-block w-100" alt={producto.titulo} />
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target={`#carouselExample${producto.idProducto}`}
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target={`#carouselExample${producto.idProducto}`}
            data-bs-slide="next"
          >
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
  );
}
