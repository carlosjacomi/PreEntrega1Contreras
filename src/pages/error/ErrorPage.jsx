import { Container , Row, Col} from "react-bootstrap";
import './errorPage.css'
/** Este componente se usa para mostrar la pagina de error
*/
const ErrorPage = () => {
return (
    <Container id='error' fluid className="min-vh-100">
        <Row>
            <Col xs={12} className='py-5'>
                <h1>404</h1>
            </Col>
            <Col xs={12}>
                <h2>Lo Sentimos</h2>
                <h2>Lo que estas buscando no se encuentra</h2>
            </Col>
            <Col xs={12}>
                <p>Verifica que el producto, categoría o dirección es correcta, o contactate con nosotros para más información</p>
            </Col>
        </Row>
    </Container>
);
}

export default ErrorPage;