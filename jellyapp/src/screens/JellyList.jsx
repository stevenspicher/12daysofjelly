import React, {useEffect} from "react";
import SpeedDial from "../components/SpeedDial"
import { Col, Row,  Carousel} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import {Container} from "@mui/material";


import {computed, signal} from "@preact/signals-react";
import {
    storedJellyList,
    storedUserList,
} from "../store/signalsStore";
let
    userList = storedUserList.value,
    jellyList = storedJellyList.value;

const JellyList = () => {
const id = JSON.parse(localStorage.getItem("id"))

    const navigate = useNavigate();
    useEffect(() => {
        let
        userList = storedUserList.value,
        jellyList = storedJellyList.value;
    }, [storedUserList.value, storedJellyList.value]);

if (jellyList !== undefined)
    return (
        <Container>
            <SpeedDial/>
            <Row>
                <Col>
                    <h2 className="subtitle">swipe to change, click to rate</h2>
                </Col>
            </Row>
            <Carousel className={"mt-2"} interval={null} fade variant="dark" indicators={false} controls={true} >
                {storedJellyList.value.map((jelly, index) => {
                    if (jelly.name !== undefined)
                        if (index < 5)
                            return (
                <Carousel.Item key={index}>
                    <h3 className={"subtitle"}>{jelly.id}: {jelly.name} </h3>
                    <img onClick={() => {
                        localStorage.setItem("jellyid", jelly.id)
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