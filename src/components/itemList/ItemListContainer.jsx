import { useEffect, useState } from 'react';
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'

import {Container,Row,Col} from 'react-bootstrap';
import './itemList.css'

import ItemList from './ItemList';
import Loader from '../Loader';

import ErrorPage from "../../pages/error/ErrorPage";




const  ItemListContainer= ({categoryId='', isHome}) => {
    const [loading, setLoading]= useState(true);
    const [errorPage, setErrorPage]= useState(false);
    const [products, setProducts]= useState([]);
    
    useEffect(()=> {
        setLoading(true)
        const db = getFirestore()
        const itemsCollections = collection(db, 'items')
        const categoryResult = query (itemsCollections, where('category','==',categoryId))

        setTimeout(() => {
            getDocs(isHome? itemsCollections : categoryResult)
            .then((snapshot) => 
            {
                    const docs = snapshot.docs;
                    setProducts(docs.map((doc) => ({id:doc.id, ...doc.data()})));
                    setLoading(false)

            })
            .catch((error)=> console.log(error))
        }, 1000); 
    },[categoryId]);

return (
    <>
        <Container fluid>
            <Row>
                <Col className='text-center'>
                    {loading 
                        ?<Loader/>
                        :products.length === 0? <ErrorPage/>:<ItemList products={products}/>
                    }
                </Col>
            </Row>
        </Container>
        
    </>
);
}

export default ItemListContainer;