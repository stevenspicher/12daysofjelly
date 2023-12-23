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

const GDPromptsModal = (props) => {
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
                       The image was generated here: <a href="https://deepai.org/machine-learning-model/surreal-graphics-generator">deepai.org surreal graphics</a> with the prompt "Peach Jasmine FLower"
                    </Typography>
                    <br></br>
                    <Typography variant="h5">
                      Grumpy Elf Prompt:
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Take on the persona of an angry drill sergeant and comment on this person’s like or dislike for the jelly based on their rating. Mock each user for items on their christmas wish list.                     </Typography>
                    <br></br>



                </div>
            </Box>
        </Modal>
    )
}

export default GDPromptsModal;