import { getFirestore, collection, getDocs,  } from 'firebase/firestore'
import React, {useEffect, useState } from 'react'
import { Producto } from '../../Modelos/producto';

const db = getFirestore();

const useDatosCard = () => {

const [productos, setProductos] = useState<Producto[]>([])

const obtenerProductos = async () => {
const query = await getDocs(collection(db, "productos"))
const productosArray : Producto[] = query.docs.map(doc => {
    const data = doc.data() as Producto;
    return {... data, idProducto: doc.id}
})

setProductos(productosArray);
}

    
  return {
obtenerProductos,

productos,
setProductos
  }
}

export default useDatosCard