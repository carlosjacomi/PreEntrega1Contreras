import { useEffect, useState } from "react";
import {doc, getDoc, getFirestore} from 'firebase/firestore'

import {Container, Row, Col} from 'react-bootstrap';
import './itemDetail.css'

import ItemDetail from "./ItemDetail";
import Loader from "../Loader";
import ErrorPage from "../../pages/error/ErrorPage";


const  ItemDetailContainer= ({product={}}) => {
    const [loading, setLoading]= useState(true);
    const [errorPage, setErrorPage]= useState(false);
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
                }else {
                    setLoading(false)
                    setErrorPage(true)
                }
            })
            .catch((error) => console.log(error))
        }, 500); 
    }, [])



return (
    <>
        <Container fluid>
            <Row>
                <Col className="text-center">
                    {loading 
                        ?<Loader/>
                        :errorPage? <ErrorPage/>: <ItemDetail product={productInfo}/>
                    }
                </Col>
            </Row>
        </Container>
        
    </>
);
}

export default ItemDetailContainer;