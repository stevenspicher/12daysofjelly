import React, {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import {Container, Row, Col, Table} from "react-bootstrap";
import {useLocation, useNavigate} from "react-router-dom";
import {getConsole, getState, getUsers, editUser} from "../shared/utilities";
import {jellyList} from "../shared/containers";

const RatingsChart = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [tableUserList, setTableUserList] = useState(props.state.userList)


    const apricotTable =
        props.state.userList.map((user, userIndex) => {
            const index = 1
            return (
                <tr key={userIndex}>
                    <td>{user.name}</td>
                    <td>{user.jellies[index].rating}</td>
                    <td>{user.jellies[index].deliveryMethod}</td>
                </tr>
                )
            })

    const cherriesTable =
        props.state.userList.map((user, userIndex) => {
            const index = 2
            return (
                <tr key={userIndex}>
                    <td>{user.name}</td>
                    <td>{user.jellies[index].rating}</td>
                    <td>{user.jellies[index].deliveryMethod}</td>
                </tr>
            )
        })

    const yuzuTable =
        props.state.userList.map((user, userIndex) => {
            const index = 9
            return (
                <tr key={userIndex}>
                    <td>{user.name}</td>
                    <td>{user.jellies[index].rating}</td>
                    <td>{user.jellies[index].deliveryMethod}</td>
                </tr>
            )
        })

    const plumTable =
        props.state.userList.map((user, userIndex) => {
            const index = 8
            return (
                <tr   key={userIndex}>
                    <td>{user.name}</td>
                    <td>{user.jellies[index].rating}</td>
                    <td>{user.jellies[index].deliveryMethod}</td>
                </tr>
            )
        })

    const honeyTable =
        props.state.userList.map((user, userIndex) => {
            const index = 6
            return (
                <tr   key={userIndex}>
                    <td>{user.name}</td>
                    <td>{user.jellies[index].rating}</td>
                    <td>{user.jellies[index].deliveryMethod}</td>
                </tr>
            )
        })

    const figTable =
        props.state.userList.map((user, userIndex) => {
            const index = 4
            return (
                <tr   key={userIndex}>
                    <td>{user.name}</td>
                    <td>{user.jellies[index].rating}</td>
                    <td>{user.jellies[index].deliveryMethod}</td>
                </tr>
            )
        })

    const rhubarbTable =
        props.state.userList.map((user, userIndex) => {
            const index = 11
            return (
                <tr   key={userIndex}>
                    <td>{user.name}</td>
                    <td>{user.jellies[index].rating}</td>
                    <td>{user.jellies[index].deliveryMethod}</td>
                </tr>
            )
        })

    const dragonFruitTable =
        props.state.userList.map((user, userIndex) => {
            const index = 5
            return (
                <tr   key={userIndex}>
                    <td>{user.name}</td>
                    <td>{user.jellies[index].rating}</td>
                    <td>{user.jellies[index].deliveryMethod}</td>
                </tr>
            )
        })

    const chestnutTable =
        props.state.userList.map((user, userIndex) => {
            const index = 3
            return (
                <tr   key={userIndex}>
                    <td>{user.name}</td>
                    <td>{user.jellies[index].rating}</td>
                    <td>{user.jellies[index].deliveryMethod}</td>
                </tr>
            )
        })

    const mangoTable =
        props.state.userList.map((user, userIndex) => {
            const index = 7
            return (
                <tr   key={userIndex}>
                    <td>{user.name}</td>
                    <td>{user.jellies[index].rating}</td>
                    <td>{user.jellies[index].deliveryMethod}</td>
                </tr>
            )
        })

    const aniseTable =
        props.state.userList.map((user, userIndex) => {
            const index = 12
            console.log(user.jellies[index])
            return (
                <tr   key={userIndex}>
                    <td>{user.name}</td>
                    <td>{user.jellies[index].rating}</td>
                    <td>{user.jellies[index].deliveryMethod}</td>
                </tr>
            )
        })

    const peachTable =
        props.state.userList.map((user, userIndex) => {
            const index = 10
            return (
                <tr   key={userIndex}>
                    <td>{user.name}</td>
                    <td>{user.jellies[index].rating}</td>
                    <td>{user.jellies[index].deliveryMethod}</td>
                </tr>
            )
        })

    useEffect(() => {
        getUsers(props.state.setUserList)


    }, []);
    return (
        <div>
            <Container className={"pt-4"}>
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
                        <Button variant="secondary" onClick={() => {
                            navigate("/login", getState(location, location.state.currentUserDetails, location.state.id))
                        }}>
                            Logout
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="secondary" onClick={() => {
                            navigate("/table", getState(location, location.state.currentUserDetails, location.state.id))
                        }}>
                            Family
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="secondary" onClick={() => {
                            navigate("/jellies", getState(location, location.state.currentUserDetails, location.state.id))
                        }}>
                            Jellies
                        </Button>
                    </Col>
                    <Row className={"mt-5"}>
                        <Col>
                            <h2 className="subtitle">Current Ratings </h2>
                        </Col>
                    </Row>
                </Row>
            </Container>
            <Container className={"mt-5"}>
                <Table  size="sm">
                    <thead>
                    <tr>
                        <th className="title-signup" colSpan={3}>Apricots and Peaches</th>
                    </tr>
                    </thead>
                    <tbody>
                    {apricotTable}
                    </tbody>
                </Table>
                <Table size="sm">
                    <thead>
                    <tr>
                        <th className="title-signup" colSpan={3}>Cherries and ElderFlower</th>
                    </tr>
                    </thead>
                    <tbody>
                    {cherriesTable}
                    </tbody>
                </Table>
                <Table size="sm">
                    <thead>
                    <tr>
                        <th className="title-signup" colSpan={3}>Orange, Yuzu, and Grapefruit </th>
                    </tr>
                    </thead>
                    <tbody>
                    {yuzuTable}
                    </tbody>
                </Table>
                <Table size="sm">
                    <thead>
                    <tr>
                        <th className="title-signup" colSpan={3}>Mirabelle Plum with Spice </th>
                    </tr>
                    </thead>
                    <tbody>
                    {plumTable}
                    </tbody>
                </Table>
                <Table size="sm">
                    <thead>
                    <tr>
                        <th className="title-signup" colSpan={6}>Honey </th>
                    </tr>
                    </thead>
                    <tbody>
                    {honeyTable}
                    </tbody>
                </Table>
                <Table size="sm">
                    <thead>
                    <tr>
                        <th className="title-signup" colSpan={4}>Fig with Cardamom </th>
                    </tr>
                    </thead>
                    <tbody>
                    {figTable}
                    </tbody>
                </Table>
                <Table size="sm">
                    <thead>
                    <tr>
                        <th className="title-signup" colSpan={4}>Rhubarb and Strawberry </th>
                    </tr>
                    </thead>
                    <tbody>
                    {rhubarbTable}
                    </tbody>
                </Table>
                <Table size="sm">
                    <thead>
                    <tr>
                        <th className="title-signup" colSpan={4}>Grapefruit and Dragonfruit </th>
                    </tr>
                    </thead>
                    <tbody>{dragonFruitTable}
                    </tbody>
                </Table>
                <Table size="sm">
                    <thead>
                    <tr>
                        <th className="title-signup" colSpan={4}>Chestnut with Orange and Spice  </th>
                    </tr>
                    </thead>
                    <tbody>{chestnutTable}
                    </tbody>
                </Table>
                <Table size="sm">
                    <thead>
                    <tr>
                        <th className="title-signup" colSpan={4}>Mango, Raspberry, and Lime  </th>
                    </tr>
                    </thead>
                    <tbody>{mangoTable}
                    </tbody>
                </Table>
                <Table size="sm">
                    <thead>
                    <tr>
                        <th className="title-signup" colSpan={4}>Strawberry with Star Anise  </th>
                    </tr>
                    </thead>
                    <tbody>{aniseTable}
                    </tbody>
                </Table>
                <Table size="sm">
                    <thead>
                    <tr>
                        <th className="title-signup" colSpan={4}>Peach with Jasmine </th>
                    </tr>
                    </thead>
                    <tbody>{peachTable}
                    </tbody>
                </Table>
            </Container>


        </div>)
};

export default RatingsChart;