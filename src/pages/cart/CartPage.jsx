import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import NavBar from '../../components/navbar/NavBar'


const CartPage = () =>  {
    const {itemsCart} = useContext (CartContext)
    return (
        <>
            <NavBar/>
            {itemsCart.map(({product}) => (
                <div className="div">
                    <span>{product.title}</span>
                    <span>{product.quantity}</span>
                </div>
            ))}
        </>
    )
}

export default CartPage