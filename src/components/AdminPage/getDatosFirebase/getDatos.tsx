import { getFirestore, collection, getDocs, updateDoc, doc } from 'firebase/firestore'
import React, { useState } from 'react'
import { Producto } from '../../../Modelos/producto';

const db = getFirestore();

const useDatosCard = () => {

  const [productos, setProductos] = useState<Producto[]>([])

  const obtenerProductos = async () => {
    const query = await getDocs(collection(db, "productos"))
    const productosArray: Producto[] = query.docs.map(doc => {
      const data = doc.data() as Producto;
      return { ...data, idProducto: doc.id }
    })
    setProductos(productosArray);
  }

  const uploadImages1 = async (imagen) => {
    const formData = new FormData();

    formData.append("file", imagen);
    formData.append("upload_preset", "ml_default");

    const response = await fetch("https://api.cloudinary.com/v1_1/dhc30dpax/image/upload", {
      method: "POST",
      body: formData
    });

    if (!response.ok) {
      throw new Error(`Error en Cloudinary: ${response.statusText}`);
    }


    const data = await response.json();
    return data.secure_url

  };

  const actualizarProducto = async (idProducto, titulo, subtitulo, imagenes) => {
    const urlImagenes = await Promise.all(imagenes.map(uploadImages1))

    try {
      await updateDoc(doc(db, "productos", idProducto), {
        titulo: titulo,
        subtitulo: subtitulo,
        imagen: urlImagenes
      })

      alert("¡Producto actualizado con éxito!")
    } catch (error) {
      console.error(error)
      alert("error al actualizar!");
    }
  }

  return {
    obtenerProductos,
    uploadImages1,
    actualizarProducto,

    productos,
    setProductos
  }
}

export default useDatosCard