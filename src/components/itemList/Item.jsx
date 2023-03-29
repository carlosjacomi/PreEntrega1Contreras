import { NavLink } from 'react-router-dom';

import {Container,Row,Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import ItemCount from '../ItemCount';

const Item = ({product=ReactNode}) => {
    
    
    return (
    <>
        <Container id='item-list'  fluid className='py-3'>
                <Row>
                    <Col>
                        
                            <Card border="light" bg={'light'} className='text-center'>
                                <NavLink to={`/item/${product.id}`}>
                                    <Card.Img variant="top" src={product.image} alt='' />
                                </NavLink>
                                <Card.Body className='p-1'>
                                    <NavLink to={`/item/${product.id}`}>
                                        <Card.Title className='bg-light'>{product.title}</Card.Title>
                                        <Card.Text>
                                            {product.details}
                                        </Card.Text>
                                    </NavLink>
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item>{`$ ${new Intl.NumberFormat().format(product.price)}`}</ListGroup.Item>
                                        <ListGroup.Item><ItemCount product={product}/></ListGroup.Item>
                                        <ListGroup.Item variant={product.stock > 3 
                                            ? 'success':product.stock > 0 
                                            ? 'warning'
                                            :'danger'}
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