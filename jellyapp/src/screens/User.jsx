import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";
const User = () => {
    return (
        <div>
            <Container className="pt-5">
                <h1 className="title">12 Days of Spreads</h1>
                <h2 className="subtitle">User Info</h2>
            </Container>
            <Container className='mt-5'>
            <Form>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Name"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="rudolph" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>

                <FloatingLabel
                    controlId="floatingTextarea1"
                    label="Favorite Color"
                    className="mb-3"
                >
                    <Form.Control as="textarea" placeholder="Favorite Colors?" />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingTextarea2"
                    label="Clothing Sizes?"
                    className="mb-3"
                >
                    <Form.Control as="textarea" placeholder="Clothing Sizes?" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingTextarea3" label="Wish List" className="mb-3">
                    <Form.Control
                        as="textarea"
                        placeholder="What would you like for Christmas?"
                        style={{ height: '100px' }}
                    />
                </FloatingLabel>
                <Button variant="primary" type="submit" as={Link}
                        key={"login"}
                        to={"/table"}>
                    Submit
                </Button>
            </Form>
                </Container>
        </div>
    )
};

export default User;