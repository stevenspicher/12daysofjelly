import React, {useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import { Row, Col, Badge} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import {useNavigate} from "react-router-dom";
import {emptyUserDetails} from "../shared/containers";
import { blink, getUsers} from "../shared/utilities";
import {Container} from "@mui/material";

//state
import {computed, signal} from "@preact/signals-react";
import {storedCurrentUser, storedUserList, storedUserId} from "../store/signalsStore";
let currentUser, userList, userId;

const Login = () => {
    const login = signal("")
    const navigate = useNavigate();
    const onChange = (e) => {login.value = e.target.value.toLowerCase()}

    const onSubmit = async () => {
        if (userList !== undefined)
            if (userList.find((user) => user.name === login.value)) {
                storedCurrentUser.value = userList.find((user) => user.name === login.value);
                    storedUserId.value = userList.map( e => e.name).indexOf(login.value);
                    localStorage.setItem("id", storedUserId.value)
                navigate("/jellylist")
                } else {
                navigate("/invalid")
                }
            }

    useEffect(() => {
        blink();
        getUsers();
    }, []);


    useEffect(() =>{
       currentUser = storedCurrentUser.value;
       userList = storedUserList.value;
       userId = storedUserId.value;
    }, [storedCurrentUser.value, storedUserList.value, storedUserId.value]);

    return (
        <>
            <Container>
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
                        <h2 className="subtitle">Welcome!</h2>
                    </Col>
                </Row>

            </Container>
            <Container className='mt-5'>
                <Form onSubmit={onSubmit}>
                    <h2 className="subtitle-signup">Please enter your name:</h2>
                    <FloatingLabel
                        controlId="floatingInput"
                        className="m-5"
                        name="name"
                    >

                        <Form.Control type="text"
                                      name="name"
                                      onChange={onChange}
                                      placeholder="your name here"/>


                        <Button style={{marginTop:"10px"}} variant="primary" onClick={onSubmit}>
                            Login
                        </Button><p style={{color: "blue"}}>v1</p>
                    </FloatingLabel>


                </Form>

            </Container>
          
        </>
    )
};

export default Login;

