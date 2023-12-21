import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Button, Container, Grow, Paper, Box} from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import ABResultsModal from "./Modals/ABResultsModal";
import ABExplanationModal from "./Modals/ABExplanationModal";
import OLGPromptsModal from "./Modals/OLGExplanationModal";
import OLGResultsModal from "./Modals/OLGResultsModal";
import MBSResultsModal from "./Modals/MBSResultsModal";
import MBSPromptsModal from "./Modals/MBSPromptsModal";
import HaikuModal from "./Modals/haikuModal";
import {Chart} from "react-google-charts";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import {styled} from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CircularProgress from '@mui/material/CircularProgress';

//state
import {computed, signal, useSignal} from "@preact/signals-react";
import {
    openPromptModal,
    openResultModal,
    storedJellyList,
    storedUserList,
    storedJellyData
} from "../store/signalsStore";

let userList,
    jellyList,
    jellyData;

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "90%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflow: 'scroll',

};

const JellyChartData = (jellyId) => {
    const navigate = useNavigate();
    const userId = JSON.parse(localStorage.getItem("id"))

    const jelly = storedJellyList.value[jellyId + 1] ?? {};
    let haikuModalOpen = useSignal(false)
    let haiku = useSignal("")
    let jellyRatingsData = useSignal()
    let ratingSummary = useSignal()
    const elevationHeight = 12;
    const chartData = [["Name", "Rating"]]
    const cardData = [];

    const options = {
        legend: "none",
        is3D: true,
        fontSize: 10,
        bar: {groupWidth: "30%"},
    };

    let jellyPrompt = "";
    let jellyRatings= {};
    let rating, comment, wishes;
    if (storedUserList.value !== undefined) {
        storedUserList.value.map((user) => {

            rating = user.jellies[jellyId + 1] === undefined ? undefined : user.jellies[jellyId + 1].rating;
            comment = user.jellies[jellyId + 1] === undefined ? undefined : user.jellies[jellyId + 1].comments;
            wishes = user.wishes ?? undefined;
            if (user.jellies[jellyId + 1] !== undefined) {
                if (user.jellies[jellyId + 1].rating !== undefined)
                    chartData.push([user.name, user.jellies[jellyId + 1].rating])
                if (user.jellies[jellyId + 1].comments !== undefined)
                    cardData.push([user.name, comment])
            }

            // jellyRatings = {comment: comment, rating: rating, wishes: wishes}
        })
//         Object.entries(jellyRatings).forEach((user) => {
//             let ratingText = user[1].rating === undefined ? "did not rate the jelly" : `rated the jelly a ${user[1].rating}`;
//             let commentText = user[1].comment === undefined ? "did not comment." : `said this: "${user[1].comment}"`;
//             let wishText = user[1].wishes === undefined ? "They did not have an Christmas Wishes." : `They wished for : "${user[1].wishes}"`;
//             jellyPrompt = jellyPrompt.concat(`${user[0]} ${ratingText} and ${commentText}. ${wishText}`)
//         })
//         jellyPrompt = `Below is some data about some  people’s jelly preferences. The jelly is Mirabelle Plum Spice Spread, and this person rated the jelly on a scale of 1-10. 1 means they did not like it and 10 means they loved it. Some people commented on the jelly's flavor and their experience, and some people provided a list of Christmas gift wishes.
// Take on the persona of a grumpy but loveable christmas elf, and comment on this person’s like or dislike for the jelly based on their rating then describe an early childhood moment involving an item on their list that may explain their rating for this jelly. The Jelly is ${jelly.name} and ${jellyPrompt}`
// // console.log(jelly.name)
//         if (jelly.name === "Mirabelle Plum-Spice") {console.log(jellyPrompt)}
//         getRatingData(chartData, ratingSummary, storedJellyList.value[jellyId + 1].name)
        jellyRatings.value=[chartData, ratingSummary, storedJellyList.value[jellyId + 1].name]
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

    useEffect(() => {
        if (storedUserList.value !== undefined)
            getData(jelly.id, haiku)
    }, [storedUserList.value]);
    return (
        <Grow in={true} timeout={1000}>
            <Paper elevation={elevationHeight} sx={{marginTop: "10px", border: '1px solid black'}}>
                <Container>

                    <Card>
                        <CardHeader title={jelly.name}/><ModalButtons jelly={jelly}/>
                        <Typography sx={{fontSize: 15, fontFamily: "sofia",}}>(click image to rate) </Typography>
                        <CardMedia
                            component="img"
                            height="194"
                            image={jelly.image}
                            alt={jelly.name}
                            onClick={() => {
                                localStorage.setItem("jellyid", jelly.id)
                                navigate("/jelly")
                            }}

                        />
                        <Typography className="subtitle" sx={{fontSize: 30, fontFamily: "sofia",}}>
                            {haiku}
                        </Typography>



                        {chartData[1] !== undefined ?
                            <Chart
                                chartType="BarChart"
                                width="100%"
                                height="400px"
                                data={chartData}
                                options={options}
                            /> : <></>}
                        <Button sx={{margin: "10px"}} variant="outlined" onClick={() => {
                            ratingSummary.value = <CircularProgress />
                            getRatingsData(jellyRatings.value[0], jellyRatings.value[1], jellyRatings.value[2]);
                        }}>CLick for Rating Summary</Button>
                        <Typography className="subtitle" sx={{fontSize: 15}}>
                            {ratingSummary.value}
                        </Typography>
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
                                                        <Typography sx={{fontSize: 14}} color="text.secondary"
                                                                    gutterBottom>
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

const getData = async (jellyId, haiku) => {
    const userId = JSON.parse(localStorage.getItem("id"))
    if (storedUserList.value[userId].jellies[jellyId] !== undefined) {
        if (storedUserList.value[userId].jellies[jellyId].comments !== undefined) {
            const messageContent = `${storedUserList.value[userId].name} rated ${storedJellyList.value[jellyId].name} a ${storedUserList.value[userId].jellies[jellyId].rating} and their comments were: ${storedUserList.value[userId].jellies[jellyId].comments}.`
            const response = await fetch("http://143.109.173.29:1234/v1/chat/completions", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "messages": [
                        // { "role": "system", "content": `You are a grumpy but loveable christmas elf who acts like he dislikes ${storedUserList.value[userId].name}. Direct your comments to ${storedUserList.value[userId].name}` },
                        {
                            "role": "user",
                            "content": `Compose a haiku for ${storedUserList.value[userId].name} about ${storedJellyList.value[jellyId].name} using this information: ${storedUserList.value[userId].jellies[jellyId].comments}. Respond with only the haikiu. Do not add additional comments. `
                        }
                        // { "role": "user", "content": `Compose a haiku for ${storedUserList.value[userId].name} using this information: ${messageContent}. Respond with only the haikiu. Do not add additional comments. ` }
                    ],
                    "temperature": 7,
                    "max_tokens": -1,
                    "stream": false
                })
            });
            const data = await response.json();
            haiku.value = data.choices[0].message.content
        }
    }
}


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

