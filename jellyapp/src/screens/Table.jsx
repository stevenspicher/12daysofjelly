import React, {useEffect, useState} from "react";
import Header from "../components/Header"
import {Button, Card, Col, Row, Modal, Badge} from "react-bootstrap";
import {useLocation, useNavigate} from 'react-router-dom';
import {jellyList} from "../shared/containers";
import {getConsole, getState, getUsers, blink} from "../shared/utilities";
import SpeedDial from "../components/SpeedDial"
import {Container, Grow, Paper, Stack} from "@mui/material";

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
            blink()
        }
    }, []);

    // useEffect(() => {
    //     if (props.state.currentUserDetails.favColor === undefined || props.state.currentUserDetails.wishes === undefined || props.state.currentUserDetails.sizes === undefined) {
    //         setShow(true)
    //     }
    // }, []);

    return (
        <Container>

            <SpeedDial/>

                        <Col>
                            <h2 className="subtitle">Family List</h2>
                        </Col>

            {props.state.userList[0] === undefined ? <></> :
                <Container >
                    {props.state.userList.map((user, index) => {
                        return (
                            <Card key={index} className="cards">
                                <Card.Header as="h5">
                                    <Row>
                                        <Col>{user.name}</Col>
                                        {/*<Col>*/}
                                        {/*    {user.quiz1 === true ? <h6><Badge>quiz 1</Badge></h6> : <></>}*/}
                                        {/*</Col>*/}
                                        <Col>
                                            {/*//TODO: display ratings*/}
                                            {/*{user.preRating === true ? <h6><Badge>Prediction</Badge></h6> : <></>}*/}
                                            {/*{user.jellies !== undefined ?*/}
                                            {/*    user.jellies[index].rating !== undefined ?*/}
                                            {/*    jellyList.map((jelly, index) => (*/}
                                            {/*    <h6><Badge>{jelly.name}: {user.jellies[index].rating}</Badge></h6>*/}
                                            {/*    ))*/}
                                            {/*    : <></>*/}
                                            {/*    : <></>*/}
                                            {/*       }*/}
                                        </Col>
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
                                        {location.state.id === user.id ?
                                            <Button onClick={() => {
                                                getUsers(props.state.setUserList)
                                                navigate("/user", getState(location, currentUserDetails, location.state.id, user, index))
                                            }}>Edit</Button> :
                                            <></>}
                                    </Row>

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
                        navigate("/user", getState(location, props.state.currentUserDetails, location.state.id, props.state.currentUserDetails, index))
                    }}>
                        Fill it
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Do it Later
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
};

export default UserTable;