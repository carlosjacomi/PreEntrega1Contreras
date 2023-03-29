import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';

import {Container,Row,Col} from 'react-bootstrap';

import { Button, ButtonGroup,  ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { Context } from '../context/Index';


const ItemCount = ({product=ReactNode}) => {
const {onAdd, onRemove, itemsCart} = useContext(Context)
const [value, setValue] = useState(0);
const sumValue = () => {setValue(value + 1)}
const restValue = () => {setValue(value - 1)}

const isAdded = itemsCart.some(item => item.product.id === product.id);

const [addedToCart, setAddedToCart] = useState(isAdded);

console.log(itemsCart)

return (
    <>
        <Container fluid>
            <Row className='justify-content-md-center'>
                <Col xs={12} className='text-center' >
                    
                        {!addedToCart&&
                        <ButtonGroup className='w-100'>
                            <ToggleButtonGroup type="input" className="mb-2 w-100">
                                <ToggleButton variant="secondary" onClick={value > 0 ? restValue : undefined}  disabled={product.stock===0 || addedToCart} > - </ToggleButton>
                                <ToggleButton variant="light"> {value}</ToggleButton>
                                <ToggleButton variant="secondary" onClick={value < product.stock ? sumValue : undefined} disabled={product.stock===0 || addedToCart}> + </ToggleButton>
                            </ToggleButtonGroup>
                        </ButtonGroup>
                        }
                    
                        <Col xs={12}>
                            {addedToCart&&
                            <div className="d-grid gap-2 py-1">
                                <Button variant={'dark'}  onClick={() => {onRemove(product.id), setAddedToCart(false), setValue(0)}}>
                                    <big>Remover</big>
                                </Button>  
                            </div>
                            }
                            {!addedToCart&&
                            <div className="d-grid gap-2 py-1">
                                <Button variant={"outline-secondary"}  onClick={() => {onAdd(product, value), setAddedToCart(true)}} disabled={product.stock===0 || value === 0}>
                                    <big>Agregar</big>
                                </Button>
                            </div>
                            }
                        </Col>
                        {addedToCart &&
                            <Col xs={12}>
                                <NavLink to={'/cart'}>
                                <div className="d-grid gap-2">
                                        <Button variant={'success'}>
                                            <big>Comprar</big>
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