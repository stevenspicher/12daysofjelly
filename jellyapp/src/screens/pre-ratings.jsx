import React, {useEffect, useState} from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Container, Row, Col, Card, Badge} from "react-bootstrap";
import {useLocation, useNavigate} from "react-router-dom";
import {getConsole, getState, getUsers, editUser} from "../shared/utilities";
import {jellyList} from "../shared/containers";
import {imageList} from "../shared/containers";


const FirstRatings = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [editUserDetails, setEditUserDetails] = useState(location.state.currentUserDetails);


    const onChange = (e, id) => {
        const question = e.target.name
        switch (question) {
            case 'most liked' :
                editUserDetails.mostLiked = id;
                break;
            case 'least liked' :
                editUserDetails.leastLiked = id;
                break;
            case 'most controversial' :
                editUserDetails.mostControversial = id;
                break;
            default: console.log("none chosen")

        }
        setEditUserDetails({...editUserDetails})
    }

    const onSubmit = () => {
        console.log(editUserDetails)
        //     editUser(editUserDetails, props.state, location.state.id)
        // props.state.setCurrentUserDetails(editUserDetails)
        // navigate("/jellies", getState(location, editUserDetails, location.state.id))
    }

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
                <h2 className="title-signup">Choose before your first Rating!</h2>
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
                         <Container className='mt-5'>
                           <Form >
                           {jellyList.map((jelly, index) => {
                               return (
                                   <div key={index} >
                                       <h3 className="subtitle-signup">{jelly.name}</h3>
                                       {['most liked', 'least liked', 'most controversial'].map((type) => (
                                           <div key={`inline-${type}`} className="mb-3">
                                               <Form.Check
                                                   inline
                                                   name={type}
                                                   type={'checkbox'}
                                                   id={jelly.id}
                                                   label={type}
                                                   onChange={(e) => {onChange(e, jelly.id)}}
                                               />
                                            </div>
                                        ))}
                                    </div>
                                )
                            })}
                                        <Button className={"mb-5"} variant="primary" onClick={onSubmit}>
                                            Submit
                                        </Button>
                            </Form>
                        </Container>
            </Container>
        </div>
        )
};

export default FirstRatings;