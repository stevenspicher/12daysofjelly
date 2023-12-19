import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Button, Container, Grow, Paper} from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import ABResultsModal from "./Modals/ABResultsModal";
import ABExplanationModal from "./Modals/ABExplanationModal";
import OLGPromptsModal from "./Modals/OLGExplanationModal";
import OLGResultsModal from "./Modals/OLGResultsModal";
import MBSResultsModal from "./Modals/MBSResultsModal";
import MBSPromptsModal from "./Modals/MBSPromptsModal";
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
    const navigate = useNavigate();
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
            const jellyRatings = {};
            let jellyPrompt = "";
            let rating, comment, wishes;
    if (storedUserList.value !== undefined) {
        storedUserList.value.map((user) => {

            rating = user.jellies[jellyId + 1]=== undefined ? undefined : user.jellies[jellyId + 1].rating;
            comment = user.jellies[jellyId + 1]=== undefined ? undefined : user.jellies[jellyId + 1].comments;
            wishes = user.wishes ?? undefined;
            if (user.jellies[jellyId + 1] !== undefined) {
                if (user.jellies[jellyId + 1].rating !== undefined)
                chartData.push([user.name, user.jellies[jellyId + 1].rating])
                if (user.jellies[jellyId + 1].comments !== undefined)
                    cardData.push([user.name, comment])
            }

            jellyRatings[user.name] = {comment: comment, rating: rating, wishes: wishes}
        })
        Object.entries(jellyRatings).forEach((user) => {
            let ratingText = user[1].rating === undefined ?  "did not rate the jelly" : `rated the jelly a ${user[1].rating}`;
            let commentText = user[1].comment === undefined ?  "did not comment." : `said this: "${user[1].comment}"`;
            let wishText = user[1].wishes === undefined ?  "They did not have an Christmas Wishes." : `They wished for : "${user[1].wishes}"`;
            jellyPrompt = jellyPrompt.concat(`${user[0]} ${ratingText} and ${commentText}. ${wishText}`)
        })
            jellyPrompt = `Below is some data about a person’s jelly preferences. The jelly is Mirabelle Plum Spice Spread, and this person rated the jelly on a scale of 1-10. 1 means they did not like it and 10 means they loved it. Some people commented on the jelly's flavor and their experience, and some people provided a list of Christmas gift wishes.
Take on the persona of a grumpy but loveable christmas elf, and comment on this person’s like or dislike for the jelly based on their rating then describe an early childhood moment involving an item on their list that may explain their rating for this jelly. The Jelly is ${jelly.name} and ${jellyPrompt}`
console.log(jelly.name)
        if (jelly.name === "Mirabelle Plum-Spice") {console.log(jellyPrompt)}
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

    return (
        <Grow in={true} timeout={1000}>
            <Paper elevation={elevationHeight} sx={{marginTop: "10px", border: '1px solid black'}}>
                <Container>

                    <Card>
                        <CardHeader title={jelly.name}/>
                        <p>(click image to rate)</p>
                        <CardMedia
                            component="img"
                            height="194"
                            image={jelly.image}
                            alt={jelly.name}
                            onClick={() => {
                                localStorage.setItem("jellyid", jelly.id)
                                navigate("/jelly")}}

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
    let resultsModalOpen = useSignal(false)
    let explanationModalOpen = useSignal(false)


    if (jelly.id === 1) {
        return (
            <>
                <Button sx={{margin: "10px"}} variant="contained" onClick={() => resultsModalOpen.value = true}>CLick
                    for results</Button>
                <Button sx={{margin: "10px"}} variant="outlined" onClick={() => explanationModalOpen.value = true}>CLick
                    for Explanation</Button>

                <ABResultsModal open={resultsModalOpen}/>
                <ABExplanationModal open={explanationModalOpen}/>
            </>
        )
    } else if (jelly.id === 2) {
        return (
            <>
                <Button sx={{margin: "10px"}} variant="contained" onClick={() => resultsModalOpen.value = true}>CLick
                    for results</Button>
                <Button sx={{margin: "10px"}} variant="outlined" onClick={() => explanationModalOpen.value = true}>CLick
                    for Explanation</Button>

                <OLGResultsModal open={resultsModalOpen}/>
                <OLGPromptsModal open={explanationModalOpen}/>
            </>
        )

    } else if (jelly.id === 3) {
        return (
            <>
                <Button sx={{margin: "10px"}} variant="contained" onClick={() => resultsModalOpen.value = true}>CLick
                    for results</Button>
                <Button sx={{margin: "10px"}} variant="outlined" onClick={() => explanationModalOpen.value = true}>CLick
                    for Explanation</Button>

                <MBSResultsModal open={resultsModalOpen}/>
                <MBSPromptsModal open={explanationModalOpen}/>
            </>
        )
    }

};