import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { CartContext } from '../context/CartContext';

import Badge from 'react-bootstrap/Badge';

import Cart from '../assets/Cart';


const CartWidget = () => {
    const {itemsCart} = useContext(CartContext)
return (
    <>
        <NavLink to={'/cart'}>
            <Cart/><Badge className='ms-1 text-white'>{itemsCart.length}</Badge>
        </NavLink>
    </>
);
}

export default CartWidget;