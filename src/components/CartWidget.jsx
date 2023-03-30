import { useContext } from 'react';
import Badge from 'react-bootstrap/Badge';
import Cart from '../assets/Cart';
import { CartContext } from '../context/CartContext';

import { NavLink } from 'react-router-dom';

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