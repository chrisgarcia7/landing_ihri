import { useState } from "react"
import React from 'react'
import producto1 from '../assets/producto1.jpg'
import producto2 from '../assets/producto2.jpg'
import producto3 from '../assets/producto3.jpg'
import producto4 from '../assets/producto4.jpg';
import producto5 from '../assets/producto5.jpg';
import producto6 from '../assets/producto6.jpg';
import producto7 from '../assets/producto7.jpg';
import producto8 from '../assets/producto8.jpg';
import producto9 from '../assets/producto9.jpg';
import producto10 from '../assets/producto10.jpg';
import producto11 from '../assets/producto11.jpg';
import producto12 from '../assets/producto12.jpg';
import producto13 from '../assets/producto13.jpg';
import producto14 from '../assets/producto14.jpg';
import producto15 from '../assets/producto15.jpg';
import producto16 from '../assets/producto16.jpg';
import producto17 from '../assets/producto17.jpg';
import producto18 from '../assets/producto18.jpg';
import producto19 from '../assets/producto19.jpg';
import producto20 from '../assets/producto20.jpg';
import producto21 from '../assets/producto21.jpg';
import producto22 from '../assets/producto22.jpg';
import producto23 from '../assets/producto23.jpg';
import producto24 from '../assets/producto24.jpg';
import producto25 from '../assets/producto25.jpg';
import producto26 from '../assets/producto26.jpg';
import producto27 from '../assets/producto27.jpg';
import producto28 from '../assets/producto28.jpg';
import producto29 from '../assets/producto29.jpg';
import producto30 from '../assets/producto30.jpg';
import producto31 from '../assets/producto31.jpg';
import producto32 from '../assets/producto32.jpg';
import producto33 from '../assets/producto33.jpg';
import producto34 from '../assets/producto34.jpg';
import producto35 from '../assets/producto35.jpg';
import producto36 from '../assets/producto36.jpg';
import producto37 from '../assets/producto37.jpg';
import producto38 from '../assets/producto38.jpg';
import producto39 from '../assets/producto39.jpg';
import producto40 from '../assets/producto40.jpg';
import producto41 from '../assets/producto41.jpg';
import producto42 from '../assets/producto42.jpg';
import { Producto } from "../../../Modelos/producto"

const useProductos = () => {

 const [productos, setProductos]= useState<Producto[]>([
    {
      idProducto:1,
      imagen: [producto1, producto2, producto3],
      titulo: 'Zapatos que se le  colocado Alza por acortamiento en miembro inferior',
      subtitulo: ''
    },
    {
      idProducto:2,
      imagen: [producto4, producto5, producto6,producto7, producto8, producto9],
      titulo: 'Zapatos  elaborados en el IHRI que llevan Alza por acortamiento en miembro inferior ',
      subtitulo:''
    },
    {
      idProducto:3,
      imagen: [producto10, producto11, producto12, producto13, producto14, producto15, producto16, producto17, producto18, producto19, producto20, producto21],
      titulo: 'Zapator ortopedicos para : pie plano, pie equinovaro, pie con secuelas de poliomielitis entre otros',
      subtitulo: ''
    },
    {
      idProducto:4,
      imagen: [producto22, producto23, producto24, producto25, producto26],
      titulo: 'Zapatos Comerciales ',
      subtitulo: ''
    },
    {
      idProducto:5,
      imagen: [producto27, producto28, producto29, producto30, producto31, producto32],
      titulo: 'Plantillas Ortopédicas',
      subtitulo:''
    },
    {
      idProducto:6,
      imagen: [producto33],
      titulo: 'Productos del Área de Ortesis y  prótesis ',
      subtitulo: 'H-KAFO'
    },
    {
      idProducto:7,
      imagen: [producto34],
      titulo: 'Productos del Área de Ortesis y  prótesis ',
      subtitulo: 'Prótesis Transtibial  '
    },
    {
      idProducto:8,
      imagen: [producto35],
      titulo: 'Productos del Área de Ortesis y  prótesis ',
      subtitulo: 'Prótesis Transfemoral'

    },
    {
      idProducto:9,
      imagen: [producto36],
      titulo: 'Productos del Área de Ortesis y  prótesis ',
      subtitulo: 'Pie Parcial '

    },
    {
      idProducto:10,
      imagen: [producto37],
      titulo: 'Productos del Área de Ortesis y  prótesis ',
      subtitulo: 'Pie fijo sach'
    },
    {
      idProducto:11,
      imagen: [producto38],
      titulo: 'Productos del Área de Ortesis y  prótesis ',
      subtitulo: 'Pie Articulado '
    },
    {
      idProducto:12,
      imagen: [producto39, producto40],
      titulo: 'Productos del Área de Ortesis y  prótesis ',
      subtitulo: 'AFO'
    },
    {
      idProducto:13,
      imagen: [producto41],
      titulo: 'Productos del Área de Ortesis y  prótesis ',
      subtitulo: 'Faja para prótesis transtibial de cuero'
    },
    {
      idProducto:14,
      imagen: [producto42],
      titulo: 'Productos del Área de Ortesis y  prótesis ',
      subtitulo: 'Barra Dennis Brown '
    }

  ])


  return productos
}

export default useProductos