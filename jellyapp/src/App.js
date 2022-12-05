import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import UserTable from "./screens/Table";
import User from "./screens/User";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import {Container} from "react-bootstrap";
import React from "react";
import InvalidLogin from "./screens/InvalidLogin";

function App() {

    return (
        <Container fluid className="frame">
            <Routes>
                <Route path="/" element={<Navigate replace to="login"/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="invalid" element={<InvalidLogin/>}/>
                <Route path="signup" element={<SignUp/>}/>
                <Route path="user" element={<User/>}/>
                <Route path="table" element={<UserTable/>}/>
            </Routes>
        </Container>
    );
}

export default App;
