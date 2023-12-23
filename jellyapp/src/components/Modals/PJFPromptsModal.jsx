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

const PJFPromptsModal = (props) => {
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
                       The image was generated here: <a href="https://deepai.org/machine-learning-model/text2img">deepai.org text2img</a> with the prompt "Peach Jasmine FLower"
                    </Typography>
                    <br></br>
                    <Typography variant="h5">
                      Grumpy Elf Prompt:
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Take on the persona of a grumpy but loveable christmas elf, and compose a limerick about each person referencing how much the like the jelly and their comments.
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 20}}>
                        halfway through it jsut quit and said "to be continued" (??) so I asked it to repeat the exercise with the remaining people.
                    </Typography>


                </div>
            </Box>
        </Modal>
    )
}

export default PJFPromptsModal;