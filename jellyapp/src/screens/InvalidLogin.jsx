import React, {useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import {Container} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import {useNavigate, useLocation} from 'react-router-dom';

import {emptyUserDetails} from "../shared/containers";
import {getConsole, getState} from "../shared/utilities";

const InvalidLogin = () => {
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
        navigate("/table", getState(location, location.state.userList, loginDetails, location.state.id))
        //     } else {
        //         setIsLoginCorrect(false)
        //     }
    }

    useEffect(() => {
        getConsole(location)
    }, []);

    return (
        <>
            <Container className={"pt-5"}>
                <h1 className="title">12 Days of Spreads</h1>
                {isLoginCorrect ? <h2 className="subtitle-signup">Login</h2> :
                    <h2 className="subtitle-signup">Uh oh</h2>}
            </Container>
            <Container className='mt-5'>
                <Form>
                    <h2 className="subtitle-signup">That's not Correct</h2>
                    <h2 className="subtitle-signup">Please try again</h2>
                    <Container className="mt-3">
                        <Button variant="secondary" onClick={() => {
                            navigate("/login", getState(location, location.state.userList, loginDetails, location.state.id))
                        }}>
                            Retry
                        </Button>
                    </Container>
                </Form>
            </Container>
        </>
    )
};

export default InvalidLogin;