export const getUsers = (setUserList) => {
    let list = []
    //TODO: add error catching
    fetch("https://daysofjelly-default-rtdb.firebaseio.com/userList.json")
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
                    }
                ))
                setUserList(list)
            }
        })
}

export const editUser = (userData, id) => {
    const requestOptions = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({[id]: userData})
    };
    //TODO: add error catching
    fetch("https://daysofjelly-default-rtdb.firebaseio.com/userList.json", requestOptions)
        .then(response => response.json())
}

export const getConsole = (location, currentUserDetails) => {
    console.clear()
    let user = {name: undefined};
    if (location.pathname !== "/login") {
        if (location.state.currentUserDetails !== undefined) {
            user.name = location.state.currentUserDetails.name
            user.wishes = location.state.currentUserDetails.wishes
            user.sizes = location.state.currentUserDetails.sizes
            user.favColor = location.state.currentUserDetails.favColor
            user.id = location.state.id
        } else {
            user.name = "no one is logged in"
        }
        console.log(location.state)
        // console.log("***")
        //
        //
        // console.log("pathname: " + location.pathname);
        // if (location.state !== null) {
        //     console.log("prevPath: " + location.state.prevPath);
        // }
        // console.log("***")
        console.log("location.state.currentUserDetails:");
        console.log("favColor: " + user.favColor);
        console.log("sizes: " + user.sizes);
        console.log("wishes: " + user.wishes);
        console.log("id: " + user.id);
        console.log("***")
        // currentUserDetails.name === undefined ? console.log("undefined") :
        // console.log("currentUserDetails: ");
        // console.log("favColor: " + currentUserDetails.favColor)
        // console.log("sizes: " + currentUserDetails.sizes)
        // console.log("wishes: " + currentUserDetails.wishes)
        // console.log("id: " + currentUserDetails.id);
        // console.log("***")
        // console.log("***")
        if (location.state.user !== undefined) {
            console.log("viewing: " + location.state.user.id);
        }
    }
}


export const getState = (location, userList, currentUser, id, user) => {
    if (user === undefined) {
        return ({
                state:
                    {
                        prevPath: location.pathname,
                        currentUserDetails: currentUser,
                        id: id,
                        userList: userList
                    }
            }
        )
    } else {
        return ({
                state:
                    {
                        prevPath: location.pathname,
                        currentUserDetails: currentUser,
                        id: id,
                        userList: userList,
                        user: user
                    }
            }
        )

    }
}
