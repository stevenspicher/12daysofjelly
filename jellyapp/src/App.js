import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import UserTable from "./screens/Table";
import User from "./screens/User";
import Login from "./screens/Login";
import {Container} from "react-bootstrap";
import React, {useEffect} from "react";
import InvalidLogin from "./screens/InvalidLogin";
import JellyList from "./screens/JellyList";
import Jellies from "./screens/Jellies";
import RatingsChart from "./screens/RatingsChart";
import {getUsers} from "./shared/utilities";


function App() {

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <Container fluid className="frame">
            <Routes>
                <Route path="/" element={<Navigate replace to="login"/>}/>
                <Route path="login" element={<Login />}/>
                <Route path="invalid" element={<InvalidLogin />}/>
                <Route path="user" element={<User />}/>
                <Route path="table" element={<UserTable />}/>
                <Route path="jellylist" element={<JellyList />}/>
                <Route path="jelly" element={<Jellies />}/>
                <Route path="chart" element={<RatingsChart />}/>
            </Routes>
        </Container>
    );
}

export default App;
