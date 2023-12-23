import React, {useEffect} from "react";
import SpeedDial from "../components/SpeedDial"
import {Col, Row, Carousel} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import {Container} from "@mui/material";
import {styled} from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {red} from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';


import {computed, signal, useSignal} from "@preact/signals-react";
import {
    storedJellyList,
    storedUserList,
    storedJellyData
} from "../store/signalsStore";

let
    userList = storedUserList.value,
    jellyList = storedJellyList.value,
    jellyData = storedJellyData.value;

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
const JellyRollout = () => {
    const id = JSON.parse(localStorage.getItem("id"))
    const [expanded, setExpanded] = React.useState(false);
    let jellyComments = {};
    let jellyName = "";
    let chartData = [];
    let cardData = useSignal([]);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const getJellyData = (jellyId) => {
        let jellyPrompt = "";
        let jellyRatings = {};
        cardData.value = [];
        let rating, comment, wishes;
            jellyData = storedJellyList.value[jellyId];
        if (storedUserList.value !== undefined) {
            storedUserList.value.map((user) => {
                rating = user.jellies[jellyId + 1] === undefined ? undefined : user.jellies[jellyId + 1].rating;
                comment = user.jellies[jellyId + 1] === undefined ? undefined : user.jellies[jellyId + 1].comments;
                wishes = user.wishes ?? undefined;
                if (user.jellies[jellyId + 1] !== undefined) {
                    if (user.jellies[jellyId + 1].rating !== undefined) {

                        chartData.push([user.name, user.jellies[jellyId + 1].rating]);
                    }
                    if (user.jellies[jellyId + 1].comments !== undefined) {
                        cardData.value.push([user.name, comment])
                    }
                }
            })

        }
    }

    const navigate = useNavigate();
    useEffect(() => {
        let
            userList = storedUserList.value,
            jellyList = storedJellyList.value;
    }, [storedUserList.value, storedJellyList.value]);

    if (jellyList !== undefined)
        getJellyData(4)
        return (
            <Container>
                <SpeedDial/>

                {/*<Carousel activeIndex={4} className={"mt-2"} interval={null} fade variant="dark" indicators={false}*/}
                {/*          controls={false}>*/}
                {/*    /!*{storedJellyList.value.map((jelly, index) => {*!/*/}
                {/*    /!*    if (jelly.name !== undefined && cardData.value[0] !== undefined)*!/*/}
                {/*    /!*    return (*!/*/}
                {/*            <Carousel.Item key={4}>*/}
                                <Card>
                                    <CardHeader
                                        title={storedJellyList.value[4].name}
                                        subheader="December 22, 2023"
                                    />
                                    <Col>
                                    <CardMedia
                                        component="img"
                                        height="80"
                                        width="40"
                                        image={storedJellyList.value[4].image}
                                        alt={storedJellyList.value[4].name}
                                    />
                                    </Col>

                                    <CardContent>
                                        {cardData.value.map((card, index) => {
                                            console.log(card[0])
                                            console.log(card[1])
                                        return (

                                        <Typography key = {index} variant="body2" color="text.secondary">
                                            {card[0]} says: {card[1]}
                                        </Typography>
                                            )
                                            })
                                        }
                                    </CardContent>
                                </Card>
                            {/*</Carousel.Item>*/}

                    {/*})*/}
            {/*}*/}
            {/*     </Carousel>*/}
            </Container>
        )
};

export default JellyRollout;