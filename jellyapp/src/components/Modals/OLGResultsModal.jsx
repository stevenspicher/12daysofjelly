import {Modal} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import {openResultModal} from "../../store/signalsStore";
import {useSignal} from "@preact/signals-react";


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

const OLGResultsModal = (props) => {
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
                </div>
            </Box>
        </Modal>
    )
}

export default OLGResultsModal;