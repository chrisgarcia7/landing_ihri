import React, { useState, useEffect, use } from 'react'
import { Button } from 'react-bootstrap'
import styles from './styles/estilos.module.css'

import useDatosCard from './getDatosFirebase/getDatos.tsx'

const EditAdmin = ({ onShow = false, productoEdit }) => {

  const [titulo, setTitulo] = useState('')
  const [subtitulo, setSubtitulo] = useState('')
  const [imagenes, setImagenes] = useState([])
  const [idProducto, setIdProducto] = useState('')
  const [show, setShow] = useState(onShow);

  const { actualizarProducto } = useDatosCard();

  useEffect(() => {
    if (productoEdit) {
      setTitulo(productoEdit.titulo || '');
      setSubtitulo(productoEdit.subtitulo || '');
      setImagenes(productoEdit.imagen || []);
      setIdProducto(productoEdit.idProducto || '')
      console.log(productoEdit)
    }
  }, [productoEdit]);

  const manejarCambioImagenes = (e) => {
    const archivos = Array.from(e.target.files);
    setImagenes(archivos);
  };

  const guardarCambios = () => {
    actualizarProducto(idProducto, titulo, subtitulo, imagenes);
    setIdProducto('');
    setImagenes([]);
    setTitulo('');
    setSubtitulo('');
    }

  return (
    <div>
      {onShow && (
        <div>
          <div className='mb-3' style={{ marginTop: "10px", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>
            <label className="form-label text-light">Nombre del producto</label>
            <input type="text" className="form-control" value={titulo} onChange={(e) => setTitulo(e.target.value)} id="exampleFormControlInput1" placeholder="Producto"></input>
            <label className="form-label text-light">Subtitulo</label>
            <input type="text" className="form-control" value={subtitulo} onChange={(e) => setSubtitulo(e.target.value)} id="exampleFormControlInput2" placeholder="..."></input>
            <label className="form-label text-light">Subir Imagenes</label>
            <input className="form-control" type="file" onChange={manejarCambioImagenes} multiple id="formFile"></input>
            <div className="vista-previa">
              {imagenes.length > 0 ? (
                imagenes.map((imagen, index) => (
                  <img
                    key={index}
                    src={typeof imagen === 'string' ? imagen : URL.createObjectURL(imagen)}
                    alt="Vista previa"
                    className={`${styles.imagenPrevia} m-4 rounded`}
                  />
                ))
              ) : (
                <p>No hay imágenes seleccionadas</p>
              )}
            </div>
            <Button variant='warning' className='mt-2 col-12' onClick={guardarCambios} >Guardar</Button>
            <Button variant='danger' className='mt-2 col-12' onClick={() => setShow(!onShow)}>Cerrar</Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default EditAdmin