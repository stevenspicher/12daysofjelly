import React, {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import {Row, Col, Table} from "react-bootstrap";
import {useLocation, useNavigate} from "react-router-dom";
import {Grid} from '@mui/material'
import {getConsole, getState, getUsers, editUser} from "../shared/utilities";
import {jellyList} from "../shared/containers";
import Header from "../components/Header"
import SpeedDial from "../components/SpeedDial"
import {Chart} from "react-google-charts";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Container, Grow, Paper, Stack} from "@mui/material";
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';

const RatingsChart = (props) => {
    console.log(props.state.userList)
    const navigate = useNavigate();
    const location = useLocation();
    const [tableUserList, setTableUserList] = useState(props.state.userList)
    const elevationHeight = 12;
    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }));
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const options = {
        legend: "none",
        is3D: true,
        fontSize: 15,
        bar: {groupWidth: "10%"},
    };
    const chartData = [
        ["Name", "Rating"]
    ];
    const cardData = [];
    const JellyData = (jellyName, userList, jellyIndex) => {
        props.state.userList.map((user, userIndex) => {
            if (user.jellies[jellyIndex].rating !== undefined) {
            chartData.push([user.name, user.jellies[jellyIndex].rating])
            }
            if (user.jellies[jellyIndex].comments !== undefined) {
            cardData.push([user.name, user.jellies[jellyIndex].comments])
            }
        })

            return (
                <Grow in={true} timeout={1000}>
                    <Paper elevation={elevationHeight} sx={{marginTop: "10px", border: '1px solid black'}}>
                        <Container>
                            <Card>

                                <CardHeader  title={jellyName}/>
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={jellyList[jellyIndex - 1].image}
                                    alt={jellyName}
                                    />

                            <Chart
                                chartType="BarChart"
                                width="100%"
                                height="100%"
                                data={chartData}
                                options={options}
                            />
                                <Divider/>
                                <Typography sx={{marginTop: "20px"}}>Comments</Typography>
                                <ExpandMore
                                    expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </ExpandMore>
                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                    <CardContent>

                            {cardData.map((user, index) => {
                                return (
                                    <Card key={index} sx={{minWidth: 275}}>
                                    <CardContent>
                                        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                            {user[0]}
                                        </Typography>
                                        <Typography variant="h5" component="div">
                                            {user[1]}
                                        </Typography>
                                    </CardContent>
                                </Card>
                                )
                            })}
                                    </CardContent>
                                </Collapse>
                            </Card>
                        </Container>
                    </Paper>
                </Grow>
            )
        }

    useEffect(() => {
        getUsers(props.state.setUserList)


    }, []);
    return (
        <Container>
            <SpeedDial/>
            {JellyData("Apricot-Banana", props.state.userList, 1)}
        </Container>

    )
};

export default RatingsChart;