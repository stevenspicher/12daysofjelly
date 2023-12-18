import React, {useEffect} from "react";
import SpeedDial from "../components/SpeedDial"
import { Col, Row,  Carousel} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import {Container} from "@mui/material";



import {computed, signal} from "@preact/signals-react";
import {
    storedCurrentUser,
    openPromptModal,
    openResultModal,
    storedJellyList,
    storedJellyId,
    storedUserList,
    storedUserId
} from "../store/signalsStore";
const id = JSON.parse(localStorage.getItem("id"))
let
    currentUser = storedCurrentUser.value,
    userList = storedUserList.value,
    userId = storedUserId.value ?? id,
    jellyId = storedJellyId.value,
    jellyList = storedJellyList.value;

const JellyList = () => {
    console.log(storedUserList.value)
    const navigate = useNavigate();
    useEffect(() => {
        let
        currentUser = storedCurrentUser.value,
        userList = storedUserList.value,
        userId = storedUserId.value ?? id,
        jellyId = storedJellyId.value,
        jellyList = storedJellyList.value;
    }, [storedCurrentUser.value, storedUserList.value, storedUserId.value, storedJellyId.value, storedJellyList.value]);


    return (
        <Container>
            <SpeedDial/>
            <Row>
                <Col>
                    <h2 className="subtitle">swipe to change, click to rate</h2>
                </Col>
            </Row>
            <Carousel className={"mt-2"} interval={null} fade variant="dark" indicators={false} controls={true} >
                {jellyList.map((jelly, index) => {
                    if (jelly.name !== undefined)
                            return (
                <Carousel.Item key={index}>
                    <h3 className={"subtitle"}>{jelly.id}: {jelly.name} </h3>
                    <img onClick={() => {
                        storedJellyId.value = jelly.id;
                        navigate("/jelly")
                    }}
                        className="d-block w-100"
                        src={jelly.image}
                        alt="First slide"
                    />
                </Carousel.Item>
                            )})}
            </Carousel>
        </Container>
    )
};

export default JellyList;