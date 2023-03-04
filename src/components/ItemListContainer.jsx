import { useEffect, useState } from "react";
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
        <ItemList products={products}/>
    </>
);
}

export default ItemListContainer;