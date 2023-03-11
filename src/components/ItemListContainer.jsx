import { useEffect, useState } from "react";

import {Container,Row,Col} from 'react-bootstrap';

import ProductsExample from "../mockups/ProductsExample";
import ItemList from "./ItemList";



const  ItemListContainer= ({categoryId='', isHome=true}) => {
    const [products, setProducts]= useState([]);

    useEffect(()=>{
        const load = new Promise ((resolve, reject) => setTimeout(() => resolve(ProductsExample), 2000));
        
        load
        .then((response) => {
            if (isHome) {
                setProducts(response);
            }else {
                const productsByCategory = response().filter((value) => value.category === categoryId)
                setProducts(productsByCategory);
            }
        })
        .catch((err) => console.log(err))
    },[categoryId]);

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