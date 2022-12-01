import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import {Container} from "react-bootstrap";
import {Routes, Route, Navigate, Link} from 'react-router-dom';

const Login = () => {
    return (
        <>
        <Container className={"pt-5"}>

                <h1 className="title">12 Days of Spreads</h1>
                <h2 className="subtitle">Login</h2>

        </Container>
            <Container className='mt-5'>
    <Form >
        <>
            <FloatingLabel
                controlId="floatingInput"
                label="Name"
                className="mb-3"
            >
                <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
        </>
        <Container className="mt-3">
        <Button  variant="primary" type="submit"

                    as={Link}
                    key={"login"}
                    to={"/table"}>

            Login
        </Button>
        <Button variant="secondary" type="submit">
            Sign up
        </Button>
        </Container>
    </Form>
            </Container>
        </>
    )
};

export default Login;