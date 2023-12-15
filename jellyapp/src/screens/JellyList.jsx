import React from "react";
import SpeedDial from "../components/SpeedDial"
import { Col, Row,  Carousel} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import {Container} from "@mui/material";
import {currentUser, jellyId, signalJellyList} from "../store/signalsStore";




const JellyList = () => {
    const navigate = useNavigate();
console.log(currentUser.value)
    return (
        <Container>
            <SpeedDial/>
            <Row>
                <Col>
                    <h2 className="subtitle">swipe to change, click to rate</h2>
                </Col>
            </Row>
            <Carousel className={"mt-2"} interval={null} fade variant="dark" indicators={false} controls={true} >
                {signalJellyList.value.map((jelly, index) => {
                    jellyId.value = jelly.id
                            return (
                <Carousel.Item key={index}>
                    <h3 className={"subtitle"}>{jelly.id}: {jelly.name} </h3>
                    <img onClick={() => {
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