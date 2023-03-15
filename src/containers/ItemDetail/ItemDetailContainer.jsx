import { useEffect, useState } from "react";
import {Container, Row, Col} from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';


import './itemDetail.css'

import ProductsExample from "../../mocks/ProductsExample";
import ItemDetail from "./ItemDetail";

const  ItemDetailContainer= ({product={}}) => {
    const [spinner, setSpinner]= useState(true);
    const [productInfo, setProductInfo]= useState({product});
    useEffect(()=>{
        setSpinner(true)
        const load = new Promise ((resolve, reject) => setTimeout(() => resolve(ProductsExample), 2000));
        load
        .then((response) => {
            const productById = response().find((value) => value.id === product.id)
            setProductInfo(productById);
            setSpinner(false)
        })
        .catch((err) => console.log(err))
    },[]);

return (
    <>
        <Container>
            <Row>
                <Col className="text-center">
                    {spinner 
                        ?<Spinner animation="grow"  className= 'mt-5' variant="secondary" />
                        :<ItemDetail product={productInfo}/>
                    }
                </Col>
            </Row>
        </Container>
        
    </>
);
}

export default ItemDetailContainer;