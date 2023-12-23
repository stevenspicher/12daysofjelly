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

const GDResultsModal = (props) => {
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
                        A Drill Sergeant's Guide to the Grapefruit and Dragonfruit spread:
                    </Typography>
                    <Button onClick={() => open.value = false}>Close</Button>
                    <br></br>
                        <Typography sx={{fontSize: 14}}>

                            Attention, maggots! Listen up, you jelly-swilling privates! Grumpy Drill Sergeant here, reporting for fruity duty. We got ourselves a Grapefruit-Dragonfruit jelly situation, and by the beard of Zeus, some of you need a taste bud boot camp!                        </Typography>
                            <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Steven, you seven-point pansy: "Grapefruit and dragonfruit separately? Bah! Like you'd charge into battle with one sock and a flip-flop! But together, yum? You call that bravery? That's culinary confusion, soldier! Gloves for Loki? Don't you mean a spiked club to teach that mutt some bite? Coffee shop gift cards? What are you, bribing the enemy with lattes? Pull yourself together, maggot!
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Doris, you three-point weakling: "These flavors didn't work"? They didn't work for who, Private Sniffles? A taste bud with the attention span of a gnat? This jelly's a tropical typhoon, a citrusy Krakatoa, and you whimper about compatibility? Grow a spine, soldier, and face the flavor storm! And those Tupperware dreams? You think plastic containers will save you from the chaos of war? This ain't a picnic, Doris, it's a jelly jihad!
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Ernie, you zero-point disgrace: "It's awful"? You're awful, maggot! This jelly's got more zing than a drill sergeant's whistle, more fire than a napalm strike, and you call it awful? You wouldn't know good taste if it bit you in the backside! No Christmas wishes? Good, maybe silence will save you from further embarrassment.
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Chris, you six-point milquetoast: "Meh, it was okay"? You fight with the enthusiasm of a wet noodle, Chris! This jelly's a battlefield of citrus and scales, and you give it a lukewarm shrug? Where's the warrior spirit? The dragon's roar? You want slippers and sudoku? Go knit yourself a fruit-flavored straitjacket, private!

                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Jonah, you two-point whiner: "Oh no, bitter kick"? Did a grapefruit whisper at you and you ran for the hills? This jelly's a test of courage, a trial by tartness, and you crumble like a stale croissant! Coffee stuff and black jeans? You're trying to blend in with the enemy, are you? This ain't a fashion show, maggot, it's a flavor fight!
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Ethan, you sand-castle dreamer: Not a peep about the jelly, private? You're lost in your desert fantasies, building sandcastles with your Christmas wishlist? Crewnecks and lava lamps? This ain't a beach vacation, soldier, it's a fruit-fueled frenzy! Get your head out of the clouds and into the jar, maggot!
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Jeff, you coffee-obsessed caffeine fiend: Seven points and a "great"? Finally, a soldier with some backbone! This jelly's got more kick than a double espresso, more bite than a cold brew enema, and you appreciate it! Hario funnels and digital scales? You're brewing up a storm, Jeff, a typhoon of taste bud torture! Just remember, private, even the bravest warriors need sleep, not just more caffeine!
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Oliver, you lukewarm lizard lover: Six points and a "decent"? You're as wishy-washy as a lukewarm dragonfruit smoothie! This jelly's a citrusy supernova, a flavor explosion that would make Godzilla wince, and you call it decent? Samsung watches and banjos? You're accessorizing for mediocrity, soldier! Step up your taste buds or prepare for KP duty!
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Kenda, you "yuck"-spewing sass-master: Three points and a single syllable of disgust? Now that's the spirit, private! This jelly's not for the faint of tongue, it's a flavor grenade that would singe your socks off. Olive oil and vinegars? You're trying to drown out the taste, are you? Embrace the chaos, soldier, or be drowned in it!
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Hannah, you silent sphinx: No rating, no wish list? What secrets do you hold behind those lips, private? Are you savoring the silence before the flavor storm hits? Or are you just planning your escape to the land of odorless, tasteless Christmas wishes? Speak up, soldier, before I make you gargle with grapefruit juice!
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Brian, you eight-point barbarian: "Tasty"? That's all you've got, maggot? This jelly's a flavor apocalypse, a citrusy Götterdämmerung, and you grunt "tasty"? Where's the roar of approval, the battle cry of a true taste bud warrior? Wyoming Cowboys? More like Jelly Jocks, private! Show some damn enthusiasm!
                    </Typography>
                    <br></br>
                    <Typography sx={{fontSize: 14}}>
                        Annie, you dragon-loving daredevil: Eight points and a "zinginess and dragons"? Now that's what I'm talking about, soldier! You embrace the fire, the tang, the fruity fury! Fridge organizers and baking mats? You're planning your next culinary conquest, are you? Keep that dragon spirit alive, private, and maybe you'll earn a jelly medal come Christmas!
                    </Typography>  <Typography sx={{fontSize: 14}}>
                    Elliott, you six-point enigma: A silent "meh" for the jelly? You're as opaque as a dragonfruit seed, private! No comment, no Christmas wish list, just a shrug and a half-hearted thumbs-up for the citrus-and-scales tango? This jelly's a flavor mosh pit, a taste bud typhoon, and you give it a lukewarm glance? Where's the fire, soldier? The passion? Are you saving your energy for a grand culinary coup, or are you just content to be a bystander in the taste bud battlefield? Speak up, maggot, before I assign you latrine duty with a grapefruit spoon!                    </Typography>
                    <br></br>
                    <Typography variant="h5">
                        There you have it, maggots! Another round of fruity fury courtesy of Drill Sergeant Grumpy! Remember, soldiers, a little citrusy chaos can make Christmas truly merry, so don't be afraid to embrace the strange and the sweet! Now, drop and give me fifty jelly burpees, or you'll be peeling grapefruits with your bare hands until next year! Dismissed!
                    </Typography>

                </div>
            </Box>
        </Modal>
    )
}

export default GDResultsModal;