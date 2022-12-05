import React, {useEffect, useState} from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Container, Row, Col} from "react-bootstrap";
import {useLocation, useNavigate} from "react-router-dom";
import {getConsole, getState, getUsers, editUser} from "../shared/utilities";


const User = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [canEdit, setCanEdit] = useState(false)
    const [editUserDetails, setEditUserDetails] = useState(location.state.user);

    const onChange = (e) => {
        const name = e.target.name
        editUserDetails[name] = e.target.value
        setEditUserDetails({...editUserDetails})
    }

    const onSubmit = () => {
        if (location.state.prevPath === "/signup") {
            userUpload(editUserDetails);
        } else {
            editUser(editUserDetails, props.state, location.state.id);
        }
        props.state.setCurrentUserDetails(editUserDetails)
        canEdit ? navigate("/table", getState(location, editUserDetails, location.state.id)) : navigate("/table", getState(location, props.state.currentUserDetails, location.state.id))
    }

    const userUpload = (userDetails) => {
        fetch("https://daysofjelly-default-rtdb.firebaseio.com/userList.json", {
            method: 'POST', headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify(userDetails)
        })
    }

    useEffect(() => {
        getConsole(location, props.state.currentUserDetails)
        if (location.state.id === location.state.user.id) {
            setCanEdit(true)
        }


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
                        <b className="blink">'</b>
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
                <h2 className="subtitle">{editUserDetails.name}'s Info</h2>
                    </Col>
                    <Col>
                        <Button  variant="secondary" onClick={() => {
                            navigate("/login", getState(location, undefined, location.state.id))
                        }}>
                            Logout
                        </Button>
                    </Col>
                </Row>
            </Container>
            <Container className='mt-5'>
                <Form>
                    {/*<FloatingLabel*/}
                    {/*    controlId="floatingInput"*/}
                    {/*    label="Name"*/}
                    {/*    className="mb-3"*/}
                    {/*>*/}
                    {/*    <Form.Control*/}
                    {/*        type="text"*/}
                    {/*        placeholder="rudolph"*/}
                    {/*        name="name"*/}
                    {/*        disabled={!canEdit}*/}
                    {/*        onChange={onChange}*/}
                    {/*        value={editUserDetails.name}*/}
                    {/*    />*/}
                    {/*</FloatingLabel>*/}
                    <Row>
                        <Col>
                    <FloatingLabel
                        controlId="floatingTextarea1"
                        label="Favorite Color"
                        className="mb-3"
                    >
                        <Form.Control
                            as="textarea"
                            disabled={!canEdit}
                            placeholder="Favorite Colors?"
                            name="favColor"
                            onChange={onChange}
                            value={editUserDetails.favColor}
                        />
                    </FloatingLabel>

                        </Col>
                        <Col>
                    <FloatingLabel
                        controlId="floatingTextarea2"
                        label="Clothing Sizes?"
                        className="mb-3"
                    >
                        <Form.Control
                            as="textarea"
                            placeholder="Clothing Sizes?"
                            disabled={!canEdit}
                            onChange={onChange}
                            name="sizes"
                            value={editUserDetails.sizes}
                        />
                    </FloatingLabel>

                        </Col>
                    </Row>

                    <FloatingLabel
                        controlId="floatingTextarea3"
                        label="Wish List"
                        className="mb-3">
                        <Form.Control
                            as="textarea"
                            placeholder="What would you like for Christmas?"
                            style={{height: '100px'}}
                            onChange={onChange}
                            name={"wishes"}
                            disabled={!canEdit}
                            value={editUserDetails.wishes}
                        />
                    </FloatingLabel>
                    {canEdit ? <Button variant="primary" onClick={onSubmit}>
                        Submit
                    </Button> : <></>}
                    <Button variant="secondary" onClick={(e) => {
                        navigate("/table", getState(location, location.state.currentUserDetails, location.state.id))
                    }}>
                        Cancel
                    </Button>
                </Form>
            </Container>
        </div>)
};

export default User;