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
                    <Typography variant="h3">
                        A Grumpy Elf's Guide to the Orange-Lime-Guava Jamboree:
                    </Typography>
                    <Button onClick={() => open.value = false}>Close</Button>

                    <br></br>
                    <Typography variant="h4">
                        Alright, sugarplums, gather 'round! Grumbles the Elf here, ready to sprinkle some sassy snowflakes on your family's jelly reviews. Buckle up, because this Citrus Tango's got more twists than a mistletoe-laden candy cane!
                </Typography>
                <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Steven: Ah, Steven, a man of simple tastes, just like his sock drawer (judging by that wish list!). Guava too strong? Bah humbug! I bet when you were five, you dipped your graham crackers in milk only until the first dunk, couldn't handle the soggy surprise, eh? Give the jelly another go, Steven, embrace the unexpected, just like those patterned socks you crave!
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Doris: Hold your horses, Doris! "Pretty yucky"? Ernie's "no thank you" was music to my grumpy ears, but you, dear lady, need some holiday cheer! Those warm PJs you wish for? Fill them with this jelly and imagine yourself basking in a citrus sauna. Problem solved!
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Ernie: A man of few words, eh, Ernie? Well, silence speaks volumes, and yours screams, "Get this fruity monstrosity away from me!" But fear not, grumpy one! There's plenty of bland nog and gingerbread houses for you this Christmas. Just don't blame me if your taste buds get bored!
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Chris: Another three-pointer for Team Bland! Chris, I swear, you make Ebenezer Scrooge look like a party animal. Slippers, puzzles, Sudoku? You're practically hibernating before the snow even falls! Spice up your life, man! This jelly's got more zing than a dancing elf on a sugar rush!
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Ethan: Hold on, sand falling in a fancy desk toy isn't enough?! Ethan, my boy, you need some real adventure on your palate! This jelly's a sandstorm of citrus, a volcanic eruption of tang! Ditch the desk toy, grab a spoon, and let the good times flow!
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Jeff: Now we're talking! Jeff, you're like the gingerbread man who actually enjoys the fox chase. "Delightfully tart," you say? I bet you snort marmalade on your toast like it's Christmas confetti! You, sir, are a jelly connoisseur, and this Citrus Tango is your holiday soulmate.
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Oliver: Oh dear, Oliver, did Santa accidentally stuff a lump of coal in your stocking instead of this jelly? "Awful"? "Horrendous"? You wound the citrus elves, young man! Maybe those fancy gadgets on your list will come with a built-in taste bud reset button. Give it another go, with a pinch of Christmas spirit, and who knows, you might discover a hidden tangerine treasure!
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Kenda: Boots, cardigans, and a water bottle? Kenda, you're practically planning a hike through the North Pole! This jelly isn't a wilderness trek, it's a tropical vacation in a jar! Embrace the tang, let the lime tickle your taste buds, and you might just find yourself sipping margaritas on a sugar plum beach after all.
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Hannah: Crossword puzzles and cute earrings? You're a walking contradiction, Hannah! This jelly's the same, sweet and sassy, sunshine and sour patch kids. Give it a try, share a spoonful with those rolly polly earrings, and see if the citrus sparks some festive inspiration for your next crossword clue!
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Brian: Anything sports-related, eh, Brian? Well, this jelly's got the competitive spirit too! It's a tart tackle in a jar, a citrus slam dunk on your taste buds. Challenge yourself, Brian, go beyond the bland sidelines and embrace the tangy victory lap!
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Annie: Torn by the orange peel, are we, Annie? Well, life's not all Silpat baking mats and egg trays, my dear! This jelly's a reminder that the best things come with a little twist, a bit of unexpected tang. So grab your stationery, scribble down a citrus haiku, and let the marmalade muse take over!
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Elliott: A bread-lover who appreciates an eight-out-of-ten jelly? You, Elliott, are my kind of elf! You get the value of a good tangy surprise, the comfort of a sturdy slice. This jelly's your holiday bestie, so spread it thick, pile on the bread, and sing carols with a citrusy grin!
                    </Typography>
                    <br></br>
                    <Typography variant="h4">
                        There you have it, folks! Grumbles the Elf's verdict on your family's jelly jamboree. Remember, a little adventure on the palate can make Christmas truly merry, so don't be afraid to embrace the tang! Now, if you'll excuse me, I have some reindeer noses to boop and mistletoe to strategically place. Ho ho ho, and a Merry Grumpmas
                    </Typography>
                    <br></br>
                </div>
            </Box>
        </Modal>
    )
}

export default OLGResultsModal;