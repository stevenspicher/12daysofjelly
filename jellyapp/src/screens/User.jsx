import React, {useEffect, useState} from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Row, Col} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import { editUser} from "../shared/utilities";
import SpeedDial from "../components/SpeedDial"
import {Container, Grow, Paper, Stack} from "@mui/material";
import {userEdit, storedUserList} from "../store/signalsStore";


const User = () => {
    const id = JSON.parse(localStorage.getItem("id"))
    const navigate = useNavigate();
    const [editUserDetails, setEditUserDetails] = useState();

    const onChange = (e) => {
        const name = e.target.name
        editUserDetails[name] = e.target.value
        setEditUserDetails({...editUserDetails})
    }

    const onSubmit = () => {
        editUser(editUserDetails);
        navigate("/table")
    }
;

    useEffect(() => {
          setEditUserDetails(storedUserList.value[id]);
    }, [storedUserList.value]);

    return (
        <Container>
          <SpeedDial/>
                <h2 className="subtitle">{editUserDetails.name}'s Info</h2>
            <Container >
                <Form>
                    <Row>
                        <Col>
                    <FloatingLabel
                        controlId="floatingTextarea1"
                        label="Favorite Color"
                        className="mb-3"
                    >
                        <Form.Control
                            as="textarea"
                            disabled={!userEdit.value}
                            placeholder="Favorite Colors?"
                            name="favColor"
                            onChange={onChange}
                            value={editUserDetails.favColor}
                        />
                    </FloatingLabel>

                        </Col>
                        <Col>
                    <FloatingLabel
                        controlId="floatingTextarea2"
                        label="Clothing Sizes?"
                        className="mb-3"
                    >
                        <Form.Control
                            as="textarea"
                            placeholder="Clothing Sizes?"
                            disabled={!userEdit.value}
                            onChange={onChange}
                            name="sizes"
                            value={editUserDetails.sizes}
                        />
                    </FloatingLabel>

                        </Col>
                    </Row>
<Row >

                    <FloatingLabel
                        controlId="floatingTextarea3"
                        label="Wish List"
                        className="mb-3">
                        <Form.Control
                            as="textarea"
                            rows={10}
                            placeholder="What would you like for Christmas?"
                            style={{height: '400px'}}
                            onChange={onChange}
                            name={"wishes"}
                            disabled={!userEdit.value}
                            value={editUserDetails.wishes}
                        />
                    </FloatingLabel>
</Row>
                    {!userEdit.value ? <Button variant="primary" onClick={onSubmit}>
                        Submit
                    </Button> : <></>}
                    <Button variant="secondary" onClick={(e) => {
                        navigate("/table")
                    }}>
                        Cancel
                    </Button>
                </Form>
            </Container>
        </Container>)
};

export default User;