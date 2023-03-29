
import { NavLink } from 'react-router-dom';

import {Container,Row,Col, Image} from 'react-bootstrap';

import ItemCount from '../ItemCount';

const ItemDetail = ({product=ReactNode}) => {

return (
    <>
        <Container className='mt-1'>
            <Row className='bg-light'>
                <Col xs={12}>
                    <small className='text-uppercase link-primary'>
                        <NavLink to={'/'}>AURUSJOYERIA</NavLink>
                        /<NavLink to={`/category/${product.category}`}>{product.category}</NavLink> 
                        /{product.id}
                    </small>
                </Col>
                <Col  xs={12} className='bg-white text-center'>
                <Image
                    src={product.image}
                    fluid
                    id='item-detail-images'
                />
                </Col>
                <Col xs={8} className='text-center'>
                <h1>{product.title}</h1>
                <p>{product.details}</p>
                </Col>
                <Col xs={4} className='pt-4 text-center'>
                    <h1>$ {new Intl.NumberFormat().format(product.price)}</h1>
                    <small>{product.stock > 3 
                        ? `Quedan ${product.stock} disponibles` : product.stock > 1 
                        ? `Solo quedan ${product.stock} disponibles`:  product.stock === 1 
                        ? `Solo Queda ${product.stock} disponible`
                        :'Agotado'}
                    </small>
                    <ItemCount product={product}/>
                </Col>
                <Col xs={12} className='text-center pt-4'>
                    
                </Col>

            </Row>
        </Container>
    </>
);
}

export default ItemDetail;