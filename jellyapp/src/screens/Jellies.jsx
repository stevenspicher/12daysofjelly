import React, {useEffect, useState} from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Row, Col} from "react-bootstrap";
import {useLocation, useNavigate} from "react-router-dom";
import {editRatings} from "../shared/utilities";
import SpeedDial from '../components/SpeedDial'
import {Container,} from "@mui/material";
import {getUsers} from "../shared/utilities"
//state
import {computed, signal, useSignal} from "@preact/signals-react";
import {
    storedUserList,
    storedJellyList,

} from "../store/signalsStore";




const Jellies = () => {
    const id = JSON.parse(localStorage.getItem("id"))
    const jellyId = JSON.parse(localStorage.getItem("jellyid"))
    let jellyData = useSignal({rating: 0, comments: ""})
    if (storedUserList.value !== undefined) {
        jellyData.value = storedUserList.value[id].jellies[jellyId];
    }
    let rating = useSignal(jellyData.value.rating * 10);
    let comments = useSignal(jellyData.value.comments);
    // let jellyData = useSignal(storedJellyData.value)
    const location = useLocation()
    const navigate = useNavigate();


    const onCommentChange = (e) => {
        comments.value = (e.target.value)
    }
    const onRatingChange = (e) => {
        rating.value = (e.target.value)
    }

    const onSubmit = () => {
        jellyData.value.rating = Number(rating.value) / 10
        jellyData.value.comments = comments.value
        editRatings(storedUserList.value[id], jellyData.value);
        navigate("/chart")
    }
    useEffect(() => {
        getUsers();
    }, []);

    if (jellyData.value !== undefined)
        return (
            <Container>
                <SpeedDial/>
                <div>
                    <Row>
                        <Col>
                            <h2 className="subtitle">{storedJellyList.value[jellyId].name} </h2>
                        </Col>
                    </Row>
                    <Container className='mt-5'>
                        <Form>

                            <Form.Label>Rating: {rating.value / 10}</Form.Label>
                            <Form.Range
                                value={rating.value}
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
                                    value={comments.value}
                                    style={{height: '200px'}}
                                    name="Comments"
                                    onChange={onCommentChange}

                                />
                            </FloatingLabel>
                            <Button variant="primary" onClick={onSubmit}>
                                Submit
                            </Button>
                            <Button variant={"secondary"} onClick={() => navigate("/chart")}>Back</Button>
                        </Form>
                    </Container>
                </div>
            </Container>
        )

};
export default Jellies;
