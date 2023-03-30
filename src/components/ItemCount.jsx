import { useContext, useState } from 'react';
import { NavLink , useParams} from 'react-router-dom';

import {Container,Row,Col} from 'react-bootstrap';

import { Button, ButtonGroup,  ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';
import { ParamContext } from '../context/ParamContext';



const ItemCount = ({product=ReactNode}) => {
const params = useParams();
const {onAdd, onRemove, itemsCart} = useContext(CartContext)
const {isItemPage} = useContext(ParamContext)
const isItem = isItemPage(params.id)
const [value, setValue] = useState(0);
const sumValue = () => {setValue(value + 1)}
const restValue = () => {setValue(value - 1)}

const isAdded = itemsCart.some(item => item.product.id === product.id);

const [addedToCart, setAddedToCart] = useState(isAdded);
return (
    <>
        <Container fluid className={`${!isItem && 'bg-dark'}`}>
            <Row className='justify-content-md-center'>
                <Col xs={12} className='text-center' >
                    
                        {!addedToCart&&
                        <ButtonGroup className='w-100'>
                            <ToggleButtonGroup type='input' className='mb-2 w-100'>
                                <ToggleButton className={`fs-5 border border-0 ${product.stock === 0 ? 'bg-secondary' : 'bg-gold' }`} onClick={value > 0 ? restValue : undefined}  disabled={product.stock===0 || addedToCart} > - </ToggleButton>
                                <ToggleButton variant='light' className={`fs-4 border`}> {value}</ToggleButton>
                                <ToggleButton className={`fs-5 border border-0 ${product.stock === 0 ? 'bg-secondary' : 'bg-gold' }`} onClick={value < product.stock ? sumValue : undefined} disabled={product.stock===0 || addedToCart}> + </ToggleButton>
                            </ToggleButtonGroup>
                        </ButtonGroup>
                        }
                    
                        <Col xs={12}>
                            {addedToCart&&
                            <div className='d-grid gap-2 py-1'>
                                <Button variant={'secondary'}  onClick={() => {onRemove(product.id), setAddedToCart(false), setValue(0)}}>
                                    <big>Remover</big>
                                </Button>  
                            </div>
                            }
                            {!addedToCart&&
                            <div className='d-grid gap-2 py-1'>
                                <Button variant={`${product.stock === 0 ? 'outline-secondary' : !isItem ? 'outline-warning' : 'warning' } `}  onClick={() => {onAdd(product, value), setAddedToCart(true)}} disabled={product.stock===0 || value === 0}>
                                    <big>Agregar</big>
                                </Button>
                            </div>
                            }
                        </Col>
                        {addedToCart &&
                            <Col xs={12}>
                                <NavLink to={'/cart'}>
                                <div className='d-grid gap-2'>
                                        <Button variant={'warning'}>
                                            <big className='fs-3'>Comprar</big>
                                        </Button>
                                </div>
                                </NavLink>
                            </Col>
                        }
                </Col>
            </Row>
        </Container>
    </>
);
}

export default ItemCount;