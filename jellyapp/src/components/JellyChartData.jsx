import React, {useEffect, useState} from "react";
import {Button, Container, Grow, Paper} from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
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

//state
import {computed, signal, useSignal} from "@preact/signals-react";
import {
    openPromptModal,
    openResultModal,
    storedJellyList,
    storedUserList,
} from "../store/signalsStore";

let userList,
    jellyList;


const JellyChartData = (jellyId) => {
const id = JSON.parse(localStorage.getItem("id"))

    const jelly = storedJellyList.value[jellyId + 1] ?? {};

    const elevationHeight = 12;
    const chartData = [["Name", "Rating"]]
    const cardData = [];

    const options = {
        legend: "none",
        is3D: true,
        fontSize: 10,
        bar: {groupWidth: "30%"},
    };
    if (storedUserList.value !== undefined) {
        storedUserList.value.map((user) => {

            const jellyRatings = {};
            let rating, comment, wishes;
            // rating = 1;
            rating = user.jellies[jellyId + 1]=== undefined ? undefined : user.jellies[jellyId + 1].rating;
            comment = user.jellies[jellyId + 1]=== undefined ? undefined : user.jellies[jellyId + 1].comments;
            // comment = "test";
            wishes = user.wishes ?? undefined;
            if (user.jellies[jellyId + 1] !== undefined) {
                if (user.jellies[jellyId + 1].rating !== undefined)
                chartData.push([user.name, user.jellies[jellyId + 1].rating])
            }
            if (user.jellies[jellyId + 1] !== undefined) {
                if (user.jellies[jellyId + 1].comments !== undefined)
                    cardData.push([user.name, comment])
            }
            jellyRatings[user.name] = {comment: comment, rating: rating, wishes: wishes}
        })
    }

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

    useEffect(() => {
        let
            userList = storedUserList.value,
            jellyList = storedJellyList.value;
    }, [storedUserList.value, storedJellyList.value]);



console.log(chartData)
    console.log(cardData)
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
                        {chartData[1] !== undefined ?
                        <Chart
                            chartType="BarChart"
                            width="100%"
                            height="400px"
                            data={chartData}
                            options={options}
                        /> :<></>}
                        <Divider/>
                        {cardData[0] !== undefined ?
                            <>
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
                            </>
                            : <></>}
                    </Card>
                </Container>
            </Paper>
        </Grow>
    )
}

export default JellyChartData;

const ModalButtons = ({jelly}) => {
    let resultsModalOpen =  useSignal(false)

    const handleOpen = () => {
        resultsModalOpen.value  = true
    };

 if (jelly.id === 1)
    return (

        <>
            <Button sx={{margin: "10px"}} variant="contained" onClick={() => resultsModalOpen.value  = true}>CLick
                for results</Button>
            <Button sx={{margin: "10px"}} variant="outlined" onClick={() => openPromptModal.value[jelly.id] = true}>CLick
                for Explanation</Button>

            <ResultsModal
                jellyId = {jelly.id} open={resultsModalOpen}
            />
            {/*<ExplanationModal*/}
            {/*    open={openPromptModal}*/}
            {/*    onClose={() => {openPromptModal.value[jelly.id] = false}}*/}
            {/*/>*/}
        </>
    )
};
