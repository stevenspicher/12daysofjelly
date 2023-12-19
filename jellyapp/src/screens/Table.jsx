import React, {useEffect} from "react";
import {Button, Card, Col, Row, Modal, Badge} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import SpeedDial from "../components/SpeedDial"
import {Container} from "@mui/material";
import {getUsers} from "../shared/utilities"

import {computed, signal, useSignal} from "@preact/signals-react";
import {
    storedUserList,
    storedJellyList,
    userEdit
} from "../store/signalsStore";

let userList = storedUserList.value;

const UserTable = () => {
    const id = JSON.parse(localStorage.getItem("id"))
    const navigate = useNavigate();

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <Container>

            <SpeedDial/>

                        <Col>
                            <h2 className="subtitle">Family List</h2>
                        </Col>

            {storedUserList.value[0] === undefined ? <></> :
                <Container >
                    {storedUserList.value.map((user, index) => {
                        return (
                            <Card key={index} className="cards">
                                <Card.Header as="h5">
                                    <Row>
                                        <Col>{user.name}</Col>
                                    </Row>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        Favorite color: {user.favColor !== undefined ? user.favColor :
                                        <Badge bg="danger">need</Badge>}
                                    </Card.Text>
                                    <Card.Text>
                                        Sizes: {user.sizes !== undefined ? user.sizes : <Badge bg="info">need</Badge>}
                                    </Card.Text>
                                    <Card.Text>
                                        Wish List: {user.wishes !== undefined ? user.wishes :
                                        <Badge bg="success">need</Badge>}
                                    </Card.Text>
                                    <Row>
                                        {id === index ?
                                            <Button onClick={() => {
                                                userEdit.value = true
                                                navigate("/user")
                                            }}>Edit</Button> :
                                            <></>}
                                    </Row>

                                </Card.Body>
                            </Card>
                        )
                    })}
                </Container>
            }
        </Container>
    )
};

export default UserTable;