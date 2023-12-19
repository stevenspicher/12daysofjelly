import {Button, Modal} from "@mui/material";
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

const MBSPromptsModal = (props) => {
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
                        Mirabelle Plum Spice Spread Prompts
                    </Typography>
                    <Button onClick={() => open.value = false}>Close</Button>
                    <br></br>
                    <Typography variant="h6">
                       The image was generated here: <a href="https://deepai.org/machine-learning-model/cyberpunk-generator">deepai.org cyberpunk-generator</a> with the prompt "Mirabelle Plum Spice"
                    </Typography>
                    <br></br>
                    <Typography variant="h5">
                      Grumpy Elf Prompt:
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Below is some data about a person’s jelly preferences. The jelly is Mirabelle Plum Spice Spread, and this person rated the jelly on a scale of 1-10. 1 means they did not like it and 10 means they loved it. Some people commented on the jelly's flavor and their experience, and some people provided a list of Christmas gift wishes.
                        Take on the persona of a grumpy but loveable christmas elf, and comment on this person’s like or dislike for the jelly based on their rating then describe an early childhood moment involving an item on their list that may explain their rating for this jelly.ake on the persona of a grumpy but loveable christmas elf, and provide humorous commentary on each person’s like or dislike for the jelly based on their rating and comments. The comments should focus on one person at a time, and make references to their comments and their christmas wish list, and describe an early childhood moment involving an item on their list that may explain their rating for this jelly."*/}
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 20}}>
                        I also changed the dataset format to print out in a more natural language format, like this:
                    </Typography>
                    <Typography sx={{fontSize: 14}}>
                        "doris rated the jelly a 4 and said this: "Okay but I'm not s big fan of plums.". They wished for : "Warm, soft, pj's,
                        9x13 ish Tupperware type container w/lid for veggie trays, etc.
                        Nice water bottle, no metal.
                        Gift cards are always nice. Might lead to a shopping trip with girls :)"
                    </Typography>

                </div>
            </Box>
        </Modal>
    )
}

export default MBSPromptsModal;