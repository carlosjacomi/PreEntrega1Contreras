import { useContext, useState, useRef } from 'react'
import {Container,Row,Col, Image, Form, Button, Table} from 'react-bootstrap';
import { CartContext } from '../../context/CartContext'
import NavBar from '../../components/navbar/NavBar';
import {collection, getFirestore, addDoc, doc,updateDoc} from 'firebase/firestore'
import './checkout.css'
import { NavLink } from 'react-router-dom';



/** Este componente se usa como template para creación de componentes desde 0 
 * @component
*/
const Checkout = () => {

    const emailRef = useRef()
    const nameRef = useRef()
    const lastNameRef = useRef()
    const phoneRef = useRef()

    const repeatEmailRef = useRef();
    const {itemsCart, onClear} = useContext (CartContext)
    const isEmpty = itemsCart.length === 0 ? true : false;
    const [disabled, setDisabled] = useState(true);
    const [printOrder, setPrintOrder] = useState(false);
    const totalPrice = itemsCart.reduce((accumulator, currentItem) => {
        return accumulator + (currentItem.product.price*currentItem.product.quantity);
    }, 0);

    const today = new Date();
    const datetimeString = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

    const order = {
        buyer: {
            name: `${nameRef.current?.value} ${lastNameRef.current?.value}`,
            phone: phoneRef.current?.value,
            email: emailRef.current?.value,
        },
        items: itemsCart.map((obj) => {
            return {
                id: obj.product.id,
                product: obj.product.title,
                price: obj.product.price,
                quantity: obj.product.quantity,
                total: obj.product.price * obj.product.quantity
            };
        }),
        total: totalPrice
    }

    /** Función que válorderDocida la confirmación de correo*/
    const repeatEmailValidation = (email1, email2) =>{
        if (email1 === email2 && email1.length > 0 && email2.length > 0) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }

    /** Evento cambios del formulario de Registro  */
    const handleChange = () => {
            let inputToValidate = emailRef.current.value;
            let repeatEmailToValidate = repeatEmailRef.current.value;
            repeatEmailValidation(inputToValidate,repeatEmailToValidate);
    }

    const db = getFirestore()
    const collectionRef = collection(db, 'orders')

    const updateItems = (productId, finalStock) => {
        const itemRef= doc(db, 'items', productId)
        updateDoc(itemRef, {stock: finalStock})
    }

    


    
    const addOrder = (obj) => {
        addDoc(collectionRef, obj)
        .then(() => {
            itemsCart.map((item) => {
                const finalStock = item.product.stock - item.product.quantity
                updateItems(item.product.id,finalStock)
            }
            )
        })
        .catch((error) => console.log({error}))
    }

    const sendOrder = () => {
        addOrder(order)
        setPrintOrder(true)  
    }

    const printOrderDoc = () => {
        setPrintOrder(false)
        onClear()
    }

    const handlePrint = () => {
        // Ocultar todos los elementos de la página, excepto la tabla
        const elements = document.querySelectorAll('.hide-print');
        elements.forEach(element => {
            element.style.display = 'none';
        });
        // Imprimir la página actual
        window.print();
        // Mostrar todos los elementos de nuevo
        elements.forEach(element => {
            element.style.display = '';
        });
    };
    
    return (
        <>
            {!printOrder && <NavBar/>}
            <Container fluid className='p-0' id='checkout'>
                <Row className='g-0'>
                    {isEmpty
                            ?
                                <Col xs='12' className='text-center'>
                                    <h1 className='py-3 fw-bold'>CheckOut</h1>
                                    <h1 className='fw-light'>¡No hay nada aqui!, debes agregar productos a tu carrito para comprar</h1>
                                </Col>
                            :
                                <>
                                <Col xs={!printOrder ? 9 : 12} className='p-5'>
                                    
                                    <Col xs={12} className='text-center p-0'> 
                                        <h1 className='py-3 fw-bold'>{!printOrder  ? 'CheckOut' : `Orden`}</h1>
                                        {!printOrder  && <h3>Confirma la orden para continuar y llena el formulario para concretar tu compra</h3>}
                                    </Col>
                                    
                                    <Col xs={12}>
                                        <Table striped={!printOrder ? true : false} bordered hover variant='dark' className='order'>
                                            <thead className='fs-4 text-warning'>
                                                <tr>
                                                <th>ID</th>
                                                <th>Imagen</th>
                                                <th>Producto</th>
                                                <th>Cantidad</th>
                                                <th className='text-nowrap'>Precio Unitario</th>
                                                <th>Total</th>
                                                </tr>
                                            </thead>
                                        <tbody className=''>
                                        {itemsCart.map(({product}) => (
                                                <tr key={product.id} className='align-middle'>
                                                    <td>{product.id}</td>
                                                    <td><Image src={product.image} alt={product.details} className='w-5'></Image></td>
                                                    <td>{product.details}</td>
                                                    <td className='text-center'>{product.quantity}</td>
                                                    <td className='text-center text-nowrap'>{`$ ${new Intl.NumberFormat().format(product.price)}`}</td>
                                                    <td className='text-center text-nowrap '>{`$ ${new Intl.NumberFormat().format(product.price*product.quantity)}`}</td>
                                                </tr>
                                            ))
                                        }
                                        <tr className='align-middle'>
                                                    <td colSpan={4} className='text-warning'><h3>Total a Pagar</h3></td>
                                                    <td colSpan={2} className='text-center text-warning'><h3>{`$ ${new Intl.NumberFormat().format(totalPrice)}`}</h3></td>
                                                </tr>
                                        </tbody>
                                        </Table>
                                    </Col>
                                    {printOrder &&
                                    <Col xs={12}>
                                        <Table bordered hover variant='dark' className='order'>
                                            <thead className='fs-4 text-warning'>
                                                <tr>
                                                <th>Nombre</th>
                                                <th>Apellido</th>
                                                <th>Telefono</th>
                                                <th>Email</th>
                                                </tr>
                                            </thead>
                                        <tbody className=''>
                                                <tr className='align-middle'>
                                                    <td>{nameRef.current?.value}</td>
                                                    <td>{lastNameRef.current?.value}</td>
                                                    <td>{phoneRef.current?.value}</td>
                                                    <td>{emailRef.current?.value}</td>
                                                </tr>
                                        </tbody>
                                        </Table>
                                        <span className='text-center fixed-bottom pb-5'>{datetimeString}</span>
                                    </Col>
                                    }
                                </Col>


                                <Col xs={3} className={`text-center bg-dark ${!printOrder ? 'min-vh-100' : 'fixed-bottom w-100 pb-2'} d-flex align-items-center hide-print `}>
                                    {!printOrder
                                        ?
                                            <Form className='bg-dark p-5 '>
                                                <h3 className='text-white'>Datos del Comprador</h3>
                                                <Form.Group className='mb-3 fs-5' controlId='buyer'>
                                                    <Form.Control type='text'  className='mb-3' placeholder='Ingresa tu nombre' ref={nameRef} required  autoComplete='off'/>
                                                    <Form.Control type='text'  className='mb-3' placeholder='Ingresa tu apellido' ref={lastNameRef} required autoComplete='off' />
                                                    <Form.Control type='number' className='mb-3' placeholder='Ingresa tu telefono' ref={phoneRef} required autoComplete='off' />
                                                    <Form.Control type='email'  className='mb-3' placeholder='Ingresa tu correo' onChange={handleChange} ref={emailRef} required autoComplete='off' />
                                                    <Form.Control type='repeat-email' className='mb-3' placeholder='Repite tu correo'  onChange={handleChange} ref={repeatEmailRef} required autoComplete='off' />
                                                    <Form.Text className='text-muted'>
                                                    No compartiremos esta información con nadie más.
                                                    </Form.Text>
                                                </Form.Group>
                                                <Button variant='warning' type='button'  onClick={sendOrder} disabled={disabled}>
                                                    Finalizar tu Compra
                                                </Button>
                                            </Form>
                                        :

                                            <Col xs={12} className='hide-print'>
                                                <h3 className='text-white'>Orden Generada</h3>
                                                <Button variant='warning' type='button'  className='m-2' onClick={handlePrint}>
                                                    Imprimir Orden
                                                </Button>
                                                <NavLink to='/'>
                                                    <Button variant='primary' type='button' onClick={printOrderDoc}  className='m-2'>
                                                        Volver a la tienda
                                                    </Button>
                                                </NavLink>
                                            </Col>
                                    }
                                </Col>
                                </>
                    }
                </Row>
            </Container>
        </>
    );
    }
    
    export default Checkout;