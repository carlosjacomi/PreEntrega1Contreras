import { useContext } from "react"
import { Context } from "../../context/Index"
import NavBar from '../../components/navbar/NavBar'


const CartPage = () =>  {
    const {itemsCart} = useContext (Context)
    console.log(itemsCart)
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