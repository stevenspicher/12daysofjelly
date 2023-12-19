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
            {JellyChartData(4)}
            {JellyChartData(5)}
            {JellyChartData(6)}
            {JellyChartData(7)}
            {JellyChartData(8)}
            {JellyChartData(9)}
            {JellyChartData(10)}
            {JellyChartData(11)}
            {JellyChartData(12)}
        </Container>
    )
};

export default RatingsChart;