import React, {useEffect, useState} from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Row, Col} from "react-bootstrap";
import {useLocation, useNavigate} from "react-router-dom";
import {getConsole, getState, getUsers, editUser} from "../shared/utilities";
import SpeedDial from "../components/SpeedDial"
import {Container, Grow, Paper, Stack} from "@mui/material";

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
        fetch("https://jelly-e1b63-default-rtdb.firebaseio.com/userList.json", {
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
        <Container>
          <SpeedDial/>
                <h2 className="subtitle">{editUserDetails.name}'s Info</h2>
            <Container >
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
<Row >

                    <FloatingLabel
                        controlId="floatingTextarea3"
                        label="Wish List"
                        className="mb-3">
                        <Form.Control
                            as="textarea"
                            rows={10}
                            placeholder="What would you like for Christmas?"
                            style={{height: '400px'}}
                            onChange={onChange}
                            name={"wishes"}
                            disabled={!canEdit}
                            value={editUserDetails.wishes}
                        />
                    </FloatingLabel>
</Row>
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
        </Container>)
};

export default User;