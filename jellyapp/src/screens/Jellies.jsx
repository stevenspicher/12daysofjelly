import React, {useEffect, useState} from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Container, Row, Col} from "react-bootstrap";
import {useLocation, useNavigate} from "react-router-dom";
import {getConsole, getState, getUsers, editUser} from "../shared/utilities";


const Jellies = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [canEdit, setCanEdit] = useState(false)
    const [jellyDetails, setJellyDetails]= useState(location.state.user);
    const [editUserDetails, setEditUserDetails] = useState(location.state.user);

    const onChange = (e) => {
        const name = e.target.name
        editUserDetails[name] = e.target.value
        setEditUserDetails({...editUserDetails})
    }

    const onSubmit = () => {
            editUser(editUserDetails, props.state, location.state.id);
        props.state.setCurrentUserDetails(editUserDetails)
    }

    useEffect(() => {
        getConsole(location, props.state.currentUserDetails)

    }, []);
    return (
        <div>
            <Container className={"pt-4"} >
                <div>

                    <h1 className="title">
                        <b className="blink">1</b>
                        <b className="blink">2</b>
                        <b> </b>
                        <b className="blink">D</b>
                        <b className="blink">a</b>
                        <b className="blink">y</b>
                        <b className="blink">s</b>
                        <b> </b>
                        <b className="blink">o</b>
                        <b className="blink">f</b>
                        <b> </b>
                        <b className="blink">S</b>
                        <b className="blink">p</b>
                        <b className="blink">r</b>
                        <b className="blink">e</b>
                        <b className="blink">a</b>
                        <b className="blink">d</b>
                        <b className="blink">s</b>
                    </h1>
                </div>
                <Row>
                    <Col>
                <h2 className="subtitle">{jellyDetails.name} </h2>
                    </Col>
                    <Col>
                        <Button variant="secondary" onClick={() => {
                            navigate("/login", getState(location, location.state.currentUserDetails, location.state.id))
                        }}>
                            Logout
                        </Button>
                        <Button  variant="secondary" onClick={() => {
                            navigate("/jellies", getState(location, location.state.currentUserDetails, location.state.id))
                        }}>
                            Jellies
                        </Button>
                    </Col>
                </Row>
            </Container>
            <Container className='mt-5'>
                <Form>
                    <Form.Label>Range</Form.Label>
                    <Form.Range />
                    <FloatingLabel

                        controlId="floatingInput"
                        label="Delivery Method"
                        className="m-3"
                    >
                        <Form.Control
                           as="textarea"
                           rows={5}
                            placeholder=""
                           style={{height: '200px'}}
                            name="deliveryMethod"
                            onChange={onChange}

                        />
                    </FloatingLabel>
                    <Button  variant="primary" onClick={onSubmit}>
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>)
};

export default Jellies;