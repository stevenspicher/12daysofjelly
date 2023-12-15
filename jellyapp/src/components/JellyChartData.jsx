import React, {useState} from "react";
import {Button, Container, Grow, Paper} from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
// import {jellyList} from "../shared/containers";
import ResultsModal from "./Modals/ResultsModal";
import ExplanationModal from "./Modals/ResultsModal";
import {Chart} from "react-google-charts";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import {styled} from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {currentUser, openPromptModal, openResultModal, signalJellyList, userList} from "../store/signalsStore";


const ModalButtons = (jelly) => {
    return (

        <>
            <Button sx={{margin: "10px"}} variant="contained" onClick={() => openResultModal.value[jelly.id] = true}>CLick for results</Button>
            <Button sx={{margin: "10px"}} variant="outlined" onClick={() => openPromptModal.value[jelly.id] = true}>CLick for Explanation</Button>

            {/*<ResultsModal*/}
            {/*    jellyId = {jelly.id}*/}
            {/*/>*/}
            {/*<ExplanationModal*/}
            {/*    open={openPromptModal}*/}
            {/*    onClose={() => {openPromptModal.value[jelly.id] = false}}*/}
            {/*/>*/}
        </>
    )
};



const JellyChartData = (jellyIndex) => {
    console.log(currentUser.value)
const jelly = signalJellyList.value[jellyIndex]

    const elevationHeight = 12;
    const chartData = [["Name", "Rating"]]
    const cardData = [];

    const options = {
        legend: "none",
        is3D: true,
        fontSize: 10,
        bar: {groupWidth: "30%"},
    };

    userList.value.map((user) => {
        const jellyRatings = {};
        let rating, comment, wishes;
        rating = user.jellies[jellyIndex+1].rating ?? undefined;
        comment = user.jellies[jellyIndex+1].comments ?? undefined;
        wishes = user.wishes ?? undefined;

        chartData.push([user.name, user.jellies[jellyIndex+1].rating])
        if (user.jellies[jellyIndex+1].comments !== undefined) {
            cardData.push([user.name, comment])
        }
        jellyRatings[user.name] = {comment: comment, rating: rating, wishes: wishes}
    })

    const ExpandMore = styled((props) => {
        const {expand, ...other} = props;
        return <IconButton {...other} />;
    })(({theme, expand}) => ({
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

    return (
        <Grow in={true} timeout={1000}>
            <Paper elevation={elevationHeight} sx={{marginTop: "10px", border: '1px solid black'}}>
                <Container>

                    <Card>
                        <CardHeader title={jelly.name}/>
                        <CardMedia
                            component="img"
                            height="194"
                            image={jelly.image}
                            alt={jelly.name}

                        />

                        <ModalButtons jelly={jelly}/>

                        <Chart
                            chartType="BarChart"
                            width="100%"
                            height="400px"
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
                            <ExpandMoreIcon/>
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

export default JellyChartData;