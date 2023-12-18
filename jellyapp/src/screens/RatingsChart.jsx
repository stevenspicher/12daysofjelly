import React, {useEffect} from "react";
import SpeedDial from "../components/SpeedDial"
import JellyChartData from "../components/JellyChartData";
import {getUsers} from "../shared/utilities"


import {Container} from "@mui/material";

const RatingsChart = () => {
    useEffect(() => {
        getUsers();
    }, []);


    return (
        <Container>
            <SpeedDial/>
            {JellyChartData(0)}
            {JellyChartData(1)}
            {JellyChartData(2)}
            {JellyChartData(3)}
        </Container>
    )
};

export default RatingsChart;