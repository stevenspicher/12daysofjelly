
import {computed, signal} from "@preact/signals-react";

import apricotAndBanana from "../assets/apricot-banana.jpg";
import orangeguavalime from "../assets/orangeguavelime.jpg";
import mirabellePlumWithSpice from "../assets/mirabelleplumspice.jpg";
import peachjasmineflower from '../assets/peachjasmineflower.jpg';
import grapefruitdragonfruit from '../assets/grapefruitdragonfruit.jpg';
import RhubarbStrawberry from "../assets/Rhubarb Strawberry.jpg";
import FigCardamom from "../assets/Fig Cardamom.jpg";
import CaramelCinnamon from "../assets/Caramel Cinnamon.jpg";
import Strawberryguava from "../assets/Strawberryguava.jpg";
import Mangoraspberry from "../assets/Mango Raspberry Lime.jpg";
import cherrychristmas from "../assets/cherrychristmasspice.jpg";
import quince from "../assets/quince.jpg";

//AlertBox
export const alert = signal({
    message: "",
    variant: "",
    progress: 0,
    loading: false
});


//state

// export const stateImport = signal(storedCurrentUser, storedUserList, storedUserId)
// Users

export const storedUserList = signal();

export const userEdit = signal(false);
//Jelly
export const storedJellyData = signal();
export const storedRating = signal();
export const storedComments = signal();
// export const storedJelly = computed (() => {storedJellyList.value[storedJellyId.value]})
export const storedJellyList = signal([
    {},
        {name: "Apricot-Banana", image: apricotAndBanana, id: 1, openResult: false, openPrompt: false, rating: undefined,
            comment:""},
        {name: "Orange Lime Guava Spread", image: orangeguavalime , id: 2, openResult: false, openPrompt: false,rating: undefined,
            comment:""},
        {name: "Mirabelle Plum-Spice", image: mirabellePlumWithSpice, id: 3, openResult: false, openPrompt: false, rating: undefined,
    comment:""},
        {name: "Peach Jasmine Flower", image: peachjasmineflower, id: 4, openResult: false, openPrompt: false, rating: undefined,
            comment:""},
        {name: "Grapefruit and Dragonfruit", image: grapefruitdragonfruit, id: 5, openResult: false, openPrompt: false, rating: undefined,
            comment:""},
        {name: "Rhubarb Strawberry", image: RhubarbStrawberry, id: 6, openResult: false, openPrompt: false, rating: undefined,
            comment:""},
        {name: "Fig Cardamom", image: FigCardamom, id: 7, openResult: false, openPrompt: false, rating: undefined,
            comment:""},
        {name: "Caramel Cinnamon", image: CaramelCinnamon, id: 8, openResult: false, openPrompt: false, rating: undefined,
            comment:""},
        {name: "Quince", image: quince, id: 9, openResult: false, openPrompt: false, rating: undefined,
            comment:""},
        {name: "Strawberry Guava", image: Strawberryguava, id: 10, openResult: false, openPrompt: false, rating: undefined,
            comment:""},
        {name: "Mango Raspberry Lime", image: Mangoraspberry, id: 11, openResult: false, openPrompt: false, rating: undefined,
            comment:""},
        {name: "Cherry Christmas Spice", image: cherrychristmas, id: 12, openResult: false, openPrompt: false, rating: undefined,
            comment:""},
    ]
)

// Modals

export const openResultModal = signal(
    {

    }
)

export const openPromptModal = signal(
    {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        12: false,
    }
)

// const [open1, setOpen1] = useState(false)
//
// const handleClick = (jellyId) => {
//     setOpenResult[jellyId](true)
// }
// const handleClose = () => {
//     setOpenResult[jellyId](false)
// };
//
// const handleOpen = computed(setOpen1[](true)) {
//     setOpen1(true)
// }
// const handleClose1 = () => {
//     setOpen1(false);
// };