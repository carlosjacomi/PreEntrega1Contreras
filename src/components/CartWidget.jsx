import Badge from 'react-bootstrap/Badge';
import Cart from '../assets/Cart';


const CartWidget = () => {
return (
    <>
    <Cart/><Badge bg="secondary" className='ms-1'>9</Badge>
    </>
);
}

export default CartWidget;