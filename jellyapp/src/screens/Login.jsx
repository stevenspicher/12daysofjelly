import React, { useEffect} from "react";
import { Row, Col} from "react-bootstrap";

import {useNavigate} from "react-router-dom";
import { blink, getUsers} from "../shared/utilities";
import {Container, FormControl, Input, InputLabel, FormHelperText, Box, Stack, Button} from "@mui/material";

//state
import {computed, signal} from "@preact/signals-react";
import {storedUserList} from "../store/signalsStore";
let userList;

const Login = () => {
    const login = signal("")
    const navigate = useNavigate();
    const onChange = (e) => {login.value = e.target.value.toLowerCase()}

    const onSubmit = async () => {
        if (userList !== undefined)
            if (userList.find((user) => user.name === login.value)) {
                    localStorage.setItem("id", userList.map( e => e.name).indexOf(login.value))
                navigate("/chart")
                } else {
                navigate("/invalid")
                }
            }

    useEffect(() => {
        blink();
        getUsers();
    }, []);


    useEffect(() =>{
       userList = storedUserList.value;
    }, [storedUserList.value]);

    return (
        <>
            <Container>
                <Stack direction={"row"}>
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
                        <p style={{color: "blue", fontSize:"10px"}}>v2</p>

                </Stack>
                <Row>
                    <Col>
                        <h2 className="subtitle">Welcome!</h2>
                    </Col>
                </Row>

            </Container>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1 },
                }}
                className={"mt-5"}
                onSubmit={onSubmit}
                noValidate
                autoComplete="off"
            >


                        <FormControl >
                            <InputLabel htmlFor="my-input">username</InputLabel>
                            <Input id="my-input" aria-describedby="my-helper-text" onChange={onChange}/>
                            <FormHelperText id="my-helper-text">enter your name</FormHelperText>
                        </FormControl>
<Button onClick={onSubmit}>Login</Button>
            </Box>
          
        </>
    )
};

export default Login;

