import React, {useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import { Row, Col, Badge} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import {useLocation} from 'react-router-dom';
import {useNavigate} from "react-router-dom";
import {emptyUserDetails} from "../shared/containers";
import {getUsers, getConsole, getState, loginQuiz, loginQuiz2, blink} from "../shared/utilities";
import {Container, Grow, Paper, Stack} from "@mui/material";
const Login = (props) => {
    console.log(props)
    const navigate = useNavigate();
    const location = useLocation();
    const [id, setId] = useState(undefined)
    const [isLoginCorrect, setIsLoginCorrect] = useState(true);
    const [loginDetails, setLoginDetails] = useState(emptyUserDetails);
    const onChange = (e) => {
        const name = e.target.name
        loginDetails[name] = e.target.value
        setLoginDetails({...loginDetails})
    }

    const onSubmit = () => {
        //*****      LoginCheck - add family quiz question
        //TODO: add family quiz


        if (props.state.userList.find((user) => user.name === loginDetails.name.toLowerCase())) {
            const id = (props.state.userList.find((user) => user.name === loginDetails.name.toLowerCase()).id);
            const userDetails = (props.state.userList.find((user) => user.name === loginDetails.name.toLowerCase()));
            props.state.setCurrentUserDetails(userDetails)
            console.log(userDetails)
            // if (loginQuiz(userDetails, props.state, id) && loginQuiz2(userDetails, props.state, id)) {
            //     if (userDetails.preRating !== true) {
            //         navigate("/firstratings", getState(location, userDetails, id))
            //     } else {
            //         navigate("/jellies", getState(location, userDetails, id))
            //     }
            // } else {
            //     alert('nope')
            // }

            navigate("/jellies", getState(location, userDetails, id))

        }
    }


    useEffect(() => {
        blink()
    }, []);


    useEffect(() => {
        // if (location.state !== null)
        //     if (location.state.prevPath === "/signup") {
                getUsers(props.state.setUserList)
            // }
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
                        // label="Name"
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

