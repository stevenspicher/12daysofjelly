import React, {useEffect, useState} from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Row, Col} from "react-bootstrap";
import {useLocation, useNavigate} from "react-router-dom";
import {editRatings} from "../shared/utilities";
import SpeedDial from '../components/SpeedDial'
import {Container, } from "@mui/material";
//state
import {computed, signal} from "@preact/signals-react";
import {
    storedCurrentUser,
    storedJellyList,
    storedJellyId,
    storedUserList,
    storedUserId
} from "../store/signalsStore";

const id = JSON.parse(localStorage.getItem("id"))
let
    currentUser = storedCurrentUser.value,
    userList = storedUserList.value,
    userId = storedUserId.value ?? id,
    jellyId = storedJellyId.value,
    jellyList = storedJellyList.value;


const Jellies = () => {
    console.log(storedJellyList.value)
    console.log(storedUserList.value)
    const location = useLocation()
    const navigate = useNavigate();
    const [jellyDetails, setJellyDetails]= useState(storedJellyList.value[storedJellyId.value]);
    const [ratingValue, setRatingValue] = useState(storedCurrentUser.value.jellies[storedJellyId.value].rating ?? 0);
    const [commentValue, setCommentValue ] = useState(storedCurrentUser.value.jellies[storedJellyId.value].comments ?? "" );


    const onCommentChange = (e) => {
        setCommentValue(e.target.value)
    }
    const onRatingChange = (e) => {
        setRatingValue(e.target.value/10)
    }

    const onSubmit = () => {
        jellyDetails.rating = ratingValue;
        jellyDetails.comments = commentValue;
        setJellyDetails({...jellyDetails})
        editRatings(currentUser, jellyDetails);
        storedJellyList.value = jellyDetails
        navigate("/jellylist")
    }
    // useEffect(() => {
    //     storedCurrentUser.value = currentUser;
    //     storedUserList.value = userList;
    //     storedUserId.value = userId;
    //     storedJellyId.value = jellyId;
    //     storedJellyList.value = jellyList;
    // }, [currentUser, userList, jellyId, jellyList]);

        return (
            <Container >
                <SpeedDial/>
                <div>
                    <Row>
                        <Col>
                            <h2 className="subtitle">{jellyDetails.name} </h2>
                        </Col>
                    </Row>
                    <Container className='mt-5'>
                        <Form>
                            <Form.Label>Rating: {ratingValue}</Form.Label>
                            <Form.Range
                                value={ratingValue*10}
                                onChange={onRatingChange}
                                step={10}
                            />
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Comments"
                                className="m-3"
                            >
                                <Form.Control
                                    as="textarea"
                                    rows={5}
                                    placeholder=""
                                    value={commentValue}
                                    style={{height: '200px'}}
                                    name="Comments"
                                    onChange={onCommentChange}

                                />
                            </FloatingLabel>
                            <Button  variant="primary" onClick={onSubmit}>
                                Submit
                            </Button>
                        </Form>
                    </Container>
                </div>
            </Container>
        )

};
export default Jellies;
