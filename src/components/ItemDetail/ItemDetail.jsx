
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

                <Col  xs={12} lg={4} className='bg-white text-center rounded rounded-5 pb-3'>
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

                <Col xs={12} lg={8} className='text-center'>
                <h1 className='fw-bold pb-4'>{product.details}</h1>
                <span className='fs-4'>{product.description}</span>
                <Col xs={12} className='d-lg-flex pt-5 text-secondary'>
                    <Col xs={12} lg={6}>
                        <h2 className='pt-4'>Consideraciones para Retiro en Tienda</h2>
                        <ul className='text-start  pt-4'>
                            <li>Una vez verificado el pago, la fecha de retiro es en aproximadamente 10 días. De igual modo será contactado telefónicamente por nuestros asesores para notificar que el pedido está disponible para retiro. Si pasados los 10 días no es contactado por favor comuníquese con nosotros.</li>
                        </ul>
                    </Col>
                    <Col xs={12} lg={6}>
                        <h2 className='pt-4'>Consideraciones para Envío a Domicilio</h2>
                        <ul className='text-start  pt-4'>
                            <li> El despacho para la Región Metropolitana es sin costo. El plazo de entrega no excederá los 10 días hábiles, siendo el plazo habitual 72 horas para entregas dentro de la Región Metropolitana, de lunes a viernes.</li>
                        </ul>
                    </Col>
                </Col>
                <Col xs={12} className='text-secondary'>
                    <h2 className='pt-4'>Politica de Devolución</h2>
                        <p className=''>Todos nuestros clientes pueden realizar la devolución de su pedido en un plazo inferior a 10 días a partir de la entrega del mismo. El cliente no tendrá derecho a devolver productos que hayan sido modificados.</p>
                        <ul className='text-start '> Ejemplo
                            <li>Anillos con modificación de talla por petición del cliente.</li>
                            <li>El cliente tiene un periodo de garantía (cambio o reparación) de garantía legal el cual corresponde a 90 días.</li>
                            <li>Este proceso comprende 3 fases: Reparación, Cambio o Devolución del dinero</li>
                        </ul>
                </Col>
            
                </Col>
            </Row>
        </Container>
    </>
);
}

export default ItemDetail;