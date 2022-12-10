import React, {useEffect, useState} from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Container, Row, Col} from "react-bootstrap";
import {useLocation, useNavigate} from "react-router-dom";
import {getConsole, getState, getUsers, editUser} from "../shared/utilities";


const Jellies = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [canEdit, setCanEdit] = useState(false)
    const [jellyDetails, setJellyDetails]= useState(location.state.user)

    // const onChange = (e) => {
    //     const name = e.target.name
    //     editUserDetails[name] = e.target.value
    //     setEditUserDetails({...editUserDetails})
    // }

    // const onSubmit = () => {
    //     if (location.state.prevPath === "/signup") {
    //         userUpload(editUserDetails);
    //     } else {
    //         editUser(editUserDetails, props.state, location.state.id);
    //     }
    //     props.state.setCurrentUserDetails(editUserDetails)
    //     canEdit ? navigate("/table", getState(location, editUserDetails, location.state.id)) : navigate("/table", getState(location, props.state.currentUserDetails, location.state.id))
    // }

    // const userUpload = (userDetails) => {
    //     fetch("https://daysofjelly-default-rtdb.firebaseio.com/userList.json", {
    //         method: 'POST', headers: {
    //             'Content-Type': 'application/json'
    //         }, body: JSON.stringify(userDetails)
    //     })
    // }

    useEffect(() => {
        getConsole(location, props.state.currentUserDetails)

    }, []);
    return (
        <div>
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
                <h2 className="subtitle">{jellyDetails.name} </h2>
                    </Col>
                    <Col>
                        <Button variant="secondary" onClick={() => {
                            navigate("/login", getState(location, location.state.currentUserDetails, location.state.id))
                        }}>
                            Logout
                        </Button>
                        <Button  variant="secondary" onClick={() => {
                            navigate("/jellies", getState(location, location.state.currentUserDetails, location.state.id))
                        }}>
                            Jellies
                        </Button>
                    </Col>
                </Row>
            </Container>
            <Container className='mt-5'>
                <Form>

                </Form>
            </Container>
        </div>)
};

export default Jellies;