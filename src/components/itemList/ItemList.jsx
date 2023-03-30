import {Container,Row} from 'react-bootstrap';

import Item from "./Item";

const ItemList = ({products=ReactNode}) => {
return (
    <>
        <Container fluid>
            <Row>
                <ul className='list-unstyled'>
                    <Container fluid>
                        <Row xs={1} md={2} lg={4} className="g-4">
                            {products.map((product) => (
                                    <li key={product.id}>
                                            <Item product={product}/>
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