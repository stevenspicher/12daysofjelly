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

const RSPromptsModal = (props) => {
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
                       The image was generated here: <a href="https://deepai.org/machine-learning-model/renaissance-painting-generator">deepai.org surreal renaissance painting generator</a> with the prompt "Rhubarb Strawberryr"
                    </Typography>
                    <br></br>
                    <Typography variant="h5">
                      Grumpy Elf Prompt:
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Take on the persona of a sweet old slightly confused grannie from a fairy tale setting, and comment on how pleased you are when people participated by rating or commenting. Then describe how you will craft one of their items like a grandmother might,  by  crocheting it with yarn or making it into a quilt.  Mention squeezing cheeks and patting heads and other grandmotherly activities.                     <br></br>

                    </Typography>

                </div>
            </Box>
        </Modal>
    )
}

export default RSPromptsModal;