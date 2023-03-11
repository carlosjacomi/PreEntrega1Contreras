import {Container,Row,Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';
import ListGroup from 'react-bootstrap/ListGroup';


const Item = ({id='',urlImage='#', title='', details='', price=0, stock=0}) => {
return (
    <>
        <Container fluid className='py-3'>
                <Row>
                    <Col>
                        <Card  border="light" bg={'light'} className='text-center'>
                            <Card.Img variant="top" src={urlImage} alt='' />
                            <Card.Body className='p-1'>
                                <Card.Title className='bg-light'>{title}</Card.Title>
                                <Card.Text>
                                    {details}
                                </Card.Text>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>{`$ ${price}`}</ListGroup.Item>
                                    <ListGroup.Item><ItemCount stock={stock}/></ListGroup.Item>
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