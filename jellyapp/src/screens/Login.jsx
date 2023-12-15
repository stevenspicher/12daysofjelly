import React, {useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import { Row, Col, Badge} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import {useNavigate} from "react-router-dom";
import {emptyUserDetails} from "../shared/containers";
import { blink} from "../shared/utilities";
import {Container} from "@mui/material";
import {currentUser, userList} from "../store/signalsStore";
const Login = () => {
    const navigate = useNavigate();
    const [loginDetails, setLoginDetails] = useState(emptyUserDetails);
    const onChange = (e) => {
        const name = e.target.name
        loginDetails[name] = e.target.value
        setLoginDetails({...loginDetails})
    }

    const onSubmit = () => {
        if (userList.value.find((user) => user.name === loginDetails.name.toLowerCase())) {
            const userDetails = (userList.value.find((user) => user.name === loginDetails.name.toLowerCase()));
            currentUser.value = userDetails
            navigate("/jellylist")
        } else {
            navigate("/invalid")
        }
    }


    useEffect(() => {
        blink()
    }, []);


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

