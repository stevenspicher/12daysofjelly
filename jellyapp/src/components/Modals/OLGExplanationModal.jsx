import {Modal} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

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

const OLGPromptModal = (props) => {
    const {open} = props;



    return (
        <Modal
            open={open.value}
            onClose={() => open.value = false}
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

                </div>
            </Box>
        </Modal>
    )
}

export default OLGPromptModal;