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
                console.log("got users")
                setUserList(list)
            }
        })
}

export const editUser = (userData, state, id) => {

    const requestOptions = {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: userData.name,
            favColor: userData.favColor,
            sizes: userData.sizes,
            wishes: userData.wishes
        })
    };
    //TODO: add error catching
    fetch(`https://daysofjelly-default-rtdb.firebaseio.com/userList/${id}.json`, requestOptions)
        .then(response => response.json())

    getUsers(state.setUserList)
}

export const getConsole = (location, currentUserDetails, userList) => {
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
        // console.log(location.state)
        // console.log("***")
        //
        //
        // console.log("pathname: " + location.pathname);
        // if (location.state !== null) {
        //     console.log("prevPath: " + location.state.prevPath);
        // }
        // console.log("***")
        // console.log("location.state.currentUserDetails:");
        // console.log("favColor: " + user.favColor);
        // console.log("sizes: " + user.sizes);
        // console.log("wishes: " + user.wishes);
        // console.log("id: " + user.id);
        // console.log("***")
        // console.log("userList: " + userList);
        //
        // currentUserDetails === undefined ? console.log("undefined") :
        //     console.log(currentUserDetails)
        // console.log("currentUserDetails: ");
        // console.log("favColor: " + currentUserDetails.favColor)
        // console.log("sizes: " + currentUserDetails.sizes)
        // console.log("wishes: " + currentUserDetails.wishes)
        // console.log("id: " + currentUserDetails.id);
        // console.log("***")
        // console.log("***")
        // if (location.state.user !== undefined) {
            // console.log("viewing: " + location.state.user.id);
        // }
    }
}


export const getState = (location, currentUser, id, user, index) => {
    if (user === undefined) {
        return ({
                state:
                    {
                        prevPath: location.pathname,
                        currentUserDetails: currentUser,
                        id: id,
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
                        user: user,
                        index: index
                    }
            }
        )

    }
}
