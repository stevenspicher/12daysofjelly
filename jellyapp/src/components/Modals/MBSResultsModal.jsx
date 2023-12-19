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

const MBSResultsModal = (props) => {
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
                        A Grumpy Elf's Guide to the Mirabelle Plum Spice:
                    </Typography>
                    <Button onClick={() => open.value = false}>Close</Button>
                    <br></br>
                        <Typography sx={{fontSize: 14}}>
                        Ah, Grumbles the Elf here, back with more festive grumpiness to sprinkle on your jelly reviews! Let's see what this Mirabelle Plum-Spice concoction has stirred up in these folks' taste buds, shall we?
                        </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Steven: Seven out of ten, eh? You, my friend, are walking a tightrope between bland and brilliant. You "enjoyed the plum," but couldn't handle the mirabelle being "overpowering"? Sounds like you, as a wee babe, dipped your gingerbread cookie in milk, but got scared when it started to soften! Embrace the unexpected, Steven! This jelly's an adventure, not a nursery rhyme!
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Doris: Four measly points? Tsk tsk, Doris, you sound like a snowman who prefers plain snow cones. "Not a big fan of plums"? Bah humbug! Maybe that Tupperware container you wish for should come filled with this jelly, a little Christmas miracle to thaw your taste buds.
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Ernie: A flat four? You, sir, are as exciting as a lump of coal in a stocking. It's okay, not everyone can handle a good jelly jig. Go for your bland nog and gingerbread houses, Ernie, leave the spice to the elves who like a bit of kick!
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Chris: Now we're talking! Eight out of ten for the spice? You, my friend, have the spirit of a sugar plum dancing on a gingerbread roof! I bet as a child, you chased snowflakes with a candy cane sword, dreaming of dragons made of marmalade. Keep embracing the heat, Chris!
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Jonah and Ethan: Silent as falling snow, you two. No jelly rating, no Christmas wish list? Are you lost reindeer, come to steal Santa's cookies? Speak up, or you'll end up wrapped in tinsel and sent back to the North Pole!
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Jeff: "Tasty, but boring"? My pointy ears droop lower than a mistletoe with no berries, Jeff! A five for this symphony of spice and plum? You're like a grumpy elf stuck sorting candy canes by color. Give it another go, with a dash of Christmas cheer, and maybe you'll discover a hidden jingle in its flavor!
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Oliver: Five points for "not terrible"? You're as picky as a snowflake on a sunburn, Oliver! "Tasted like honey"? This jelly's a whole orchestra, not a single note! Maybe that fancy Samsung watch on your list should come with a jelly app, to expand your palate beyond basic sweetness.
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Kenda: Another seven out of ten? You're like a robin pecking at a frosted window, Kenda, close to the magic but not quite through. You "liked the spice and plum," but wouldn't dare spread it on toast? This jelly's a daring adventure, not a picnic in the park! Grab a slice of bread, channel your inner gingerbread warrior, and conquer this jar!
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Hannah and Elliott: More silent elves? No jelly verdict, no Christmas wish list? Are you hiding in the peppermint forest, plotting to steal Santa's milk and cookies? Jingle your bells or be turned into candy canes yourselves!
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Brian: Eight out of ten, and you "didn't expect to like it"? Now that's the spirit, Brian! You're like a snowman discovering he loves hot cocoa. This jelly's a game changer, a touchdown for your taste buds! Keep surprising yourself, Brian, and maybe next year, Santa will bring you a jelly-filled football!
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Annie: Six points for liking it "more than you thought"? You're a hesitant elf, Annie, but I see the twinkle in your eye! "Subtle spice, Christmasy plums, fun word mirabelle"? You're practically writing a jelly carol! Give it another go, with a spoonful of festive spirit, and who knows, you might even invent a new jelly dance!
                    </Typography>
                    <br></br>
                    <Typography variant="h5">
                        There you have it, folks! Grumbles the Elf's verdict on your Mirabelle Plum-Spice jamboree. Remember, a little adventure on the palate can make Christmas truly merry, so don't be afraid to embrace the spice! Now, if you'll excuse me, I have some reindeer noses to boop and mistletoe to strategically place. Ho ho ho, and a Merry Grumpmas!
                    </Typography>
                    <br></br>
                </div>
            </Box>
        </Modal>
    )
}

export default MBSResultsModal;