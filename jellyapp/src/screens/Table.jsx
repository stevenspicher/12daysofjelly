import React from "react";
import {Button, Card, Col, Row, Modal, Badge} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import SpeedDial from "../components/SpeedDial"
import {Container} from "@mui/material";
import {storedCurrentUser, userEdit, storedUserList} from "../store/signalsStore";
const currentUser = storedCurrentUser.value;
const userList = storedUserList.value;

const UserTable = () => {
    const navigate = useNavigate();

    return (
        <Container>

            <SpeedDial/>

                        <Col>
                            <h2 className="subtitle">Family List</h2>
                        </Col>

            {storedUserList[0] === undefined ? <></> :
                <Container >
                    {userList.map((user, index) => {
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
                                        {currentUser.id === user.id ?
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