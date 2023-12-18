import React from "react";
import SpeedDial from "../components/SpeedDial"
import JellyChartData from "../components/JellyChartData";


import {Container} from "@mui/material";

const RatingsChart = () => {

    return (
        <Container>
            <SpeedDial/>
            {JellyChartData(0)}
            {JellyChartData(1)}
        </Container>
    )
};

export default RatingsChart;