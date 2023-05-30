import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { numberWithCommas } from '../utils/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

const ModalKeranjang = ({ showModal, handleClose, keranjangDetail, jumlah, keterangan, tambah, kurang, changeHandler, handleSubmit, totalHarga, hapusPesanan}) => {
    if (keranjangDetail) {
        return (
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {keranjangDetail.product.nama} {" "}
                        <strong>
                            Rp. {numberWithCommas(keranjangDetail.product.harga)}
                        </strong>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body onSubmit={handleSubmit}>
                    <Form>
                        <Form.Group controlId='exampleForm.ControlInput1'>
                            <Form.Label>Total Harga : Rp. {numberWithCommas(totalHarga)}</Form.Label>
                        </Form.Group>
                        <Form.Group controlId='exampleForm.ControlInput1'>
                            <Form.Label>Jumlah : <strong>{jumlah}</strong></Form.Label>
                            <br />
                            <Button variant='primary' size="sm" className='mr-2' onClick={ () => tambah()}>
                                <FontAwesomeIcon icon={faPlus} />
                            </Button>
                            <Button variant='primary' size="sm" className='ml-2' onClick={ () => kurang()}>
                                <FontAwesomeIcon icon={faMinus} />
                            </Button>
                            <br />
                        </Form.Group>
                        <br />
                        <Form.Group controlId='exampleForm.ControlTextarea1'>
                            <Form.Label>keterangan</Form.Label>
                            <Form.Control as="textarea" rows="3" name="keterangan" placeholder='Contoh : Pedas, Tidak menggunakan sayur, dll.' value={keterangan} onChange={(event) => changeHandler(event)}/>
                        </Form.Group>
                        <br />
                        <Button variant='primary' type='submit'>
                            Simpan
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={() => hapusPesanan(keranjangDetail.id)}>
                        <FontAwesomeIcon icon={faTrash}/> Hapus Pesanan
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    } else {
        return (
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Kosong
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>Kosong</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default ModalKeranjang