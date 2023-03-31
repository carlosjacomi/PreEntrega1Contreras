import { useContext, useState } from 'react'

import {Container,Row,Col, Image, ButtonGroup,  ToggleButton, ToggleButtonGroup} from 'react-bootstrap';

import { CartContext } from '../../context/CartContext'
import NavBar from '../../components/navbar/NavBar'
import { NavLink } from 'react-router-dom';


const CartPage = () =>  {
    const {itemsCart,onRemove,onClear} = useContext (CartContext)
    const totalItems = itemsCart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.product.quantity;
    }, 0);
    const totalPrice = itemsCart.reduce((accumulator, currentItem) => {
        return accumulator + (currentItem.product.price*currentItem.product.quantity);
    }, 0);
    const isEmpty = itemsCart.length === 0 ? true : false;
    return (
        <>
            <NavBar/>
            <Container>
                <Row>
                    <Col xs={12}> 
                        <h1 className='text-center py-3 fw-bold'>Carrito de Compras</h1>
                    </Col>
                </Row>
                <Row>
                    {isEmpty
                    ?
                        <Col xs='12' className='text-center'>
                            <h1 className='fw-light'>¡No hay nada aqui!, debes agregar productos a tu carrito para comprar</h1>
                        </Col>
                    :
                        itemsCart.map(({product}) => (
                            <Col xs={12} key={product.id} className='d-flex  align-items-center text-white text-center pt-2 pb-2 mt-1 mb-1 border border-light round rounded-3 bg-dark'> 
                                <Col xs={1}> 
                                    <Image src={product.image} alt={product.details} className='rounded rounded-4 w-100'></Image>
                                </Col>
                                <Col xs={5}> 
                                    <h3 className='text-center py-3'>{product.title}</h3>
                                </Col>
                                <Col xs={1}> 
                                    <h3 className='text-center py-3'>{product.quantity}</h3>
                                </Col>
                                <Col xs={2}> 
                                    <h3 className='text-center py-3'>{`$ ${new Intl.NumberFormat().format(product.price*product.quantity)}`}</h3>
                                </Col>
                                <Col xs={3}> 
                                    <ButtonGroup className={'w-75'}>
                                        <ToggleButtonGroup type='radio' name='my-group' className='mb-2 w-100'>
                                        <NavLink to={`/item/${product.id}`} className={'w-100'}>
                                            <ToggleButton variant='warning' className={'w-100'}><h5 className='fw-bold'>Ver</h5></ToggleButton>
                                        </NavLink>
                                        <NavLink to='#' className={'w-100'}>
                                            <ToggleButton variant='danger' className={'w-100 mx-1'} onClick={() => {onRemove(product.id)}}><h5 className='fw-bold'>Eliminar</h5></ToggleButton>
                                        </NavLink>
                                        </ToggleButtonGroup>
                                    </ButtonGroup>
                                </Col>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
            {!isEmpty &&
            <Container fluid className='p-0 fixed-bottom'>
                <Row className='g-0'>
                    <Col xs={12} className='d-flex  align-items-center text-center mt-1 border border-light round rounded-3 bg-warning'>
                        <Col xs={4}>
                                <h4 className='text-center py-3 fw-bold'>Total</h4>
                        </Col>
                        <Col xs={2}>
                                <h4 className='text-center py-3 fw-bold'>{`${totalItems} ${totalItems >1 ? 'Productos' : 'Producto'}`}</h4>
                        </Col>
                        <Col xs={3}>
                                <h4 className='text-center py-3 fw-bold'>{`$ ${new Intl.NumberFormat().format(totalPrice)}`}</h4>
                        </Col>
                        <Col xs={3}>
                        <ButtonGroup className={'w-75'}>
                                <ToggleButtonGroup type='radio' name='my-group' className='mb-2 w-100'>
                                <NavLink to='#' className={'w-100'}>
                                    <ToggleButton variant='success' className={'w-100'}><h5 className='fw-bold'>Check Out</h5></ToggleButton>
                                </NavLink>
                                <NavLink to='#' className={'w-100'}>
                                    <ToggleButton variant='secondary' className={'w-100 mx-1'} onClick={() => {onClear()}}><h5 className='fw-bold'>Vaciar</h5></ToggleButton>
                                </NavLink>
                                </ToggleButtonGroup>
                            </ButtonGroup>
                        </Col>
                    </Col>
                </Row>
            </Container>
            }
        </>
    )
}

export default CartPage