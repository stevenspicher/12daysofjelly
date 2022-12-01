import logo from './logo.svg';
import './App.css';
import {Routes, Route, Navigate, Link} from 'react-router-dom';
import UserTable from "./screens/Table";
import User from "./screens/User";
import Login from "./screens/Login";
import {Container, Nav, Navbar} from "react-bootstrap";
import React from "react";

function App() {
  return (
      <Container fluid className="frame">
          {/*<Navbar bg="transparent">*/}
              {/*<Container className="top-nav">*/}
              {/*    <Nav.Link*/}
              {/*        as={Link}*/}
              {/*        key={"login"}*/}
              {/*        to={"/login"}*/}
              {/*    >*/}
              {/*        Login*/}
              {/*    </Nav.Link>*/}
              {/*    <Nav.Link*/}
              {/*        as={Link}*/}
              {/*        key={"table"}*/}
              {/*        to={"/table"}*/}
              {/*    >*/}
              {/*        Table*/}
              {/*    </Nav.Link>*/}
              {/*    <Nav.Link*/}
              {/*        as={Link}*/}
              {/*        key={"user"}*/}
              {/*        to={"/user"}*/}
              {/*    >*/}
              {/*        User*/}
              {/*    </Nav.Link>*/}

              {/*</Container>*/}
          {/*</Navbar>*/}
        <Routes>
          <Route path="/" element={<Navigate replace to="login"/>}/>
          <Route path="login" element={<Login/>}/>
            <Route path="user" element={<User/>}/>
            <Route path="table" element={<UserTable/>}/>
        </Routes>
      </Container>
  );
}

export default App;
