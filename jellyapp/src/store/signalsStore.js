
import {computed, signal} from "@preact/signals-react";

import apricotAndBanana from "../assets/apricot-banana.jpg";
import orangeguavalime from "../assets/orangeguavelime.jpg";

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
        {name: "Mirabelle Plum-Spice", image: apricotAndBanana, id: 3, openResult: false, openPrompt: false, rating: undefined,
    comment:""},
        {name: "Peach Jasmine Flower", image: orangeguavalime, id: 4, openResult: false, openPrompt: false, rating: undefined,
            comment:""},
        {name: "Grapefruit and Dragonfruit", image: apricotAndBanana, id: 5, openResult: false, openPrompt: false, rating: undefined,
            comment:""},
        {name: "Rhubarb Strawberry", image: orangeguavalime, id: 6, openResult: false, openPrompt: false, rating: undefined,
            comment:""},
        {name: "Fig Cardamom", image: apricotAndBanana, id: 7, openResult: false, openPrompt: false, rating: undefined,
            comment:""},
        {name: "Caramel Cinnamon", image: orangeguavalime, id: 8, openResult: false, openPrompt: false, rating: undefined,
            comment:""},
        {name: "Quince", image: apricotAndBanana, id: 9, openResult: false, openPrompt: false, rating: undefined,
            comment:""},
        {name: "Strawberry Guava", image: orangeguavalime, id: 10, openResult: false, openPrompt: false, rating: undefined,
            comment:""},
        {name: "Mango Raspberry Lime", image: apricotAndBanana, id: 11, openResult: false, openPrompt: false, rating: undefined,
            comment:""},
        {name: "Cherry Christmas Spice", image: orangeguavalime, id: 12, openResult: false, openPrompt: false, rating: undefined,
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