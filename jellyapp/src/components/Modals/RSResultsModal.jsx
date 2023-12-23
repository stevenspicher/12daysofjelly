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

const RSResultsModal = (props) => {
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
                        Grannie's Guide to Rhubarb Strawberry:
                    </Typography>
                    <Button onClick={() => open.value = false}>Close</Button>
                    <br></br>
                        <Typography sx={{fontSize: 14}}>


                            Oh, my dears, my heart flutters like a hummingbird's wings when you share your thoughts on these jellies! Just like Grandma's apple pie wouldn't be the same without a sprinkle of cinnamon and sugar, your opinions make this taste test truly scrumptious!                        </Typography>
                            <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Now, Steven, who found a surprise love in the rhubarb's tangy twist, I've got just the thing for those chilly walks with Loki. I'll crochet you a pair of mittens so warm and woolly, they'll snuggle your fingers like fireflies on a summer night. And they'll have little paw prints stitched on the back, just to remind you of your furry friend!
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Doris, my dear, who prefers her strawberries solo, don't fret! I'll whip you up a cozy pair of pajamas, soft as a kitten's purr and patterned with juicy red berries. You'll float off to sleep like a feather on a dandelion puff, dreaming of sunny fields and sweet summer days.
                    </Typography>

                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        And Christopher, oh Christopher, your love for that strawberry aftertaste warms my old bones! For you, I'll knit a new robe, fit for a prince, with silver and gold swirls dancing across its folds. It'll shimmer like moonlight on a frosted window, and feel as luxurious as a cat stretched out in the sun.

                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Jonah, my star baker, your ode to this jelly deserves a standing ovation! And what better reward than a mountain of coffee treats? I'll bake you crumbly rhubarb scones and juicy strawberry shortcakes, enough to fill your kitchen with the aroma of Christmas magic.
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Now, now, Ethan, don't be shy! Even grannies like me need a bit of mystery. But worry not, I'll crochet you a cozy scarf for those chilly days, and inside it, I'll hide a tiny sand-fall timer, like a secret whispered from the wind. Let it soothe your mind and spark your imagination, like a miniature desert dancing in your pocket.
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Oh, and Jeff, my darling coffee connoisseur, your love for precision deserves a touch of elegance. I'll knit you a cozy mug warmer, adorned with little coffee beans and steam swirls, to keep your java toasty warm until the last sip.
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Oliver, my tech-savvy grandson, your ten out of ten deserves a fanfare! But instead of gadgets and gizmos, let Grandma weave you a magic of a different sort. I'll crochet you a colorful dreamcatcher, strung with feathers and beads, to capture the sweetest strawberry dreams and chase away any tech-induced nightmares.
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Kenda, my dear, your tart and tangy taste buds remind me of young lemons in the spring. For you, I'll knit a pair of fingerless gloves, adorned with tiny green leaves and rosy blossoms. Wear them with pride, my little sprout, and let them be a reminder to savor the sweet and the sour, for they make life's tapestry all the more beautiful.
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Hannah, my quiet darling, your silence speaks volumes. But worry not, a gift waits for you too. I'll find the most fragrant lavender sachets, tucked away in secret pockets of your new sweatpants, to fill your dorm with the scent of sleepy meadows and calm your mind for study and dreams.
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        And Brian, my sports-loving boy, your enthusiasm is a breath of fresh air! For you, I'll crochet a stadium blanket, woven with the colors of your favorite teams. Wrap yourself in it, cheer until your voice is hoarse, and know that Grandma's heart is always in the stands with you.
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Annie, my clever one, your appreciation for the rhubarb's bite warms my soul. For you, I'll knit a set of pot holders, shaped like plump strawberries and tangy rhubarb stalks. Let them add a touch of whimsy to your kitchen, and a reminder that even the most ordinary tasks can be a delicious adventure.
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Elliott, my silent observer, your seven out of ten is a riddle I long to solve. But fret not, a gift awaits your unspoken desires. I'll knit you a cozy beanie, soft as a whisper and warm as a hug, with a tiny pom-pom perched on top like a secret friend. Wear it, and know that even the quietest voice deserves to be heard, and every story, even unspoken, has a magic all its own.                    </Typography>
                    <br></br>
                    <Typography variant="h5">
                        So there you have it, my dears! A taste of Christmas cheer, woven with love and yarn and a sprinkle of Grandma's magic. Remember, my little sprouts, the sweetest jellies are best enjoyed with others, and the warmest Christmases are built on love, laughter, and a sprinkle of the unexpected. Now, go forth, enjoy your gifts, and may your holidays be merry and bright!
                    </Typography>

                </div>
            </Box>
        </Modal>
    )
}

export default RSResultsModal;