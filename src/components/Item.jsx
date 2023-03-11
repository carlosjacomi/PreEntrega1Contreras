import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import ItemCount from './ItemCount';
import ListGroup from 'react-bootstrap/ListGroup';


const Item = ({id='',urlImage='#', title='', details='', price=0, stock=0}) => {
return (
    <>
        <Container fluid className='py-3'>
                <Col>
                    <Card  border="secondary" bg={'light'} className='text-center'>
                        <Card.Img variant="top" src={urlImage} alt='' fluid />
                        <Card.Body className='p-1'>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                {details}
                            </Card.Text>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>{price}</ListGroup.Item>
                                <ListGroup.Item><ItemCount stock={stock}/></ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
        </Container>
    </>
);
}

export default Item;