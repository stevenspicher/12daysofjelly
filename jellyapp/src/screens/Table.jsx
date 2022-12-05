import React, {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import {Button, Card, Col, Row, Modal, Badge} from "react-bootstrap";
import {useLocation, useNavigate} from 'react-router-dom';
import {getConsole, getState, getUsers} from "../shared/utilities";
import {current} from "@reduxjs/toolkit";


const UserTable = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [currentUserDetails, setCurrentUserDetails] = useState()
const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false)
    }

    useEffect(() => {
        getConsole(location, currentUserDetails)
        setCurrentUserDetails(location.state.currentUserDetails)
    }, []);

    useEffect(() => {
        if (location.state.prevPath === "/user") {
            getUsers(props.state.setUserList)
        }
    }, []);

    useEffect(() => {
        if (props.state.currentUserDetails.favColor === undefined || props.state.currentUserDetails.wishes === undefined || props.state.currentUserDetails.sizes === undefined) {
            setShow(true)
        }
    }, []);

    return (
        <>
            <Container className={"pt-5"}>
                <h1 className="title">12 Days of Spreads</h1>
                <h2 className="subtitle">Family List</h2>
                <Row>
                    <Col xs={6}></Col>
                    <Col>
                <Button className={"mt-5"} variant="secondary" onClick={() => {
                    navigate("/login", getState(location, currentUserDetails, location.state.id))
                }}>
                    Logout
                </Button>

                    </Col>
                </Row>
            </Container>
            {props.state.userList[0] === undefined ? <></> :
                <Container className='mt-5'>
                    {props.state.userList.map((user, index) => {
                        return (
                            <Card key={index} className="cards">
                                <Card.Header as="h5">
                                    <Row>

                                        <Col xs={4} >{user.name}</Col>
                                            <Col xs={4}></Col>
                                        <Col>
                                            {location.state.id === user.id ?
                                                <Button onClick={() => {
                                                    getUsers(props.state.setUserList)
                                                    navigate("/user", getState(location, currentUserDetails, location.state.id, user, index))
                                                }}>Edit</Button> :
                                                <></>}
                                        </Col>
                                    </Row>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        Favorite color: {user.favColor !== undefined ? user.favColor : <Badge bg="danger">need</Badge>}
                                    </Card.Text>
                                    <Card.Text>
                                        Sizes: {user.sizes !== undefined ? user.sizes : <Badge bg="info">need</Badge>}
                                    </Card.Text>
                                    <Card.Text>
                                        Wish List: {user.wishes !== undefined ? user.wishes : <Badge bg="success">need</Badge>}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    })}
                </Container>
            }
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Welcome!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Items on your list are empty!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => {
                        const index = props.state.userList.indexOf(props.state.userList.find((user) => user.id === location.state.id).id)
                        navigate("/user", getState(location, currentUserDetails, location.state.id, currentUserDetails, index))
                    }}>
                        Fill it
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Do it Later
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
};

export default UserTable;