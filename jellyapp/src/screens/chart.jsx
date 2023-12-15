import React, {useEffect, useState} from "react";

import {Row, Col, Table} from "react-bootstrap";
import {useLocation, useNavigate} from "react-router-dom";
import {Dialog, DialogTitle, Grid, List, Modal} from '@mui/material'
import {getConsole, getState, getUsers, editUser} from "../shared/utilities";
import {jellyList} from "../shared/containers";
import Header from "../components/Header"
import SpeedDial from "../components/SpeedDial"
import {Chart} from "react-google-charts";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Container, Grow, Paper, Stack, Button} from "@mui/material";
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import {styled} from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Box from "@mui/material/Box";

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


// const modalStyle1 = {
//       position: 'absolute',
//       top: '10%',
//       left: '10%',
//       overflow: 'scroll',
//       height: '100%',
//       display: 'block'
//   }


const ResultsModal = (props) => {
    const {onClose, open} = props;

    const handleClose = () => {
        onClose()
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} className="scroll-component">
                <div className="scroll-content">
                    <Typography variant="h4">
                        Alright, listen up, you sugarplum-stuffed santas! Gather 'round, 'cause this grumpy elf's got
                        somethin' to say about your fruity fancies!
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Steven, you scrooge: Barely a sniffle of a 4? Apricot-banana ain't for the faint of heart, but
                        "little banana"? You wouldn't know sunshine if it bit you on the jingle bells! And those wishes?
                        Gloves bigger than Rudolph's nose, coffee shop tabs longer than Mrs. Claus's knitting needles.
                        Get
                        some pep in your step, or I'll stick you on the naughty list faster than a candy cane melts in a
                        dragon's mouth!
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}} component="div">
                        Doris, you five-star snowflake: Now that's talkin'! Buttered toast and a smile, who needs
                        sugarplums
                        with a rating like that? Just watch out, that first bite might change your mind faster than a
                        reindeer with a caffeine rush.
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}} component="div">
                        Chris, you wish list wannabe: Slippers and sudoku? Sounds like someone needs a jolt of holiday
                        cheer! This jelly's a party in your mouth, not a nap in the workshop. And books? Bah humbug! Get
                        your nose outta those pages and into this jar!
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}} component="div">
                        Jeff, you jelly Grinch: "No bueno"? You wouldn't know good if it came wrapped in a sparkly bow
                        and
                        tied with a candy cane ribbon! Hario this, Yama that, maybe you should spend less time with your
                        fancy coffee gadgets and more time appreciating the finer things in life, like apricot-banana
                        jollies!
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}} component="div">
                        Oliver, you one-star grump: Weird? Not good? Sounds like someone woke up on the wrong side of
                        the
                        elf village! This jelly's a tropical vacation in a jar, not a lump of coal. And that wish list?
                        Longer than Santa's beard after a blizzard! Maybe some jelly in your stocking will give you a
                        reason
                        to smile this year.
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}} component="div">
                        Kenda, you baby food convert: Six stars from the baby food brigade? I'll give you that, it takes
                        guts to admit that first bite was like mushy memories. But hey, if you found the apricot
                        sunshine
                        hidden inside, more power to you! Just don't ask me to share your olive oil and vinegar dreams,
                        elf
                        on a shelf can only handle so much weird.
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}} component="div">
                        Hannah, you earring elf: Super cute silver earrings and crossword puzzles? Sounds like someone's
                        got
                        their priorities straight! But baggy jeans and smelly sticks? Ugh, leave the fashion faux pas
                        and
                        funky aromas to the goblins, alright? And those "too big" sweats? Honey, you're already drowning
                        in
                        cuteness, no need to add extra fabric!
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}} component="div">
                        Brian, you sports nut: Anything with a logo and a touchdown? Sounds like the perfect stocking
                        stuffer for this elf! Just promise you'll use that Wyoming Cowboys gear to chase off any pesky
                        gingerbread house burglars, alright?
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}} component="div">
                        Annie, you egg tray elf: Fridge organizers and Silpat mats? Now that's a wish list I can get
                        behind!
                        This jelly might be a rollercoaster of flavors, but your taste in kitchen gadgets is top-notch.
                        Just
                        don't ask me to share your stationery dreams, my scribbles are as messy as a yeti's footprints
                        after
                        a snowball fight.
                    </Typography>
                    <br></br>

                    <Typography variant="h5">
                        So there you have it, you jelly-slurping sugarplums! Remember, this holiday season, it's not
                        just
                        about the gifts under the tree, it's about the joy in your heart and the apricot-banana
                        explosion in
                        your mouth! Now go forth, spread the cheer, and maybe share a spoonful with this grumpy elf.
                        Just
                        don't blame me if I steal your last cookie! Ho ho ho!</Typography>
                </div>
            </Box>
        </Modal>
    )
}

