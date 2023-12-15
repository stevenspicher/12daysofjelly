import React, {useEffect, useState} from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Header from "../components/Header"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Row, Col} from "react-bootstrap";
import {useLocation, useNavigate} from "react-router-dom";
import {getConsole, getState, editRatings} from "../shared/utilities";
import SpeedDial from '../components/SpeedDial'
import {Container, Grow, Paper, Stack} from "@mui/material";

const Jellies = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [ value, setValue ] = useState(50);
    const [ commentValue, setCommentValue ] = useState("");
    const [jellyDetails, setJellyDetails]= useState(location.state.user);
    console.log(location.state)

    const onChange = (e) => {
        setCommentValue(e.target.value)
        jellyDetails.comments = e.target.value;
        setJellyDetails({...jellyDetails})
    }

    const onSubmit = () => {
    jellyDetails.rating = value/10;
    jellyDetails.rated = true;
            editRatings(location.state.currentUserDetails, jellyDetails, props.state, location.state.id);
        navigate("/jellies", getState(location, location.state.currentUserDetails, location.state.id))
    }

    useEffect(() => {
        setJellyDetails(location.state.currentUserDetails.jellies[jellyDetails.id])
    setValue(location.state.currentUserDetails.jellies[jellyDetails.id].rating*10)
    setCommentValue(location.state.currentUserDetails.jellies[jellyDetails.id].comments)
    }, []);

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
                    <Form.Label>Rating: {value/10}</Form.Label>
                    <Form.Range
                        value={value}
                        onChange={e => setValue(e.target.value)}
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
                            onChange={onChange}

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