import React, {useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import {Col, Container, Row} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import {useNavigate, useLocation} from 'react-router-dom';

import {emptyUserDetails} from "../shared/containers";
import {getConsole, getState} from "../shared/utilities";

const InvalidLogin = (props) => {
    const navigate = useNavigate();
    const location = useLocation();

    const [isLoginCorrect, setIsLoginCorrect] = useState(true);
    const [loginDetails, setLoginDetails] = useState(emptyUserDetails);
    const onChange = (e) => {
        const name = e.target.name
        loginDetails[name] = e.target.value
        setLoginDetails({...loginDetails})
    }

    const onSubmit = () => {
        //     if (userList.find((user) => user.name === loginDetails.name) &&
        //         userList.find((user) => user.password === loginDetails.password)) {
        //         const id = userList.find((user) => user.name === loginDetails.name) &&
        //             Object.values(userList).find((user) => user.password === loginDetails.password).id
        //         const userData = userList.find((user) => user.name === loginDetails.name) &&
        //             Object.values(userList).find((user) => user.password === loginDetails.password)
        //         // localStorage.setItem('userId', JSON.stringify(id))
        navigate("/table", getState(location, props.userList, loginDetails, location.state.id))
        //     } else {
        //         setIsLoginCorrect(false)
        //     }
    }

    useEffect(() => {
        getConsole(location)
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
                        <h2 className="subtitle">Uh oh</h2>
                    </Col>
                    <Col>
                        <Button  variant="primary" onClick={() => {
                            navigate("/login", getState(location, undefined, undefined))
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