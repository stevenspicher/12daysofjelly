import React, {useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import {Container} from "react-bootstrap";
import {useNavigate, useLocation} from 'react-router-dom';
import {getConsole, getState} from "../shared/utilities";

const SignUp = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [nameIsUsed, setNameIsUsed] = useState(false);
    const [userList, setUserList] = useState([]);
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
            navigate("/login", getState(location, props.userList, newUserDetails, newUserDetails.name))
        }
    }

    const nameCheck = (name) => {
        if (props.userList.find((user) => user.name === name)) {
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
            <Container className={"pt-5"}>
                <h1 className="title">12 Days of Spreads</h1>
                {nameIsUsed ? <h2 className="subtitle-signup">OOPs</h2> :
                    <h2 className="subtitle-signup">Sign up</h2>}
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