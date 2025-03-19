import React, { useEffect, useState } from 'react'
import styles from './styles/estilos.module.css'
import { Button } from 'react-bootstrap'

import ModalAdmin from './modalAdmin.tsx'
import useDatosCard from './getDatosFirebase/getDatos.tsx'
import EditAdmin from './editAdmin.tsx'

import { db } from '../../firebase/firebaseConfig.ts'
import { doc, deleteDoc } from 'firebase/firestore'

const AdminPage = () => {

    const { obtenerProductos, productos } = useDatosCard()
    const [onDisabled, setOnDisabled] = useState(false);
    const [onShow, setOnShow] = useState(false);
    const [productoEdit, setProductoEdit] = useState({});


    useEffect(() => {
        obtenerProductos()
    })

    const Editproducto = (producto) => {
        setOnDisabled(true);
        setOnShow(true);
        console.log(producto)
        setProductoEdit(producto)
    }


    const eliminarRegistro = async (id) => {
        const confirmacion = window.confirm('Quieres eliminar este registro?');
        if (!confirmacion) return

        try {
            await deleteDoc(doc(db, "productos", id));
            alert('Producto eliminado con exito!');
        } catch (error) {
            alert("Error al eliminar el producto!")
        }
    }



    return (
        <div className={styles.containerAdmin}>
            <section>
                <div className='container-bienvenida'>
                    <h1 className={styles.bienvenidaAdmin}>Bienvenido Administrador</h1>
                </div>
            </section>

            <ModalAdmin></ModalAdmin>
            <EditAdmin onShow={onShow} productoEdit={productoEdit}></EditAdmin>


            <section className={styles.tableAdmin}>
                {productos.length === 0 ?
                    <h1 className={styles.noneProductos}>No hay productos que mostrar!</h1>
                    :
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th scope="col">id-producto</th>
                                <th scope="col">Titulo</th>
                                <th scope="col">subtitulo</th>
                                <th scope="col">imagen</th>
                                <th scope='col'>opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productos.map((producto) => (
                                <tr key={producto.idProducto}>
                                    <th>{producto.idProducto}</th>
                                    <th>{producto.titulo}</th>
                                    <th>{!producto.subtitulo ? <p>No existe subtitulo!</p> : producto.subtitulo}</th>
                                    <th>
                                        <img src={producto.imagen[0]} alt={producto.titulo} width={50} height={50} />
                                    </th>
                                    <th>
                                        <Button variant='warning' onClick={() => Editproducto(producto)} style={{ margin: '10px' }}>Editar</Button>
                                        <Button variant='danger' onClick={() => eliminarRegistro(producto.idProducto)}>Eliminar</Button>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                }
            </section>
        </div>
    )
}

export default AdminPage