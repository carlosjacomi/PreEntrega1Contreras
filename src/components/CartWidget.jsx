import { useContext } from 'react';
import Badge from 'react-bootstrap/Badge';
import Cart from '../assets/Cart';
import { Context } from '../context/Index';

import { NavLink } from 'react-router-dom';

const CartWidget = () => {
    const {itemsCart} = useContext(Context)
return (
    <>
        <NavLink to={'/cart'}>
            <Cart/><Badge bg="secondary" className='ms-1'>{itemsCart.length}</Badge>
        </NavLink>
    </>
);
}

export default CartWidget;