const ExplanationModal = (props) => {
    const {onClose, open} = props;

    const handleClose = () => {
        onClose()
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} className="scroll-component">
                <div className="scroll-content">

                    <Typography variant="h4">
                        The Grumpy Elf comments were generated using a (you guessed it...) LLM AI from google called "Bard".
                    </Typography>
                    <br></br>
                    <Typography variant="h6">
                        LLM = Large Language Model. It's basically playing a complicated version of "next word", but
                        Bard has been trained with a massive amount of text so it does a REALLY good job of it. It can
                        be prompted to perform exercises, and the results can be tailored through an ongoing dialogue.
                    </Typography>
                    <br></br>
                    <Typography variant="h5">
                        Here's a trimmed down version of the prompting to create these results:
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Here is some data about a group of people's jelly preference.
                        The jelly is Apricot-Banana, and each person rated the jelly on a scale of 1-10.
                        1 means it nearly killed the person and 10 resulted in laugh out loud laughter.
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Some people commented on the jelly's flavor and their experience, and some people provided a
                        list of Christmas gift wishes.
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Example of data provided:
                    </Typography>
                    <Typography sx={{fontSize: 14}}>
                        name: steven
                    </Typography>
                    <Typography sx={{fontSize: 14}}>
                        comment: "I was surprised by how little I tasted the banana, and I like apricots.
                        Rating low because we are just starting out. :)"
                    </Typography>
                    <Typography sx={{fontSize: 14}}>
                        rating: 4
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Take on the persona of a grumpy but loveable christmas elf, and comment on each person's like or
                        dislike for Apricot-Banana Jelly, based on their rating. Make references to their comments and
                        their christmas wishes list.
                    </Typography>

                    <br></br>
                    <Typography variant="h5">
                        This is actually the end of a longer discussion. If you are interested I can provide the full
                        dialogue.
                    </Typography>
                </div>
            </Box>
        </Modal>
    )
}
const RatingsChart = (props) => {

    const navigate = useNavigate();
    const location = useLocation();
    const [tableUserList, setTableUserList] = useState(props.state.userList)


    const elevationHeight = 12;
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
    const options = {
        legend: "none",
        is3D: true,
        fontSize: 10,
        bar: {groupWidth: "30%"},
    };





    const JellyData = (jellyName, userList, jellyIndex) => {
        const chartData = [["Name", "Rating"]]
        const cardData = [];

      userList.map((user) => {
          const jellyRatings = {};
          let rating, comment, wishes;
            rating = user.jellies[jellyIndex].rating ?? undefined;
             comment = user.jellies[jellyIndex].comments ?? undefined;
            wishes = user.wishes ?? undefined;

            chartData.push([user.name, user.jellies[jellyIndex].rating])
            if (user.jellies[jellyIndex].comments !== undefined) {
                cardData.push([user.name, comment])
            }
            jellyRatings[user.name] = {comment: comment, rating: rating, wishes: wishes}
        })
        const [open, setOpen] = useState(false)
        const [open1, setOpen1] = useState(false)

        const handleClick = () => {
            setOpen(true)
        }
        const handleClose = () => {
            setOpen(false);
        };

        const handleClick1 = () => {
            setOpen1(true)
        }
        const handleClose1 = () => {
            setOpen1(false);
        };


        // console.log(jellyRatings)
        return (
            <Grow in={true} timeout={1000}>
                <Paper elevation={elevationHeight} sx={{marginTop: "10px", border: '1px solid black'}}>
                    <Container>

                        <Card>
                            <CardHeader title={jellyName}/>
                            {jellyName === "Apricot Banana" ?
                                <>
                                <Button sx={{margin: "10px"}} variant="contained" onClick={handleClick}>CLick for results</Button>
                                <Button sx={{margin: "10px"}} variant="outlined"  onClick={handleClick1}>CLick for Explanation</Button>
                                </>
                                :
                                <></>
                            }
                            <CardMedia
                                component="img"
                                height="194"
                                image={jellyList[jellyIndex - 1].image}
                                alt={jellyName}

                            />


                            <ResultsModal
                                open={open}
                                onClose={handleClose}
                            />
                            <ExplanationModal
                                open={open1}
                                onClose={handleClose1}
                            />
                            <Chart
                                chartType="BarChart"
                                width="100%"
                                height="400px"
                                data={chartData}
                                options={options}
                            />
                            <Divider/>
                            <Typography sx={{marginTop: "20px"}}>Comments</Typography>

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
            {JellyData("Apricot Banana", props.state.userList, 1)}
            {JellyData("Orange Guava Lime Spread ", props.state.userList, 2)}
        </Container>

    )
};

export default RatingsChart;