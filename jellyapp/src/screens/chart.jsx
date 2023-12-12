import React, {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import {Container, Row, Col, Table} from "react-bootstrap";
import {useLocation, useNavigate} from "react-router-dom";
import {Grid} from '@mui/material'
import {getConsole, getState, getUsers, editUser} from "../shared/utilities";
import {jellyList} from "../shared/containers";
import Header from "../components/Header"
import SpeedDial from "../components/SpeedDial"

const RatingsChart = (props) => {
    console.log(props)
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
                    <td>{user.jellies[index].comments}</td>
                </tr>
                )
            })

    // const cherriesTable =
    //     props.state.userList.map((user, userIndex) => {
    //         const index = 2
    //         return (
    //             <tr key={userIndex}>
    //                 <td>{user.name}</td>
    //                 <td>{user.jellies[index].rating}</td>
    //                 <td>{user.jellies[index].deliveryMethod}</td>
    //             </tr>
    //         )
    //     })
    //
    // const yuzuTable =
    //     props.state.userList.map((user, userIndex) => {
    //         const index = 9
    //         return (
    //             <tr key={userIndex}>
    //                 <td>{user.name}</td>
    //                 <td>{user.jellies[index].rating}</td>
    //                 <td>{user.jellies[index].deliveryMethod}</td>
    //             </tr>
    //         )
    //     })
    //
    // const plumTable =
    //     props.state.userList.map((user, userIndex) => {
    //         const index = 8
    //         return (
    //             <tr   key={userIndex}>
    //                 <td>{user.name}</td>
    //                 <td>{user.jellies[index].rating}</td>
    //                 <td>{user.jellies[index].deliveryMethod}</td>
    //             </tr>
    //         )
    //     })
    //
    // const honeyTable =
    //     props.state.userList.map((user, userIndex) => {
    //         const index = 6
    //         return (
    //             <tr   key={userIndex}>
    //                 <td>{user.name}</td>
    //                 <td>{user.jellies[index].rating}</td>
    //                 <td>{user.jellies[index].deliveryMethod}</td>
    //             </tr>
    //         )
    //     })
    //
    // const figTable =
    //     props.state.userList.map((user, userIndex) => {
    //         const index = 4
    //         return (
    //             <tr   key={userIndex}>
    //                 <td>{user.name}</td>
    //                 <td>{user.jellies[index].rating}</td>
    //                 <td>{user.jellies[index].deliveryMethod}</td>
    //             </tr>
    //         )
    //     })
    //
    // const rhubarbTable =
    //     props.state.userList.map((user, userIndex) => {
    //         const index = 11
    //         return (
    //             <tr   key={userIndex}>
    //                 <td>{user.name}</td>
    //                 <td>{user.jellies[index].rating}</td>
    //                 <td>{user.jellies[index].deliveryMethod}</td>
    //             </tr>
    //         )
    //     })
    //
    // const dragonFruitTable =
    //     props.state.userList.map((user, userIndex) => {
    //         const index = 5
    //         return (
    //             <tr   key={userIndex}>
    //                 <td>{user.name}</td>
    //                 <td>{user.jellies[index].rating}</td>
    //                 <td>{user.jellies[index].deliveryMethod}</td>
    //             </tr>
    //         )
    //     })
    //
    // const chestnutTable =
    //     props.state.userList.map((user, userIndex) => {
    //         const index = 3
    //         return (
    //             <tr   key={userIndex}>
    //                 <td>{user.name}</td>
    //                 <td>{user.jellies[index].rating}</td>
    //                 <td>{user.jellies[index].deliveryMethod}</td>
    //             </tr>
    //         )
    //     })
    //
    // const mangoTable =
    //     props.state.userList.map((user, userIndex) => {
    //         const index = 7
    //         return (
    //             <tr   key={userIndex}>
    //                 <td>{user.name}</td>
    //                 <td>{user.jellies[index].rating}</td>
    //                 <td>{user.jellies[index].deliveryMethod}</td>
    //             </tr>
    //         )
    //     })
    //
    // const aniseTable =
    //     props.state.userList.map((user, userIndex) => {
    //         const index = 12
    //         console.log(user.jellies[index])
    //         return (
    //             <tr   key={userIndex}>
    //                 <td>{user.name}</td>
    //                 <td>{user.jellies[index].rating}</td>
    //                 <td>{user.jellies[index].deliveryMethod}</td>
    //             </tr>
    //         )
    //     })
    //
    // const peachTable =
    //     props.state.userList.map((user, userIndex) => {
    //         const index = 10
    //         return (
    //             <tr   key={userIndex}>
    //                 <td>{user.name}</td>
    //                 <td>{user.jellies[index].rating}</td>
    //                 <td>{user.jellies[index].deliveryMethod}</td>
    //             </tr>
    //         )
    //     })

    useEffect(() => {
        getUsers(props.state.setUserList)


    }, []);
    return (
            <Container>
                <SpeedDial/>
                <Table  size="sm">
                    <thead>
                    <tr>
                        <th className="title-signup" colSpan={3}>
                    <Grid alignContent='flex-start' alignItems='flex-start' justify='flex-start'>
                    <img
                        style={{
                            height: "100px",
                            width: "100px"
                        }}
                        src={jellyList[0].image}/>
                    </Grid>
                            Apricot and Banana
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {apricotTable}
                    </tbody>
                </Table>
                {/*<Table size="sm">*/}
                {/*    <thead>*/}
                {/*    <tr>*/}
                {/*        <th className="title-signup" colSpan={3}>Cherries and ElderFlower</th>*/}
                {/*    </tr>*/}
                {/*    </thead>*/}
                {/*    <tbody>*/}
                {/*    {cherriesTable}*/}
                {/*    </tbody>*/}
                {/*</Table>*/}
                {/*<Table size="sm">*/}
                {/*    <thead>*/}
                {/*    <tr>*/}
                {/*        <th className="title-signup" colSpan={3}>Orange, Yuzu, and Grapefruit </th>*/}
                {/*    </tr>*/}
                {/*    </thead>*/}
                {/*    <tbody>*/}
                {/*    {yuzuTable}*/}
                {/*    </tbody>*/}
                {/*</Table>*/}
                {/*<Table size="sm">*/}
                {/*    <thead>*/}
                {/*    <tr>*/}
                {/*        <th className="title-signup" colSpan={3}>Mirabelle Plum with Spice </th>*/}
                {/*    </tr>*/}
                {/*    </thead>*/}
                {/*    <tbody>*/}
                {/*    {plumTable}*/}
                {/*    </tbody>*/}
                {/*</Table>*/}
                {/*<Table size="sm">*/}
                {/*    <thead>*/}
                {/*    <tr>*/}
                {/*        <th className="title-signup" colSpan={6}>Honey </th>*/}
                {/*    </tr>*/}
                {/*    </thead>*/}
                {/*    <tbody>*/}
                {/*    {honeyTable}*/}
                {/*    </tbody>*/}
                {/*</Table>*/}
                {/*<Table size="sm">*/}
                {/*    <thead>*/}
                {/*    <tr>*/}
                {/*        <th className="title-signup" colSpan={4}>Fig with Cardamom </th>*/}
                {/*    </tr>*/}
                {/*    </thead>*/}
                {/*    <tbody>*/}
                {/*    {figTable}*/}
                {/*    </tbody>*/}
                {/*</Table>*/}
                {/*<Table size="sm">*/}
                {/*    <thead>*/}
                {/*    <tr>*/}
                {/*        <th className="title-signup" colSpan={4}>Rhubarb and Strawberry </th>*/}
                {/*    </tr>*/}
                {/*    </thead>*/}
                {/*    <tbody>*/}
                {/*    {rhubarbTable}*/}
                {/*    </tbody>*/}
                {/*</Table>*/}
                {/*<Table size="sm">*/}
                {/*    <thead>*/}
                {/*    <tr>*/}
                {/*        <th className="title-signup" colSpan={4}>Grapefruit and Dragonfruit </th>*/}
                {/*    </tr>*/}
                {/*    </thead>*/}
                {/*    <tbody>{dragonFruitTable}*/}
                {/*    </tbody>*/}
                {/*</Table>*/}
                {/*<Table size="sm">*/}
                {/*    <thead>*/}
                {/*    <tr>*/}
                {/*        <th className="title-signup" colSpan={4}>Chestnut with Orange and Spice  </th>*/}
                {/*    </tr>*/}
                {/*    </thead>*/}
                {/*    <tbody>{chestnutTable}*/}
                {/*    </tbody>*/}
                {/*</Table>*/}
                {/*<Table size="sm">*/}
                {/*    <thead>*/}
                {/*    <tr>*/}
                {/*        <th className="title-signup" colSpan={4}>Mango, Raspberry, and Lime  </th>*/}
                {/*    </tr>*/}
                {/*    </thead>*/}
                {/*    <tbody>{mangoTable}*/}
                {/*    </tbody>*/}
                {/*</Table>*/}
                {/*<Table size="sm">*/}
                {/*    <thead>*/}
                {/*    <tr>*/}
                {/*        <th className="title-signup" colSpan={4}>Strawberry with Star Anise  </th>*/}
                {/*    </tr>*/}
                {/*    </thead>*/}
                {/*    <tbody>{aniseTable}*/}
                {/*    </tbody>*/}
                {/*</Table>*/}
                {/*<Table size="sm">*/}
                {/*    <thead>*/}
                {/*    <tr>*/}
                {/*        <th className="title-signup" colSpan={4}>Peach with Jasmine </th>*/}
                {/*    </tr>*/}
                {/*    </thead>*/}
                {/*    <tbody>{peachTable}*/}
                {/*    </tbody>*/}
                {/*</Table>*/}
            </Container>


        )
};

export default RatingsChart;