import { createContext, useState } from "react";


/** Este componente se usa como template para creación de componentes desde 0 
 * @component
*/

export const Context = createContext();

const CartProvider = ({children}) => {
    
    const [itemsCart, setItemsCart] = useState([]);

    
    const onAdd = (product, value) => {
        product.quantity = value;
        setItemsCart((old) => old.concat({product}))
    }

    const onRemove = (id) => {
        setItemsCart((old) => old.filter(item => item.product.id !== id))
    }

    const value = {
        itemsCart,
        onAdd,
        onRemove
    }
    
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
    }
    
export default CartProvider;