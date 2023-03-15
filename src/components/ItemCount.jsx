import { useState } from 'react';

import {Container,Row,Col} from 'react-bootstrap';

import { Button, ButtonGroup,  ToggleButton, ToggleButtonGroup } from 'react-bootstrap';


const ItemCount = ({stock=0}) => {
const [value, setValue] = useState(0);
const sumValue = () => {setValue(value + 1)}
const restValue = () => {setValue(value - 1)}
const onAdd = () => console.log(value);

return (
    <>
        <Container fluid>
            <Row className='justify-content-md-center'>
                <Col xs={12} className='text-center' >
                    <ButtonGroup className='w-100'>
                        <ToggleButtonGroup type="input" className="mb-2 w-100">
                            <ToggleButton variant="secondary" onClick={value > 0 ? restValue : undefined}  disabled={stock===0} > - </ToggleButton>
                            <ToggleButton variant="light"> {value}</ToggleButton>
                            <ToggleButton variant="secondary" onClick={value < stock ? sumValue : undefined} disabled={stock===0}> + </ToggleButton>
                        </ToggleButtonGroup>
                    </ButtonGroup>
                    <div className="d-grid gap-2">
                        <Button variant="outline-secondary"  onClick={onAdd} disabled={stock===0}>
                            <big>Agregar</big>
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
);
}

export default ItemCount;