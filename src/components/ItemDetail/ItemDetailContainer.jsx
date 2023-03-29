import { useEffect, useState } from "react";
import {doc, getDoc, getFirestore} from 'firebase/firestore'

import {Container, Row, Col} from 'react-bootstrap';
import './itemDetail.css'

import ItemDetail from "./ItemDetail";
import Loader from "../Loader";


const  ItemDetailContainer= ({product={}}) => {
    const [loading, setLoading]= useState(true);
    const [productInfo, setProductInfo]= useState({product});

    useEffect(() => {
        setLoading(true)
        const db = getFirestore()
        const itemRef = doc(db, 'items',product.id)

        setTimeout(() => {
            getDoc(itemRef)
            .then((snapshot) =>{
                if (snapshot.exists()){
                    setProductInfo({id: snapshot.id, ...snapshot.data()})
                    setLoading(false)
                }
            })
            .catch((error) => console.log(error))
        }, 1000); 
    }, [])



return (
    <>
        <Container>
            <Row>
                <Col className="text-center">
                    {loading 
                        ?<Loader/>
                        :<ItemDetail product={productInfo}/>
                    }
                </Col>
            </Row>
        </Container>
        
    </>
);
}

export default ItemDetailContainer;