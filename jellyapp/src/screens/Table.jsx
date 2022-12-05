import React, {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import {Button, Card} from "react-bootstrap";
import {useLocation, useNavigate} from 'react-router-dom';
import {getConsole, getState, getUsers} from "../shared/utilities";


const UserTable = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [currentUserDetails, setCurrentUserDetails] = useState()



    useEffect(() => {
        getConsole(location, currentUserDetails)
        setCurrentUserDetails(location.state.currentUserDetails)
    }, []);

    useEffect(() => {
   if (location.state.prevPath === "/user") {
        getUsers(props.state.setUserList)
   }
    }, []);

    return (
        <>
            <Container className={"pt-5"}>
                <h1 className="title">12 Days of Spreads</h1>
                <h2 className="subtitle">Naughty or Nice?</h2>

            </Container>
            {props.state.userList[0] === undefined ? <></> :
                <Container className='mt-5'>
                    {props.state.userList.map((user, index) => {
                        return (
                            <Card key={index} className="cards"
                                  onClick={() => {
                                      getUsers(props.state.setUserList)
                                      navigate("/user", getState(location, currentUserDetails, location.state.id, user, index))
                                  }}
                            >
                                {user.name}
                            </Card>
                        )
                    })}
                </Container>
            }
            <Button className={"mt-5"} variant="secondary" onClick={() => {
                navigate("/login", getState(location, currentUserDetails, location.state.id))
            }}>
                Logout
            </Button>
        </>
    )
};

export default UserTable;