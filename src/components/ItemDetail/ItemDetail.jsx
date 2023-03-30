
import { NavLink } from 'react-router-dom';

import {Container,Row,Col, Image} from 'react-bootstrap';

import ItemCount from '../ItemCount';

const ItemDetail = ({product=ReactNode}) => {

return (
    <>
        <Container fluid className='mt-1'>
            <Row className='bg-light'>
                <Col xs={12} className='bg-dark rounded rounded-5 my-3'>
                    <small className='text-uppercase link-light'>
                        <NavLink to={'/'}>AURUSJOYERIA</NavLink>
                        /<NavLink to={`/category/${product.category}`}>{product.category}</NavLink> 
                        /{product.id}
                    </small>
                </Col>

                <Col  xs={4} className='bg-white text-center rounded rounded-5 pb-3'>
                <Image
                    className={`${product.stock === 0 && 'gray' }`}
                    src={product.image}
                    fluid
                    id='item-detail-images'
                />
                <h1>$ {new Intl.NumberFormat().format(product.price)}</h1>
                <small>{product.stock > 3 
                    ? `Quedan ${product.stock} disponibles` : product.stock > 1 
                    ? `Solo quedan ${product.stock} disponibles`:  product.stock === 1 
                    ? `Solo Queda ${product.stock} disponible`
                    :'Agotado'}
                </small>
                <ItemCount product={product}/>
                </Col>

                <Col xs={8} className='text-center'>
                <h1>{product.title}</h1>
                <p>{product.details}</p>
                <span className='fs-4'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</span>
                </Col>
                
            </Row>
        </Container>
    </>
);
}

export default ItemDetail;