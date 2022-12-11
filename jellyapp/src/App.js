import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import UserTable from "./screens/Table";
import User from "./screens/User";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import {Container} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import InvalidLogin from "./screens/InvalidLogin";
import {getUsers, editUser} from "./shared/utilities";
import {emptyUserDetails} from "./shared/containers";
import JellyList from "./screens/JellyList";
import Jellies from "./screens/Jellies";
import Images from "./screens/images";
import FirstRatings from "./screens/pre-ratings";

function App() {
    const [userList, setUserList] = useState([undefined]);
    const [currentUserDetails, setCurrentUserDetails] = useState(emptyUserDetails)
    const statePackage = {
        userList: userList,
        setUserList: setUserList,
        currentUserDetails: currentUserDetails,
        setCurrentUserDetails: setCurrentUserDetails
    }

    useEffect(() => {
        getUsers(setUserList);
    }, [currentUserDetails]);

    return (
        <Container fluid className="frame">
            <Routes>
                <Route path="/" element={<Navigate replace to="login"/>}/>
                <Route path="login" element={<Login state={statePackage}/>}/>
                <Route path="invalid" element={<InvalidLogin state={statePackage}/>}/>
                <Route path="signup" element={<SignUp state={statePackage}/>}/>
                <Route path="user" element={<User state={statePackage}/>}/>
                <Route path="table" element={<UserTable state={statePackage}/>}/>
                <Route path="jellies" element={<JellyList state={statePackage}/>}/>
                <Route path="jelly" element={<Jellies state={statePackage}/>}/>
                <Route path="images" element={<Images state={statePackage}/>}/>
                <Route path="firstratings" element={<FirstRatings state={statePackage}/>}/>
            </Routes>
        </Container>
    );
}

export default App;
