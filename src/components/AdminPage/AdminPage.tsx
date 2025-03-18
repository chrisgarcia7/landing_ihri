import React, { useEffect, useState } from 'react'
import styles from './styles/estilos.module.css'
import { Button } from 'react-bootstrap'

import ModalAdmin from './modalAdmin.tsx'
import useDatosCard from './getDatosFirebase/getDatos.tsx'
const AdminPage = () => {

    const { obtenerProductos, productos } = useDatosCard()
    const [show, setShow] = useState(false);

    const closeModal = () => setShow(false);
    const openModal = () => setShow(true);

    useEffect(() => {
        obtenerProductos()
    })



    return (
        <div className={styles.containerAdmin}>
            <section>
                <div className='container-bienvenida'>
                    <h1 className={styles.bienvenidaAdmin} onClick={openModal}>Bienvenido Administrador</h1>
                </div>
            </section>

            <Button variant='success' className={styles.btnAdd} onClick={openModal}>Agregar nueva mercancia</Button>

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
                                        <Button variant='warning' style={{ margin: '10px' }}>Editar</Button>
                                        <Button variant='danger'>Eliminar</Button>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                }
                <ModalAdmin open={show} close={closeModal}></ModalAdmin>
            </section>

        </div>
    )
}

export default AdminPage