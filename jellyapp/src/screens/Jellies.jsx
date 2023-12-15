import React, { useState} from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Row, Col} from "react-bootstrap";
import {useLocation, useNavigate} from "react-router-dom";
import {editRatings} from "../shared/utilities";
import SpeedDial from '../components/SpeedDial'
import {Container, } from "@mui/material";
import {currentUser, jellyId, signalJellyList} from "../store/signalsStore";
const user = currentUser.value
const Jellies = () => {
    const navigate = useNavigate();
    const [jellyDetails, setJellyDetails]= useState(signalJellyList.value[jellyId.value]);
    console.log(user)
    const [ratingValue, setRatingValue] = useState(user.jellies[jellyId.value -1].rating ?? 0);
    const [commentValue, setCommentValue ] = useState(user.jellies[jellyId.value -1].comment ?? "" );

    const onCommentChange = (e) => {
            setCommentValue(e.target.value)
    }
    const onRatingChange = (e) => {
        setRatingValue(e.target.value)
    }

    const onSubmit = () => {
    jellyDetails.rating = ratingValue;
    jellyDetails.comments = commentValue;
    setJellyDetails({...jellyDetails})
            editRatings(user, jellyDetails);
        navigate("/jellylist")
    }


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
                    <Form.Label>Rating: {ratingValue/10}</Form.Label>
                    <Form.Range
                        value={ratingValue}
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