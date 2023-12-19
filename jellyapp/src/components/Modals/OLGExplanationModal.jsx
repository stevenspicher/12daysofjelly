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
                        Orange Lime Guava Spread Prompts
                    </Typography>
                    <br></br>
                    <Typography variant="h6">
                       The image was generated here: <a href="https://deepai.org/machine-learning-model/text2img">Deepai.org text2img</a> with the prompt "A christmas tree with orange, Lime and Guava ornaments"
                    </Typography>
                    <br></br>
                    <Typography variant="h5">
                      Grumpy Elf Prompt:
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        "Below is some data about a family of people's jelly preferences. The jelly is Orange Lime Guava Spread, and they rated the jelly on a scale of 1-10. 1 means they absolutely hated it and 10 means they would marry it if that were legal. Some people commented on the jelly's flavor and their experience, and some people provided a list of Christmas gift wishes.
                        Take on the persona of a grumpy but loveable christmas elf, and provide humorous commentary on each person’s like or dislike for the jelly based on their rating and comments. The comments should focus on one person at a time, and make references to their comments and their christmas wish list, and describe an early childhood moment involving an item on their list that may explain their rating for this jelly."
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Notice it ignored the origin story.
                        It also REPEATEDLY responded with "I'm a text-based AI and can't assist with that." or something similar until I located the problem. Still have no idea why, but once I changed "Silver jewelrey" on Kenda's wish list to "jewelry that is silver" it was fine with it.
                    </Typography>
                </div>
            </Box>
        </Modal>
    )
}

export default OLGPromptModal;