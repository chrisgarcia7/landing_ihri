import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import styles from './styles/estilos.module.css'

import { db } from '../../firebase/firebaseConfig.ts'
import { collection, addDoc } from 'firebase/firestore'


const ModalAdmin = () => {

  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [imagenes, setImagenes] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [subtitulo, setSubtitulo] = useState('');
  const [subiendo, setSubiendo] = useState(false);

  const manejarCambioImagenes = (e) => {
    const archivos = Array.from(e.target.files);
    setImagenes(archivos);
  };

  const uploadImages = async (imagen) => {
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

   const enviarFirestore = async () => {
    if (!titulo || !subtitulo || imagenes.length === 0){
      alert('Todos los campos son necesarios');
      return;
    }

    setSubiendo(true);

    try {
      const urlImagenes = await Promise.all(imagenes.map(uploadImages));

      console.log(urlImagenes)

      await addDoc(collection(db, "productos"), {
        titulo: String(titulo),
        subtitulo: String(subtitulo),
        imagen: urlImagenes
      });

      alert('Producto Guardado con Exito!');
      setTitulo('');
      setSubtitulo('');
      setImagenes([]);
    } catch (error) {
      console.error("Error al guardar:", error);
      alert("Error al guardar el producto");
    }
   }



  return (
    <div>
      <Button variant='success' onClick={() => setMostrarFormulario(!mostrarFormulario)}>
        {mostrarFormulario ? "Ocultar Formulario" : "Agregar Producto"}
      </Button>

      {mostrarFormulario && (
        <div className='mb-3' style={{ marginTop: "10px", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>
          <label className="form-label text-light">Nombre del producto</label>
          <input type="text" className="form-control" value={titulo} onChange={(e) => setTitulo(e.target.value)} id="exampleFormControlInput1" placeholder="Producto"></input>
          <label className="form-label text-light">Subtitulo</label>
          <input type="text" className="form-control" value={subtitulo} onChange={(e) => setSubtitulo(e.target.value)} id="exampleFormControlInput2" placeholder="..."></input>
          <label className="form-label text-light">Subir Imagenes</label>
          <input className="form-control" type="file" multiple onChange={manejarCambioImagenes} id="formFile"></input>
          <div className="vista-previa">
            {imagenes.map((imagen, index) => (
              <img key={index} src={URL.createObjectURL(imagen)} alt="Vista previa" className={`${styles.imagenPrevia} m-4 rounded`} />
            ))}
          </div>
          <Button variant='success' onClick={enviarFirestore} className='mt-2 col-12'>Guardar</Button>
        </div>
      )}
    </div>
  )
}

export default ModalAdmin