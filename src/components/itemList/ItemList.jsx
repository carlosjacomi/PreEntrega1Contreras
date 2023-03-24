import {Container,Row} from 'react-bootstrap';

import Item from "./Item";

const ItemList = ({products=ReactNode}) => {
return (
    <>
        <Container fluid>
            <Row>
                <ul className='list-unstyled'>
                    <Container fluid>
                        <Row xs={1} md={2} lg={3} className="g-4">
                            {products.map((product) => (
                                    <li key={product.id}>
                                            <Item id={product.id} urlImage={product.image} title={product.title} details={product.details} price={product.price} stock={product.stock}/>
                                    </li>
                            ))}
                        </Row>
                    </Container>
                </ul>
            </Row>
        </Container>
    </>
);
}

export default ItemList;