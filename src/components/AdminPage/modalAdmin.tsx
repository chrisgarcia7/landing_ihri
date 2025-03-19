import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import styles from './styles/estilos.module.css'


const ModalAdmin = () => {

  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [imagenes, setImagenes] = useState([]);

  const manejarCambioImagenes = (e) => {
    const archivos = Array.from(e.target.files);
    setImagenes(archivos);
  };


  return (
   <div>
      <Button variant='success' onClick={() => setMostrarFormulario(!mostrarFormulario)}>
        {mostrarFormulario ? "Ocultar Formulario" : "Agregar Producto"}
      </Button>

      {mostrarFormulario && (
        <div className='mb-3' style={{ marginTop: "10px", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>
          <label className="form-label text-light">Nombre del producto</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Producto"></input>
          <label className="form-label text-light">Subtitulo</label>
          <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="..."></input>
          <label className="form-label text-light">Subir Imagenes</label>
          <input className="form-control" type="file" multiple onChange={manejarCambioImagenes} id="formFile"></input>
          <div className="vista-previa">
            {imagenes.map((imagen, index) => (
              <img key={index} src={URL.createObjectURL(imagen)} alt="Vista previa" className={`${styles.imagenPrevia} m-4 rounded`}/>
            ))}
          </div>
          <Button variant='success' className='mt-2 col-12'>Guardar</Button>
        </div>
      )}
   </div>
  )
}

export default ModalAdmin