import React, {useEffect, useState} from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Container} from "react-bootstrap";
import {useLocation, useNavigate} from "react-router-dom";
import {getConsole, getState, getUsers, editUser} from "../shared/utilities";


const User = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [canEdit, setCanEdit] = useState(false)
    const [currentUserDetails, setCurrentUserDetails] = useState({});
    const [userList, setUserList] = useState([undefined]);

    const onChange = (e) => {
        const name = e.target.name
        currentUserDetails[name] = e.target.value
        setCurrentUserDetails({...currentUserDetails})
    }

    const onSubmit = () => {
        if (location.state.prevPath === "/signup") {
            userUpload(currentUserDetails);
        } else {
            editUser(currentUserDetails, location.state.id);
            console.log("edit")
        }
        getUsers(setUserList);
        setCurrentUserDetails(currentUserDetails)
        navigate("/table", getState(location, userList, currentUserDetails, location.state.id))
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
        getConsole(location, currentUserDetails)
        if (location.state.id === location.state.user.id) {
            setCanEdit(true)
        }
        setCurrentUserDetails(location.state.currentUserDetails)


    }, []);

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
                        <Form.Control
                            type="text"
                            placeholder="rudolph"
                            name="name"
                            disabled={!canEdit}
                            onChange={onChange}
                            value={currentUserDetails.name}
                        />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingTextarea1"
                        label="Favorite Color"
                        className="mb-3"
                    >
                        <Form.Control
                            as="textarea"
                            disabled={!canEdit}
                            placeholder="Favorite Colors?"
                            name="favColor"
                            onChange={onChange}
                            value={currentUserDetails.favColor}
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingTextarea2"
                        label="Clothing Sizes?"
                        className="mb-3"
                    >
                        <Form.Control
                            as="textarea"
                            placeholder="Clothing Sizes?"
                            disabled={!canEdit}
                            onChange={onChange}
                            name="sizes"
                            value={currentUserDetails.sizes}
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingTextarea3"
                        label="Wish List"
                        className="mb-3">
                        <Form.Control
                            as="textarea"
                            placeholder="What would you like for Christmas?"
                            style={{height: '100px'}}
                            onChange={onChange}
                            name={"wishes"}
                            disabled={!canEdit}
                            value={currentUserDetails.wishes}
                        />
                    </FloatingLabel>
                    {canEdit ?
                        <Button variant="primary" onClick={onSubmit}>
                            Submit
                        </Button>
                        : <></>}
                    <Button variant="secondary" onClick={(e) => {
                        navigate("/table", getState(location, userList, location.state.currentUserDetails, location.state.id))
                    }
                    }>
                        Cancel
                    </Button>
                </Form>
            </Container>
            <Button className={"mt-5"} variant="secondary" onClick={() => {
                navigate("/login", getState(location, userList, location.state.currentUserDetails, location.state.id))
            }}>
                Logout
            </Button>
        </div>
    )
};

export default User;