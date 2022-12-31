import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import ItemModalCart from './ItemModalCart';

const CartWidget = () => {
  const [show, setShow] = useState(false);
  const { cartList, calcpreciototal, Totalcompra, CantProductos } = useContext(CartContext)
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  }
    return (
        <>
          <Button className='botonabrircarrito' onClick={handleShow}>
            <i className='bi bi-cart'></i>
            <h2>{CantProductos}</h2>
          </Button>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Total de carrito: USD {Totalcompra}</Modal.Title>
            </Modal.Header>
            <Modal.Body className='d-flex flex-wrap'>
                {
                    cartList.map(item => <ItemModalCart key={item.id} preciototal={item.preciototal} id={item.id} nombre={item.nombre} precio={item.precio} cantidad={item.cantidad} foto={item.foto}/>)
                }
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Link to='/Cart' onClick={handleClose}>Finalizar compra</Link>
            </Modal.Footer>
          </Modal>
        </>
      );    
}


export default CartWidget;