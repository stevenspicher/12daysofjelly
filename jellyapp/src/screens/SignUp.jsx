import React, {useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import {Col, Container, Row} from "react-bootstrap";
import {useNavigate, useLocation} from 'react-router-dom';
import {getConsole, getState} from "../shared/utilities";

const SignUp = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [nameIsUsed, setNameIsUsed] = useState(false);
    const [newUserDetails, setNewUserDetails] =useState({name: undefined})

    const onChange = (e) => {
        const newUser = e.target.value;
        const name = e.target.name;
        nameCheck(newUser)
        if (!nameIsUsed) {
        newUserDetails[name] = newUser
        setNewUserDetails({...newUserDetails})
        }
    }

    const onSubmit = () => {
        if (!nameIsUsed) {
        //TODO: add family quiz
            userUpload(newUserDetails)
            navigate("/login", getState(location, newUserDetails, undefined))
        }
    }

    const nameCheck = (name) => {
        if (props.state.userList.find((user) => user.name === name)) {
            setNameIsUsed(true)
        } else {setNameIsUsed(false)}
    }
    const userUpload = (userDetails) => {
        fetch("https://daysofjelly-default-rtdb.firebaseio.com/userList.json", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userDetails)
        })
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
                        <b className="blink">'</b>
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
                        <h2 className="subtitle">Sign up</h2>
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
                    <>
                        {nameIsUsed ? <h2 className="subtitle-signup">That name is taken</h2> :
                            <h2 className="subtitle-signup">Please enter your name:</h2>}
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Name"
                            className="mb-3"
                        >
                            <Form.Control type="text"
                                          name="name"
                                          onChange={onChange}
                                          placeholder="your name here"/>
                        </FloatingLabel>
                    </>
                    <Container className="mt-3">
                        <Button variant="primary" onClick={onSubmit}>
                            Create User
                        </Button>
                    </Container>
                </Form>
            </Container>
        </>
    )
};

export default SignUp;