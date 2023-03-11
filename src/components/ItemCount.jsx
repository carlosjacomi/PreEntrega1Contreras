import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, ToggleButtonGroup } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton'
import { useState } from 'react';

const ItemCount = () => {
const stock = 5;
const [value, setValue] = useState(0);


const sumValue = () => {setValue(value + 1)}
const restValue = () => {setValue(value - 1)}
const onAdd = () => console.log(value);

return (
    <>
        <Container fluid>
            <Row className='justify-content-md-center'>
                <Col xs={3} className='text-center mt-5' >
                    <h3>Producto</h3>
                    <small>Stock Disponible: {stock}</small>
                    <ButtonGroup className='w-100'>
                        <ToggleButtonGroup type="input" className="mb-2 w-100">
                            <ToggleButton variant="secondary" onClick={value > 0 ? restValue : undefined}  disabled={stock===0} > - </ToggleButton>
                            <ToggleButton variant="light"> {value}</ToggleButton>
                            <ToggleButton variant="secondary" onClick={value < stock ? sumValue : undefined} disabled={stock===0}> + </ToggleButton>
                        </ToggleButtonGroup>
                    </ButtonGroup>
                    <div className="d-grid gap-2">
                        <Button variant="outline-secondary" size="lg" onClick={onAdd} disabled={stock===0}>
                            Agregar al Carrito
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
);
}

export default ItemCount;