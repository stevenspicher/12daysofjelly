import React, {useEffect, useState} from "react";
import Header from "../components/Header"
import SpeedDial from "../components/SpeedDial"
import {Button, Card, Col, Row, Modal, Badge, Carousel, Form} from "react-bootstrap";
import {useLocation, useNavigate} from 'react-router-dom';
import {Container, Grow, Paper, Stack} from "@mui/material";
import {getConsole, getState, getUsers, blink} from "../shared/utilities";
import {jellyList} from "../shared/containers";


const JellyList = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [currentUserDetails, setCurrentUserDetails] = useState()
    const [currentJellyDetails, setCurrentJellyDetails] = useState({name: "Jelly List"})
const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false)
    }

    useEffect(() => {
        setCurrentUserDetails(location.state.currentUserDetails)
    }, []);

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
                            return (
                <Carousel.Item key={index}>
                    <h3 className={"subtitle"}>{jelly.id}: {jelly.name} </h3>
                    <img onClick={() => {
                        navigate("/jelly", getState(location, location.state.currentUserDetails, location.state.id,jelly, index))
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