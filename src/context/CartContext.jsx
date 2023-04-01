import { createContext, useState } from "react";


/** Este componente se usa para definir los context del carro de compra
 * @component
*/

export const CartContext = createContext();

const CartProvider = ({children}) => {
    
    const [itemsCart, setItemsCart] = useState([]);
    const [order, setOrder] = useState({});

    
    const onAdd = (product, value) => {
        product.quantity = value;
        setItemsCart((old) => old.concat({product}))
    }

    const onRemove = (id) => {
        setItemsCart((old) => old.filter(item => item.product.id !== id))
    }

    const onClear = () => {
        setItemsCart([])
    }

    const value = {
        itemsCart,
        order,
        onAdd,
        setOrder,
        onRemove,
        onClear
    }
    
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}    
export default CartProvider;