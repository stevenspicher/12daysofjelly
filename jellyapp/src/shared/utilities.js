import {currentUser, jellyId, userList} from "../store/signalsStore";

export const getUsers = () => {
    let list = []
    //TODO: add error catching
    fetch("https://jelly-e1b63-default-rtdb.firebaseio.com/userList.json")
        .then(response => response.json())
        .then(data => {
            if (data !== null) {
                list = Object.keys(data).map((key) => (
                    {
                        id: key,
                        name: data[key].name,
                        favColor: data[key].favColor,
                        sizes: data[key].sizes,
                        wishes: data[key].wishes,
                        jellies: data[key].jellies
                    }
                ))
                userList.value = list
                console.log(list)
            }
        })
                console.log("list received")
}

export const editUser = (userData) => {

    const requestOptions = {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: userData.name,
            favColor: userData.favColor,
            sizes: userData.sizes,
            wishes: userData.wishes,
            jellies: userData.jellies
        })
    };
    //TODO: add error catching
    fetch(`https://jelly-e1b63-default-rtdb.firebaseio.com/userList/${currentUser.value.id}.json`, requestOptions)
        .then(response => response.json())

    getUsers()
}

export const editRatings = (userData, jellyDetails) => {
    userData.jellies[jellyId.value] = jellyDetails
    const requestOptions = {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            jellies: userData.jellies
        })
    };
    //TODO: add error catching
    fetch(`https://jelly-e1b63-default-rtdb.firebaseio.com/userList/${currentUser.value.id}.json`, requestOptions)
        .then(response => response.json())

    getUsers()
};

export const blink = () => {
    setInterval(
        function () {

            let blinks = document.querySelectorAll('.blink')
            for (let i = 0; i < blinks.length; i++) {
                var color = Math.floor(Math.random() * 16777215).toString(16);
                blinks[i].style.color = "#" + color;
            }
        }, 1000);
}

