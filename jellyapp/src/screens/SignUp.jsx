import React, {useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import {Container} from "react-bootstrap";
import {useNavigate, Link, useLocation} from 'react-router-dom';

const SignUp = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [nameIsUsed, setNameIsUsed] = useState(false);

    const onSubmit = () => {
        // if (props.userList.find((user) => user.name === props.currentUserDetails.name)) {
        //     const id = props.userList.find((user) => user.name === props.currentUserDetails.name) && Object.values(props.userList).find((user) => user.password === props.currentUserDetails.password).id
        //     const list = props.userList.find((user) => user.name === props.currentUserDetails.name) && Object.values(props.userList).find((user) => user.password === props.currentUserDetails.password)
        //     localStorage.setItem('userId', JSON.stringify(id))
        //     props.setCurrentUserDetails(list)
        //     navigate("/table", {
        //         state: {
        //             prevPath: location.pathname,
        //             id: id,
        //             currentUserDetails: props.currentUserDetails,
        //             setCurrentUserDetails: props.setCurrentUserDetails
        //         }
        //     })
        // }
    }

    const nameCheck = () => {
        // console.log(props.userList)
        // console.log(props.currentUserDetails)
        // console.log(location.state.currentUserDetails)
        if (props.userList.find((user) => user.name === props.currentUserDetails.name)) {
            return true
            console.log(props.userList.find((user) => user.name === location.state.currentUserDetails))
        }
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
       console.log(nameCheck())
    }, [nameIsUsed]);

    return (
        <>
            <Container className={"pt-5"}>
                <h1 className="title">12 Days of Spreads</h1>
                <h2 className="subtitle">Sign Up</h2>
            </Container>
            <Container className='mt-5'>
                <Form>
                    <>
                        {nameCheck ? <h2 className="subtitle-signup">That name is taken</h2> :
                            <h2 className="subtitle-signup">Please enter your name:</h2>}
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Name"
                            className="mb-3"
                        >
                            <Form.Control type="text"
                                          name="name"
                                          onChange={(e) => {
                                              nameCheck()
                                              if (!nameCheck)
                                              props.onChange(e)
                                          }}
                                          placeholder="your name here"/>
                        </FloatingLabel>
                        <h2 className="subtitle-signup">Please enter your password:</h2>
                        <FloatingLabel controlId="floatingPassword" name="password" label="Password">
                            <Form.Control type="password"
                                          name="password"
                                          onChange={props.onChange}
                                          placeholder="Password"/>

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