import React from 'react'
import { Modal, Button } from 'react-bootstrap'

interface adminModalProps {
    open: boolean,
    close: () => void
}

const ModalAdmin: React.FC<adminModalProps> = ({ open, close }) => {
    return (
        <div>
            <Modal
                show={open}
                onHide={close}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    I will not close if you click outside me. Do not even try to press
                    escape key.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={close}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalAdmin