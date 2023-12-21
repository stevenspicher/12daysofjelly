import {Button, Modal} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, {useEffect} from "react";

import {
    storedJellyList, storedUserList,
} from "../../store/signalsStore";
let userList;


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

const HaikuModal = (props) => {
    const {open, haiku} = props;

    let userName = "";
    const userId = JSON.parse(localStorage.getItem("id"))
    if (storedUserList.value !== undefined) {
     userName = storedUserList.value[userId].name}

    return (
        <Modal
            open={open.value}
            onClose={() => open.value = false}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} className="scroll-component">
                <div className="scroll-content">
                    <Typography variant="h3">
                        {userName}'s poem:
                    </Typography>
                    <Typography sx={{fontSize: 14}}>
                        {haiku}
                    </Typography>
                    <Button onClick={() => open.value = false}>Close</Button>
                </div>
            </Box>
        </Modal>
    )
}

export default HaikuModal;