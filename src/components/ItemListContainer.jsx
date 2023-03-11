import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductsExample from "../mockups/ProductsExample";
import ItemList from "./ItemList";

const  ItemListContainer= () => {
    const [products, setProducts]= useState([]);

    useEffect(()=>{
        const load = new Promise ((resolve, reject) => setTimeout(() => resolve(ProductsExample), 2000));
        load
        .then((response) => setProducts(response))
        .catch((err) => console.log(err))
    },[]);

return (
    <>
        <Container>
            <Row>
                <Col>
                    <ItemList products={products}/>
                </Col>
            </Row>
        </Container>
        
    </>
);
}

export default ItemListContainer;