import React, {useEffect, useState} from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Container} from "react-bootstrap";
import {Link, useLocation, useNavigate} from "react-router-dom";

const User = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [canEdit, setCanEdit] = useState(false)

    const onSubmit = () => {
        if (location.state.prevPath === "/login") {
            userUpload(props.currentUserDetails);
        } else {
            console.log("existing user, need to edit")
        }
        navigate("/table", {
            state: {
                prevPath: location.pathname,
                currentUserDetails: location.state.currentUserDetails,
                setCurrentUserDetails:  "submit - setuserdetails"
            }
        })
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

        if (location.state.currentUserDetails.id === props.currentUserDetails.id || location.state.prevPath === "/login") {
            setCanEdit(true)
        } else {
            setCanEdit(false)
        }

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
                        <Form.Control type="text" placeholder="rudolph" name="name" disabled={!canEdit}
                                      onChange={props.onChange}
                                      value={location.state.currentUserDetails.name}
                        />
                    </FloatingLabel>
                    {canEdit ?
                        <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3" name="password">
                            <Form.Control type="password" placeholder="Password"
                                          name="password" onChange={props.onChange}
                                          disabled={!canEdit}
                                          value={location.state.currentUserDetails.password}/>
                        </FloatingLabel> :
                        <></>}

                    <FloatingLabel
                        controlId="floatingTextarea1"
                        label="Favorite Color"
                        className="mb-3"
                        name="favColor"
                    >
                        <Form.Control as="textarea" disabled={!canEdit} placeholder="Favorite Colors?" name="favColor"
                                      onChange={props.onChange}
                                      value={location.state.currentUserDetails.favColor}/>
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingTextarea2"
                        label="Clothing Sizes?"
                        className="mb-3"
                    >
                        <Form.Control as="textarea" placeholder="Clothing Sizes?" disabled={!canEdit}
                                      onChange={props.onChange} name="sizes"
                                      value={location.state.currentUserDetails.sizes}/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingTextarea3" label="Wish List" className="mb-3">
                        <Form.Control
                            as="textarea"
                            placeholder="What would you like for Christmas?"
                            style={{height: '100px'}}
                            onChange={props.onChange}
                            name={"wishes"}
                            disabled={!canEdit}
                            value={location.state.currentUserDetails.wishes}
                        />
                    </FloatingLabel>
                    {canEdit ? <Button variant="primary" onClick={onSubmit}>
                        Submit
                    </Button> : <></>}
                    <Button variant="secondary" onClick={() => {
                        {
                            location.state.prevPath === "/login" ? navigate("/login") :
                                navigate("/table", {
                                    state: {
                                        prevPath: location.pathname,
                                        currentUserDetails: location.state.currentUserDetails,
                                        setCurrentUserDetails: "cancel - setuserdetails"
                                    }
                                })
                        }
                    }
                    }>
                        Cancel
                    </Button>
                </Form>
            </Container>
        </div>
    )
};

export default User;