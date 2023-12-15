import React, {useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import {Col, Container, Row} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import {useNavigate} from 'react-router-dom';



const InvalidLogin = () => {
    const navigate = useNavigate();

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
                        <h2 className="subtitle">Uh oh</h2>
                    </Col>
                    <Col>
                        <Button  variant="primary" onClick={() => {
                            navigate("/login")
                        }}>
                            Return to login
                        </Button>
                    </Col>
                </Row>
            </Container>
            <Container className='mt-5'>
                <Form>
                    <h2 className="subtitle-signup">That's not Correct</h2>
                    <h2 className="subtitle-signup">Please try again</h2>

                </Form>
            </Container>
        </>
    )
};

export default InvalidLogin;