const getRatingsData = async (chartData, ratingSummary, jellyName) => {
    console.log(chartData)
    if (chartData[1] !== undefined) {
        const messageContent = `The following data is a javascript object describing ratings for ${jellyName}. The format is as follows: "Name: name of the person who rated the jelly", "rating": the rating on a scale of 1-10 with 1 being extreme dislike and 10 being extreme enjoyment. `
        const response = await fetch("http://143.109.173.29:1234/v1/chat/completions", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "messages": [
                    {
                        "role": "user",
                        "content": `The following data is a javascript object describing ratings for ${jellyName}. 
                        The format is as follows: "Name: name of the person who rated the jelly", "rating": the rating on a scale of 1-10 with 1 being extreme dislike and 10 being extreme enjoyment. 
                        Please summarize the data by listing the average rating, who liked the jelly the most, and who liked the jelly the least. Do not provide any instructions on hwo to arrive at the conclusions. 
                        The format of the response should be "Highest Rating: (name of person with highest rating), Lowest Rating: (name of person with lowest rating) Average of all ratings: (average of all ratings). If there are ties for the highest or lowest rating, list both names.  Do not provide any other commentary.
                        Here is the data: ${chartData} `
                    }
                ],
                "temperature": .02,
                "max_tokens": -1,
                "stream": false
            })
        });
        const data = await response.json();
        ratingSummary.value = `Here is a ratings summary for ${jellyName}: ${data.choices[0].message.content}`
    }
    // }
}