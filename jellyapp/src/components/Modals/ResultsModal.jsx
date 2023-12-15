import {Modal} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import {openResultModal} from "../../store/signalsStore";


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

const ResultsModal = (props) => {
    const {jelly} = props;
console.log(jelly.id)
    // const handleClose = () => {
    //    openResultModal.value[jelly.id] = false
    // };

    return (
        <Modal
            open={openResultModal.value[jelly.id]}
            onClose={() => openResultModal.value[jelly.id] = false}
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

export default ResultsModal;