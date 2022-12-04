import React, {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import {Button, Card} from "react-bootstrap";
import {Link, useLocation, useNavigate} from 'react-router-dom';


const UserTable = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [canEdit, setCanEdit] = useState(false)

    useEffect(() => {
            props.getUsers()
            console.log(location.state.currentUserDetails)
            props.currentUserDetails.id = props.userList.find((user) => user.name === location.state.currentUserDetails.name).id;
            props.setCurrentUserDetails(props.currentUserDetails);
            localStorage.setItem('userId', JSON.stringify(props.currentUserDetails.id));
        if (location.state.id === props.currentUserDetails.id) {
            setCanEdit(true)
        } else {
            setCanEdit(false)
        }

    }, []);


    return (
        <>
            <Container className={"pt-5"}>
                <h1 className="title">12 Days of Spreads</h1>
                <h2 className="subtitle">Naughty or Nice?</h2>
                <Button variant="secondary" as={Link}
                        key={"login"}
                        to={"/login"}>
                    Logout
                </Button>
            </Container>

            <Container className='mt-5'>
            {props.userList.map((user) => {
                return (
                    <Card key={user.id} className="cards" onClick={() => {navigate("/user", {
                        state: {
                            currentUserDetails: {
                                id: user.id,
                                name: user.name,
                                password: user.password,
                                favColor: user.favColor,
                                sizes: user.sizes,
                                wishes: user.wishes,
                                niceness: user.niceness,
                            }, prevPath: location.pathname
                        }
                    })}}>
                        {user.name}

                    </Card>
                )
            })
            }
            </Container>
        </>
    )
};

export default UserTable;