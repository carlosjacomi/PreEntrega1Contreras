import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { CartContext } from '../context/CartContext';

import Badge from 'react-bootstrap/Badge';

import Cart from '../assets/Cart';


const CartWidget = () => {
    const {itemsCart} = useContext(CartContext)
    const totalItems = itemsCart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.product.quantity;
    }, 0);
return (
    <>
        <NavLink to={'/cart'}>
            <Cart/><Badge className='ms-1 text-white'>{totalItems}</Badge>
        </NavLink>
    </>
);
}

export default CartWidget;