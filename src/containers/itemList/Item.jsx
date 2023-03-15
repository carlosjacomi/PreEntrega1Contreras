import { NavLink } from 'react-router-dom';

import {Container,Row,Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import ItemCount from '../../components/ItemCount';



const Item = ({id='',urlImage='#', title='', details='', price=0, stock=0}) => {
return (
    <>
        <Container id='item-list'  fluid className='py-3'>
                <Row>
                    <Col>
                        
                            <Card border="light" bg={'light'} className='text-center'>
                                <NavLink to={`/item/${id}`}>
                                    <Card.Img variant="top" src={urlImage} alt='' />
                                </NavLink>
                                <Card.Body className='p-1'>
                                    <NavLink to={`/item/${id}`}>
                                        <Card.Title className='bg-light'>{title}</Card.Title>
                                        <Card.Text>
                                            {details}
                                        </Card.Text>
                                    </NavLink>
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item>{`$ ${new Intl.NumberFormat().format(price)}`}</ListGroup.Item>
                                        <ListGroup.Item><ItemCount stock={stock}/></ListGroup.Item>
                                        <ListGroup.Item variant={stock > 3 
                                            ? 'success':stock > 0 
                                            ? 'warning'
                                            :'danger'}
                                        >
                                            <small>{stock > 3 
                                                ? `Quedan ${stock} disponibles` : stock > 1 
                                                ? `Solo quedan ${stock} disponibles`:  stock === 1 
                                                ? `Solo Queda ${stock} disponible`
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