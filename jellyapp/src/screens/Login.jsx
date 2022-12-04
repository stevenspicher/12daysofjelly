import React, {useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import {Container} from "react-bootstrap";
import {useNavigate, Link, useLocation} from 'react-router-dom';

const Login = (props) => {
    const navigate = useNavigate();
    const location = useLocation();

    const [userList, setUserList] = useState([]);
    const [userId, setUserId] = useState(undefined)
    const [currentUserDetails, setCurrentUserDetails] = useState({
        id: undefined,
        name: undefined,
        password: undefined,
        favColor: undefined,
        sizes: undefined,
        wishes: undefined,
        niceness: undefined,
    });
    const onChange = (e) => {
        const name = e.target.name
        currentUserDetails[name] = e.target.value
        setCurrentUserDetails({...currentUserDetails})
    }
    const getUsers = () => {
        let list = []
        fetch("https://daysofjelly-default-rtdb.firebaseio.com/userList.json")
            .then(response => response.json())
            .then(data => {
                list = Object.keys(data).map((key) => (
                    {
                        id: key,
                        name: data[key].name,
                        password: data[key].password,
                        favColor: data[key].favColor,
                        sizes: data[key].sizes,
                        wishes: data[key].wishes,
                        niceness: data[key].niceness
                    }
                ))
                setUserList(list)
            })
    }

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('userId')) !== null) {
            setUserId(JSON.parse(localStorage.getItem('userId')));
        }
        getUsers()
    }, []);

    const onSubmit = () => {
            const id = props.userList.find((user) => user.name === props.currentUserDetails.name) &&
                Object.values(props.userList).find((user) => user.password === props.currentUserDetails.password).id;
            console.log(id);
            localStorage.setItem('userId', JSON.stringify(id))
        if (props.userList.find((user) => user.name === props.currentUserDetails.name) && Object.values(props.userList).find((user) => user.password === props.currentUserDetails.password)) {
            const id = props.userList.find((user) => user.name === props.currentUserDetails.name) && Object.values(props.userList).find((user) => user.password === props.currentUserDetails.password).id
            const list = props.userList.find((user) => user.name === props.currentUserDetails.name) && Object.values(props.userList).find((user) => user.password === props.currentUserDetails.password)
            localStorage.setItem('userId', JSON.stringify(id))
            props.setCurrentUserDetails(list)
            navigate("/table", {
                state: {
                    prevPath: location.pathname,
                    id: id,
                    currentUserDetails: props.currentUserDetails,
                    setCurrentUserDetails: props.setCurrentUserDetails
                }
            })
        } else {
            alert("nope")
        }
    }

    return (
        <>
            <Container className={"pt-5"}>
                <h1 className="title">12 Days of Spreads</h1>
                <h2 className="subtitle">Login</h2>
            </Container>
            <Container className='mt-5'>
                <Form>
                    <>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Name"
                            className="mb-3"
                        >
                            <Form.Control type="text" name="name"
                                          onChange={props.onChange}
                                          placeholder="your name here"/>
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" name="password" label="Password">
                            <Form.Control type="password"
                                          name="password" onChange={props.onChange} placeholder="Password"/>
                        </FloatingLabel>
                    </>
                    <Container className="mt-3">
                        <Button variant="primary" onClick={onSubmit}>
                            Login
                        </Button>
                        <Button variant="secondary" onClick={() => {
                            navigate("/signup", {
                                state: {
                                    currentUserDetails: {
                                        id: undefined,
                                        name: undefined,
                                        password: undefined,
                                        favColor: undefined,
                                        sizes: undefined,
                                        wishes: undefined,
                                        niceness: undefined,
                                    },
                                }
                            })
                        }}>
                            Sign up
                        </Button>
                    </Container>
                </Form>
            </Container>
        </>
    )
};

export default Login;