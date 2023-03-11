import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';

import ProductsExample from "../mockups/ProductsExample";

const  ItemDetailContainer= ({id=''}) => {
    const [product, setProduct]= useState([]);
    useEffect(()=>{
        const load = new Promise ((resolve, reject) => setTimeout(() => resolve(ProductsExample.find (productDetail => productDetail.id  === product)), 2000));
        load
        .then((response) => setProduct(response))
        .catch((err) => console.log(err))
    },[]);

return (
    <>
        <Container>
            <Row>
                <Col>
                    {console.log(product)}
                </Col>
            </Row>
        </Container>
        
    </>
);
}

export default ItemDetailContainer;