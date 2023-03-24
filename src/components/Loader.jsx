import {Spinner} from 'react-bootstrap';

/** Este componente se usa para notificar que la web esta esperando respuesta
 * @component
*/
const Loader = () => {
return (
    <>
        <Spinner animation="grow"  className= 'mt-5' variant="secondary" />
    </>
);
}

export default Loader;