import React, {useEffect, useState} from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Header from "../components/Header"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Container, Row, Col} from "react-bootstrap";
import {useLocation, useNavigate} from "react-router-dom";
import {getConsole, getState, editRatings} from "../shared/utilities";
import SpeedDial from '../components/SpeedDial'


const Jellies = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [ value, setValue ] = useState(50);
    const [jellyDetails, setJellyDetails]= useState(location.state.user);

    const onChange = (e) => {
        jellyDetails.deliveryMethod = e.target.value;
        setJellyDetails({...jellyDetails})

    }

    const onSubmit = () => {
    jellyDetails.rating = value/10;
    jellyDetails.rated = true;
        console.log(jellyDetails)
            editRatings(location.state.currentUserDetails, jellyDetails, props.state, location.state.id);
        navigate("/jellies", getState(location, location.state.currentUserDetails, location.state.id))
    }

    useEffect(() => {
        getConsole(location, props.state.currentUserDetails)

    }, []);
    return (
        <Container >
            <SpeedDial/>
        <div>
                <Row>
                    <Col>
                <h2 className="subtitle">{jellyDetails.name} </h2>
                    </Col>
                </Row>
            <Container className='mt-5'>
                <Form>
                    <Form.Label>Rating: {value/10}</Form.Label>
                    <Form.Range
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        step={10}
                    />
                    {/*<FloatingLabel*/}
                    {/*    controlId="floatingInput"*/}
                    {/*    label="Delivery Method"*/}
                    {/*    className="m-3"*/}
                    {/*>*/}
                    {/*    <Form.Control*/}
                    {/*       as="textarea"*/}
                    {/*       rows={5}*/}
                    {/*        placeholder=""*/}
                    {/*       style={{height: '200px'}}*/}
                    {/*        name="deliveryMethod"*/}
                    {/*        onChange={onChange}*/}

                    {/*    />*/}
                    {/*</FloatingLabel>*/}
                    <Button  variant="primary" onClick={onSubmit}>
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
        </Container>
    )
};

export default Jellies;