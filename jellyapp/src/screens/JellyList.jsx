import React, {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import {Button, Card, Col, Row, Modal, Badge, Carousel, Form} from "react-bootstrap";
import {useLocation, useNavigate} from 'react-router-dom';

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
        getConsole(location, currentUserDetails)
        setCurrentUserDetails(location.state.currentUserDetails)
    }, []);

    return (
        <>
            <Container className={"pt-4"} >
                <div>

                    <h1 className="title">
                        <b className="blink">1</b>
                        <b className="blink">2</b>
                        <b> </b>
                        <b className="blink">D</b>
                        <b className="blink">a</b>
                        <b className="blink">y</b>
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
                        <h2 className="subtitle">swipe to change, click to rate</h2>
                    </Col>
                    <Col>
                        <Button  variant="secondary" onClick={() => {
                            navigate("/login", getState(location, location.state.currentUserDetails, location.state.id))
                        }}>
                            Logout
                        </Button>
                        <Button  variant="secondary" onClick={() => {
                            navigate("/table", getState(location, location.state.currentUserDetails, location.state.id))
                        }}>
                            Family
                        </Button>
                    </Col>
                </Row>
            </Container>

            <Carousel className={"mt-2"} interval={null} fade variant="dark" indicators={false} controls={false} >
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

            <Button className={"mt-2"} variant="secondary" onClick={() => {
                navigate("/images", getState(location, currentUserDetails, location.state.id))
            }}>
                What's up with the images?
            </Button>


        </>
    )
};

export default JellyList;