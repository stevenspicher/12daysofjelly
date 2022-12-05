import React, {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import {Button, Card} from "react-bootstrap";
import {useLocation, useNavigate} from 'react-router-dom';
import {getConsole, getState, getUsers} from "../shared/utilities";


const UserTable = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [id, setId] = useState(undefined);
    const [userList, setUserList] = useState([undefined]);
    const [currentUserDetails, setCurrentUserDetails] = useState()



    useEffect(() => {
        getUsers(setUserList);
        getConsole(location, currentUserDetails)
        setCurrentUserDetails(location.state.currentUserDetails)
        setId(location.state.id)

    }, []);

    useEffect(() => {
   if (location.state.prevPath === "/signup") {

       // setId(userList.find((user) => user.name === location.state.currentUserDetails.id).id)
   }
    }, []);

    return (
        <>
            <Container className={"pt-5"}>
                <h1 className="title">12 Days of Spreads</h1>
                <h2 className="subtitle">Naughty or Nice?</h2>

            </Container>
            {userList[0] === undefined ? <></> :
                <Container className='mt-5'>
                    {userList.map((user, index) => {
                        return (
                            <Card key={index} className="cards"
                                  onClick={() => {
                                      getUsers(setUserList)
                                      navigate("/user", getState(location, userList, user, location.state.id, user))
                                  }}
                            >
                                {user.name}
                            </Card>
                        )
                    })}
                </Container>
            }
            <Button className={"mt-5"} variant="secondary" onClick={() => {
                navigate("/login", getState(location, userList, currentUserDetails, id))
            }}>
                Logout
            </Button>
        </>
    )
};

export default UserTable;