import { useEffect, useState } from "react";
import {doc, getDoc, getFirestore} from 'firebase/firestore'

import {Container, Row, Col} from 'react-bootstrap';
import './itemDetail.css'

import ItemDetail from "./ItemDetail";
import Loader from "../Loader";


const  ItemDetailContainer= ({product={}}) => {
    const [loading, setLoading]= useState(true);
    const [productInfo, setProductInfo]= useState({product});


    /*const [product, setProduct] = useState(null)
    useEffect(() => {
        const db = getFirestore()
        const itemRef = doc(db, 'items','ANI2023-1')
        getDoc(itemRef).then((snapshot) =>{
            if (snapshot.exists()){
                setProduct({id: snapshot.id, ...snapshot.data()})
                console.log(snapshot.data())
            }
        }).catch((error) => console.log(error))
    }, [])
    
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
    
    
    
    */

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