import { useEffect, useState } from "react";

import {Container,Row,Col} from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';

import './itemList.css'


import ProductsExample from "../../mocks/ProductsExample";
import ItemList from "./ItemList";



const  ItemListContainer= ({categoryId='', isHome=true}) => {
    const [spinner, setSpinner]= useState(true);
    const [products, setProducts]= useState([]);
    

    useEffect(()=>{
        setSpinner(true)
        const load = new Promise ((resolve, reject) => 
            setTimeout(() => resolve(ProductsExample), 2000));
        
        load
        .then((response) => {
            if (isHome) {
                setProducts(response);
                setSpinner(false)
            }else {
                const productsByCategory = response().filter((value) => value.category === categoryId)
                setProducts(productsByCategory);
                setSpinner(false)
            }
        })
        .catch((err) => console.log(err))
    },[categoryId]);

return (
    <>
        <Container>
            <Row>
                <Col className="text-center">
                    {spinner 
                        ?<Spinner animation="grow"  className= 'mt-5' variant="secondary" />
                        :<ItemList products={products}/>
                    }
                </Col>
            </Row>
        </Container>
        
    </>
);
}

export default ItemListContainer;