import {Button, Modal} from "@mui/material";
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

const PJFResultsModal = (props) => {
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
                    <Typography variant="h3">
                        A Grumpy Elf's Guide to the Peach Jasmine Flower:
                    </Typography>
                    <Button onClick={() => open.value = false}>Close</Button>
                    <br></br>
                        <Typography sx={{fontSize: 14}}>

                            Ahoy there, merry jelly judges! Gather 'round, gather 'round, for Grumbles the Elf has spun some limericks of Christmas cheer, with a tang of fruity critique, of course!
                        </Typography>
                            <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Steven, the lukewarm lover:
                        His taste buds, they wouldn't commit,
                        To peach or to flower, a wishy-washy hit.
                        "Gloves for Loki, coffee, warm socks," he sighed,
                        "This jelly's okay, but I wouldn't confide
                        In its floral embrace, it just feels kinda...bland."
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Doris, the peachy queen:
                        Jasmine, she scoffed, with a wrinkled-up nose,
                        "Just give me the peach, let the fragrance repose!"
                        Tupperware dreams and gift cards galore,
                        For shopping with friends, by the mall's open door.
                        Eight points for the peach, with a floral side-eye,
                        Doris knows what she likes, and she won't apologize.
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Ernie, the "pretty good" guy:
                        A shrug and a six, that's all Ernie could muster,
                        No fireworks of flavor, no passionate bluster.
                        "Peach Jasmine's alright," he mumbled with ease,
                        Content in the middle, no longing to appease.
                        A limerick as bland as his jelly verdict,
                        But hey, sometimes "okay" ain't the worst verdict.
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Chris, the peachy purist:
                        "More peach, less perfume!" his taste buds declared,
                        Seven points for the jelly, though slightly impaired.
                        Slippers and books, puzzles and sudoku's delight,
                        He craves order and peach, with the flowers out of sight.
                        A limerick of longing, a wish unfulfilled,
                        For a jelly that's peachy, and jasmine-less skilled.

                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Jonah, the floral convert:
                        "Flowers ain't so bad, I confess with a grin,"
                        Eight points for the jasmine, the peach tucked within.
                        Espresso and sweaters, with rice in the bin,
                        This elf's taste buds bloom, a floral within.
                        So raise a glass, toast the unexpected delight,
                        Jonah's found beauty in blossoms so bright.
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Ethan, the silent sand-seeker:
                        No jelly pronouncements, no wishes to share,
                        Just dreams of sand paintings and games to repair.
                        Crewnecks and long sleeves, a lava lamp's glow,
                        His Christmas desires in a whisper they flow.
                        Perhaps in the silence, a taste bud ignites,
                        A limerick unwritten, with flavors that bite.
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Jeff, the olfactory enigma:
                        "Smells like old socks, but tastes like a treat!"
                        His nose disagreed, but his belly did meet
                        With the peach and the jasmine, a curious blend.
                        Coffee gadgets and pencils, his wishes transcend
                        The realm of the senses, to a technical plane,
                        Where aromas and flavors are oddly untamed.
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Oliver, the sniffling gourmand:
                        "Sick as a dog, but this jelly's a gem!"
                        He coughed and he wheezed, but devoured it them.
                        Samsung and earbuds, a gamer's delight,
                        He'll conquer the sniffles with each sugary bite.
                        Eight points through the snot, a testament true,
                        To the power of jelly, to pull you right through.
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Kenda, the apricot whisperer:
                        "Peach? Apricot? Where's the jasmine, I say?"
                        Four points for the blend, in a lukewarm ballet.
                        Water bottles and socks, cardigans in tow,
                        Her taste buds are picky, where flavors must flow.
                        A limerick of confusion, a fruity debate,
                        Kenda's palate's a mystery, sealed by the gate.
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Hannah, the silent stargazer:
                        No jelly pronouncements, no wishes to claim,
                        Just earrings and sweats, whispered in the game
                        Of Christmas desires, a secret untold.
                        Perhaps in the silence, a jelly unfolds
                        A story of sweetness, a flavor untold,
                        For Hannah's taste buds, in mysteries rolled.
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Brian, the sports-loving gourmand:
                        "Peach and jasmine? Who cares, it's a win!"
                        Eight points for the jelly, a taste bud's quick grin.
                        Wyoming and Broncos, a sporty delight,
                        He embraces the flavors, with all his elf-might.
                        A limerick of gusto, a holler of glee,
                        Brian's palate's a party, for all things to see.
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Annie, the peach perfectionist:
                        "Peachy heaven, but hold the perfume!"
                        She sighed at the jasmine, dispelling the gloom
                        With fridge organizers and baking supplies,
                        A love for the peach, with a twinkle in her eyes.
                        Nine points for the fruit, with a floral sigh,
                        Annie's a baker, with flavors that fly.
                    </Typography>
                    <br></br>
                    <Typography variant="h5">
                        So there you have it, folks, another round
                        Of Grumbles the Elf's rhymes, where flavors abound! Remember, a touch of the unexpected can make Christmas merry, so don't be afraid to embrace the strange and the sweet! Now, if you'll excuse me, I have some reindeer noses to boop and mistletoe to strategically place. Ho ho ho, and a Merry Grumpmas!
                    </Typography>

                </div>
            </Box>
        </Modal>
    )
}

export default PJFResultsModal;