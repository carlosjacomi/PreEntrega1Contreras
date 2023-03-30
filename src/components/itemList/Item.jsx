import { NavLink } from 'react-router-dom';

import {Container,Row,Col, Card, ListGroup} from 'react-bootstrap';

import ItemCount from '../ItemCount';

const Item = ({product=ReactNode}) => {
    
    
    return (
    <>
        <Container id='item-list'  fluid className='py-3'>
                <Row>
                    <Col>
                        
                            <Card border="light" bg={'dark'} className='text-center rounded rounded-4'>
                                <NavLink className={'p-2'} to={`/item/${product.id}`}>
                                    <Card.Img variant="top" className={`rounded rounded-4 ${product.stock === 0 && 'gray' }`} src={product.image} alt=''/>
                                </NavLink>
                                <Card.Body className='p-1'>
                                    <NavLink to={`/item/${product.id}`}>
                                        <Card.Title className={`bg-dark fw-bold ${product.stock === 0 ? 'text-secondary' : 'text-gold' }`}>{product.title}</Card.Title>
                                        <Card.Text className='mh-50 p-3 pt-0 pb-0'>
                                            <small>{product.details}</small>
                                        </Card.Text>
                                    </NavLink>
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item className={`bg-dark fw-light fs-3 ${product.stock === 0 ? 'text-secondary' : 'text-gold' }`}>{`$ ${new Intl.NumberFormat().format(product.price)}`}</ListGroup.Item>
                                        <ListGroup.Item className='bg-dark m-2'><ItemCount product={product}/></ListGroup.Item>
                                        <ListGroup.Item className={`p-0 fw-bold bg-dark ${product.stock > 3 
                                            ? 'text-success':product.stock > 0 
                                            ? 'text-warning'
                                            :'text-danger'}`}
                                        >
                                            <small>{product.stock > 3 
                                                ? `Quedan ${product.stock} disponibles` : product.stock > 1 
                                                ? `Solo quedan ${product.stock} disponibles`:  product.stock === 1 
                                                ? `Solo Queda ${product.stock} disponible`
                                                :'Agotado'}
                                            </small>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                    </Col>
                </Row>
        </Container>
    </>
);
}

export default Item;