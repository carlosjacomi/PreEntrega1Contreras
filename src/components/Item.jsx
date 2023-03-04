import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import ItemCount from './ItemCount';


const Item = ({id='',urlImage='#', title='', details='', price=0, stock=0}) => {
return (
    <>
        <Container fluid className='py-3'>
            <Row className='text-center'>
                <Col xs={12} id={id}>
                    <Image src={urlImage} alt='' fluid />
                </Col>
                <Col xs={12}>
                    <h3>{title}</h3>
                </Col>
                <Col xs={12}>
                    <span> {details} </span>
                </Col>
                <Col xs={12} className='text-end'>
                    <small>{price}</small>
                </Col>
                <ItemCount stock={stock}/>
            </Row>
        </Container>
    </>
);
}

export default Item;